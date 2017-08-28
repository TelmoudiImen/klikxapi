var models = require('../models');
var express = require('express');
var async = require('async');
var _ = require('lodash');
var moment = require('moment');
var router = express.Router();

/* GET Liste des caisses. */
router.get('/', function(req, res, next) {
    models.caisse
        .find({})
        .exec(function (err, caisses) {
            console.log(caisses)
            if (err) return res.json({error : err});
            return res.json(caisses);
        });
});

/* GET Récupérer un tva. */
router.get('/:designation', function(req, res, next) {
    models.caisse.find({designation: req.params.designation}).exec(function (err, caisse) {
        if (err) return res.json({error : err});
        else{
            var toRet = [];
            loadCaisse(caisse.designation)
        }
    });
});


/* POST Ajouter caisse. */
router.post('/', function(req, res, next) {
    var t = new models.caisse({
        designation : req.body.name,
        content : []
    });
    t.save(function(err, t){
        if(err) return res.json({error : err});
        return res.json(t);
    });

});

router.post('/load', function(req, res){
   models.caisse.find({
       designation: req.body.name
   }).exec(function(err, data){
       if(!err){
           loadCaisse(data[0], res, 0, []);
       }
   })
});

/* PUT Modifier caisse. */
router.put('/:id', function(req, res, next) {
    // var content = [];
    // _.forEach(req.body.content, function(button){
    //     content.push({
    //         libelle: button.libelle,
    //         articles: [],
    //         items: [],
    //         messages: []
    //     });
    //     _.forEach(button.items, function(item){
    //         content[content.length - 1].items.push(item);
    //     });
    //     _.forEach(button.articles, function(article){
    //         content[content.length - 1].articles.push(article._id);
    //     });
    //     _.forEach(button.messages, function(message){
    //         content[content.length - 1].messages.push(message._id);
    //     });
    // });
    models.caisse.find({
        _id : req.body._id
    }).exec(function (err, caisse) {
        if (err) return res.json({error: err});
        else {
            if(caisse.length > 0){
                caisse[0].content = req.body.content;
                caisse[0].updated_at = new Date();
                caisse[0].save();
                return res.json(caisse);
            }
            
            //loadCaisse(caisse[0], res, 0, []);
        }
    });
});

/* DELETE Supprimer caisse */
router.delete('/:id', function(req, res, next) {
    models.caisse.findByIdAndRemove(req.params.id, {}, function(err) {
        if (!err) {
            return res.json({done : 1});
        } else {
            return res.json({error : err});
        }
    });
});

//to optimise
function loadCaisse(caisse, res, index, newCaisse){
    if(!caisse) return newCaisse;
    if(caisse && index == caisse.content.length){
        return res.json(newCaisse);
    }
    var button = caisse.content[index];
    //_.forEach(caisse.content, function(button, index){
        var obj = {};
        obj.libelle = button.libelle;
        obj.items = button.items;
        models.article.find()
            .where('_id')
            .in(button.articles)
            .populate('message_kp articlesItems famille printers')
            .exec(function (err, records) {
                var filtred = [];
                _.forEach(button.articles, function(article){
                    var ind = _.findIndex(records, function(o){
                        return o._id == article;
                    });
                    if(records[ind]){
                        filtred.push(records[ind]);
                    }
                });
                obj.articles = filtred;
                models.message_kp.find()
                    .where('_id')
                    .in(button.messages)
                    .exec(function (err, records2) {
                        var filtred = [];
                        _.forEach(button.messages, function(article){
                            var ind = _.findIndex(records2, function(o){
                                return o._id == article;
                            });
                            filtred.push(records[ind]);
                        });
                        obj.messages = filtred;
                        newCaisse.push(obj);
                        loadCaisse(caisse, res, index + 1 , newCaisse)
                    });
            });
    //});
}

module.exports = router;
