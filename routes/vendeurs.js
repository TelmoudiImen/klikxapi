var express = require('express');
var router = express.Router();
var Vendeur = require('../models/vendeur');

router.get('/', function (req, res, next) {
    Vendeur.find().exec(function (err, vendeurs) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(vendeurs);
        }
    });
});

router.get('/:id', function (req, res, next) {
    Vendeur.findById(req.params.id, function (err, vendeurs) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(vendeurs);
        }
    });
});

router.post('/', function (req, res, next) {
    var vendeur = new Vendeur({
        designation: req.body.designation,
        nom: req.body.nom,
        prenom: req.body.prenom,
        role:  req.body.role,
        code: req.body.code,
        code_vendeur:req.body.code_vendeur,
        permissions: req.body.permissions,
        params: req.body.params,
        photo: req.body.photo
    });
    vendeur.save(function (err, v) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(v);
        }
    });
});

router.put('/:id', function (req, res, next) {
    Vendeur.findByIdAndUpdate(req.params.id, {
        designation: req.body.designation,
        nom: req.body.nom,
        prenom: req.body.prenom,
        role:  req.body.role,
        code: req.body.code,
        code_vendeur:req.body.code_vendeur,
        permissions: req.body.permissions,
        params: req.body.params,
        photo: req.body.photo
    }, {
        new: true
    }, function (err, v) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(v);
        }
    });
});

router.delete('/:id', function (req, res, next) {
    Vendeur.findByIdAndRemove(req.params.id, function (err, v) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(v);
        }
    });
});

module.exports = router;