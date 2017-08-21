var express = require('express');
var router = express.Router();
var Tva = require('../models/tva');

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
        valeur: req.body.valeur

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
        valeur: req.body.valeur,
        libelle:req.body.libelle

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
    Tva.findByIdAndRemove(req.params.id, function (err, t) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(t);
        }
    });
});

module.exports = router;
