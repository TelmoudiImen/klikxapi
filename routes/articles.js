var express = require('express');
var router = express.Router();
var Article = require('../models/article');

router.get('/', function (req, res, next) {
    Article.find().exec(function (err, articles) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(articles);
        }
    });
});

router.get('/:id', function (req, res, next) {
    Article.findById(req.params.id, function (err, articles) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(articles);
        }
    });
});

router.post('/', function (req, res, next) {
    var article = new Article({
        designation: req.body.designation,
        famille : req.body.famille,
        prix : req.body.prix,
        tva: req.body.tva,
        couleur: req.body.couleur,
        message_kp:req.body.message_kp,
        nb_msg: req.body.nb_msg,
        printers: req.body.printers,
        description: req.body.description,
        prix_libre:req.body.prix_libre,
        bar_code : req.body.bar_code,
        menu : req.body.menu,
        menuItems : req.body.menuItems,
        articlesItems : req.body.articlesItems
    });
    article.save(function (err, a) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(a);
        }
    });
});

router.put('/:id', function (req, res, next) {
    Article.findByIdAndUpdate(req.params.id, {
        designation: req.body.designation,
        famille : req.body.famille,
        prix : req.body.prix,
        tva: req.body.tva,
        couleur: req.body.couleur,
        message_kp:req.body.message_kp,
        nb_msg: req.body.nb_msg,
        printers: req.body.printers,
        description: req.body.description,
        prix_libre:req.body.prix_libre,
        bar_code : req.body.bar_code,
        menu : req.body.menu,
        menuItems : req.body.menuItems,
        articlesItems : req.body.articlesItems
    }, {
        new: true
    }, function (err, a) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(a);
        }
    });
});

router.delete('/:id', function (req, res, next) {
    Article.findByIdAndRemove(req.params.id, function (err, a) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(a);
        }
    });
});

module.exports = router;