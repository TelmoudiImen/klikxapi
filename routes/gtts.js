var express = require('express');
var router = express.Router();
var Gtt = require('../models/gtt');

router.get('/', function (req, res, next) {
    Gtt.find().exec(function (err, gtts) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(gtts);
        }
    });
});

router.get('/:id', function (req, res, next) {
    Gtt.findById(req.params.id, function (err, gtt) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(gtt);
        }
    });
});

router.post('/', function (req, res, next) {
    var gtt = new Gtt({
        numero_ticket: req.body.numero_ticket,
        montants: req.body.montants,
        date_gtt: req.body.date_gtt,
        grand_total: req.body.grand_total,
        grand_total_perpetuel: req.body.grand_total_perpetuel,
        report: req.body.report,
        signature: req.body.signature
    });
    gtt.save(function (err, g) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(g);
        }
    });
});

router.put('/:id', function (req, res, next) {
    Gtt.findByIdAndUpdate(req.params.id, {
        valeur: req.body.valeur,
        libelle:req.body.libelle
    }, {
        new: true
    }, function (err,g) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(g);
        }
    });
});
// Delete
router.delete('/:id', function (req, res, next) {
    Gtt.findByIdAndRemove(req.params.id, function (err, g) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(g);
        }
    });
});
module.exports = router;
