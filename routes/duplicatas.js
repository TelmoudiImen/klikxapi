var express = require('express');
var router = express.Router();
var Duplicata = require('../models/duplicata');

router.get('/', function (req, res, next) {
    Duplicata.find().exec(function (err, duplicatas) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(duplicatas);
        }
    });
});

router.get('/:id', function (req, res, next) {
    Duplicata.findById(req.params.id, function (err, duplicatas) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(duplicatas);
        }
    });
});

router.post('/', function (req, res, next) {
    var duplicata = new Duplicata({
        numero_doc: req.body.numero_doc,
        date_duplicata:req.body.date_duplicata,
        vendeur: req.body.vendeur,
        num_reimpression: req.body.num_reimpression,
        nb_lignes: req.body.nb_lignes,
        type_doc: req.body.type_doc,
        encrypted: req.body.encrypted,
        encrypted_header: req.body.encrypted_header,
        report: req.body.report,
        report_header: req.body.report_header,
        toHash: req.body.toHash,
        hashed: req.body.hashed

    })
    duplicata.save(function (err, d) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(d);
        }
    });
});

router.put('/:id', function (req, res, next) {
    Duplicata.findByIdAndUpdate(req.params.id, {
        numero_doc: req.body.numero_doc,
        date_duplicata:req.body.date_duplicata,
        vendeur: req.body.vendeur,
        num_reimpression: req.body.num_reimpression,
        nb_lignes: req.body.nb_lignes,
        type_doc: req.body.type_doc,
        encrypted: req.body.encrypted,
        encrypted_header: req.body.encrypted_header,
        report: req.body.report,
        report_header: req.body.report_header,
        toHash: req.body.toHash,
        hashed: req.body.hashed
    }, {
        new: true
    }, function (err, d) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(d);
        }
    });
});

router.delete('/:id', function (req, res, next) {
    Duplicata.findByIdAndRemove(req.params.id, function (err, d) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(d);
        }
    });
});
module.exports = router;
