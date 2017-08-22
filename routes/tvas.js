var express = require('express');
var router = express.Router();
var Tva = require('../models/tva');
var Article = require('../models/article');

router.get('/', function (req, res, next) {
    Tva.find().exec(function (err, tva) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(tva);
        }
    });
});

router.get('/:id', function (req, res, next) {
    Tva.findById(req.params.id, function (err, tva) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(tva);
        }
    });
});

router.post('/', function (req, res, next) {
    var tva = new Tva({

        valeur: req.body.valeur,

    });
    tva.save(function (err, t) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(t);
        }
    });
});

router.put('/:id', function (req, res, next) {
    Tva.findByIdAndUpdate(req.params.id, {
        valeur: req.body.valeur
    }, {
        new: true
    }, function (err, t) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(t);
        }
    });
});
router.delete('/:id', function (req, res, next) {
    Article.find({
        tva: req.params.id
    }).exec(function (err, tvas) {
        if(!err){
            if(tvas.length > 0 ){
                return res.json({
                    exist : true
                })
            }
            else{
                Tva.findByIdAndRemove(req.params.id, function (err,t) {
                    if (err) {
                        return res.json(err);
                    } else {
                        return res.json(t);
                    }
                });
            }
        }
        else{
            return res.json(err)
        }
    })
});


module.exports = router;
