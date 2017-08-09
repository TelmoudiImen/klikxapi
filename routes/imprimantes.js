var express = require('express');
var router = express.Router();
var Imprimante= require('../models/imprimante');

router.get('/', function (req, res, next) {
    Imprimante.find().exec(function (err, imprimantes) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(imprimantes);
        }
    });
});

router.get('/:id', function (req, res, next) {
    Imprimante.findById(req.params.id, function (err, imprimantes) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(imprimantes);
        }
    });
});

router.post('/', function (req, res, next) {
    var imprimante = new Imprimante({
        designation: req.body.designation,
        ip:req.body.ip,
        gerant:req.body.gerant

    });
    imprimante.save(function (err, i) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(i);
        }
    });
});

router.put('/:id', function (req, res, next) {
    Imprimante.findByIdAndUpdate(req.params.id, {
        designation: req.body.designation,
        ip:req.body.ip,
        gerant:req.body.gerant
    }, {
        new: true
    }, function (err, i) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(i);
        }
    });
});

router.delete('/:id', function (req, res, next) {
    Imprimante.findByIdAndRemove(req.params.id, function (err, i) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(i);
        }
    });
});
module.exports = router;