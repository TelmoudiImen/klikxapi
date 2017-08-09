var express = require('express');
var router = express.Router();
var Parametre = require('../models/parametre');

router.get('/', function (req, res, next) {
    Parametre.find().exec(function (err, parametre) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(parametre);
        }
    });
});

router.get('/:id', function (req, res, next) {
    Parametre.findById(req.params.id, function (err, parametre) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(parametre);
        }
    });
});

router.post('/', function (req, res, next) {
    var parametre = new Parametre({
        cle: req.body.cle,
        valeur: req.body.valeur
    });
    parametre.save(function (err, p) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(p);
        }
    });
});

router.put('/:id', function (req, res, next) {
    Parametre.findByIdAndUpdate(req.params.id, {
        cle:req.body.cle,
        valeur: req.body.valeur
    }, {
        new: true
    }, function (err, p) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(p);
        }
    });
});

router.delete('/:id', function (req, res, next) {
    Parametre.findByIdAndRemove(req.params.id, function (err, p) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(p);
        }
    });
});

module.exports = router;
