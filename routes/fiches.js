var express = require('express');
var router = express.Router();
var Fiche = require('../models/fiche');

router.get('/', function (req, res, next) {
    Fiche.find().exec(function (err, fiches) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(fiches);
        }
    });
});

router.get('/:id', function (req, res, next) {
    Fiche.findById(req.params.id, function (err, fiches) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(fiches);
        }
    });
});

router.post('/', function (req, res, next) {
    var fiche = new Fiche({
        id_ticket: req.body.id_ticket,
        date_impression: req.body.date_impression,
        vendeur:req.body.vendeur,
        table: req.body.table,
        nb_couvert : req.body.nb_couvert,
        articles: req.body.articles,
        paiements: req.body.paiements,
        remise : req.body.remise,
        remiseType : req.body.remiseType,
        remiseValue : req.body.remiseValue
    });
    fiche.save(function (err, f) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(f);
        }
    });
});

router.put('/:id', function (req, res, next) {
    Fciche.findByIdAndUpdate(req.params.id, {
        id_ticket: req.body.id_ticket,
        date_impression: req.body.date_impression,
        vendeur:req.body.vendeur,
        table: req.body.table,
        nb_couvert : req.body.nb_couvert,
        articles: req.body.articles,
        paiements: req.body.paiements,
        remise : req.body.remise,
        remiseType : req.body.remiseType,
        remiseValue : req.body.remiseValue

    }, {
        new: true
    }, function (err, f) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(f);
        }
    });
});

router.delete('/:id', function (req, res, next) {
    Fiche.findByIdAndRemove(req.params.id, function (err, f) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(f);
        }
    });
});

module.exports = router;
