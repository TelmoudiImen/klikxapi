var express = require('express');
var router = express.Router();
var ModePaiement = require('../models/mode_paiement');
var Ticket=require('../models/ticket');

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
        tiroir: req.body.tiroir,
        editable: req.body.editable,
        monnai: req.body.monnai,
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
        tiroir: req.body.tiroir,
        editable: req.body.editable,
        monnai: req.body.monnai,
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
    Ticket.find({
        paiement: req.params.id
    }).exec(function (err, paiements) {
        if(!err){
            if(paiements.length > 0 ){
                return res.json({
                    exist : true
                })
            }
            else{
                ModePaiement.findByIdAndUpdate(req.params.id, {
                    deleted : true
                }, {
                    new: true
                }, function (err,m) {
                    if (err) {
                        return res.json(err);
                    } else {
                        return res.json(m);
                    }
                });
            }
        }
        else{
            return res.json(err)
        }
    })
});

module.exports = router;
