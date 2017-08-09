var express = require('express');
var router = express.Router();
var Cloture = require('../models/cloture');

router.get('/', function (req, res, next) {
    Cloture.find().exec(function (err, clotures) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(clotures);
        }
    });
});

router.get('/:id', function (req, res, next) {
    Cloture.findById(req.params.id, function (err, clotures) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(clotures);
        }
    });
});

router.post('/', function (req, res, next) {
    var cloture = new Cloture({

        date_cloture: req.body.date_cloture,
        vendeur: req.body.vendeur,
        type: req.body.vendeur,
        total_periodique: req.body.total_periodique,
        total_periodique_perpetuel: req.body.total_periodique_perpetuel,
        total_tva: req.body.total_tva,
        montants: req.body.montants,
        libelle: req.body.libelle,
        encrypted: req.body.encrypted,
        report: req.body.report,
        hash: req.body.hash,
        flag: req.body.flag,
        first_ticket: req.body.first_ticket,
        last_ticket: req.body.last_ticket,
        belongs_to_date: req.body.belongs_to_date

    })
    cloture.save(function (err, c) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(c);
        }
    });
});

router.delete('/:id', function (req, res, next) {
    Cloture.findByIdAndRemove(req.params.id, function (err, c) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(c);
        }
    });
});

module.exports = router;
