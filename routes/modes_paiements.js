var express = require('express');
var router = express.Router();
var ModePaiement = require('../models/mode_paiement');

router.get('/', function (req, res, next) {
    ModePaiement.find().exec(function (err, modes_paiements) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(modes_paiements);
        }
    });
});

router.get('/:id', function (req, res, next) {
    MessageKp.findById(req.params.id, function (err, modes_paiements) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(modes_paiements);
        }
    });
});

router.post('/', function (req, res, next) {
    var mode_maiement = new ModePaiement({
        designation: req.body.designation,
        etat: req.body.etat,
        ecran: req.body.ecran,
        rendu: req.body.rendu,
        editable: req.body.editable
    });
    mode_maiement.save(function (err, f) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(f);
        }
    });
});

router.put('/:id', function (req, res, next) {
    ModePaiement.findByIdAndUpdate(req.params.id, {
        designation: req.body.designation,
        etat: req.body.etat,
        ecran: req.body.ecran,
        rendu: req.body.rendu,
        editable: req.body.editable
    }, {
        new: true
    }, function (err, m) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(m);
        }
    });
});

router.delete('/:id', function (req, res, next) {
    ModePaiement.findByIdAndRemove(req.params.id, function (err, m) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(m);
        }
    });
});

module.exports = router;
