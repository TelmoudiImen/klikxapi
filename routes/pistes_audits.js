var express = require('express');
var router = express.Router();
var PisteAudit = require('../models/piste_audit');

router.get('/', function (req, res, next) {
    PisteAudit.find().exec(function (err, pistes_audits) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(pistes_audits);
        }
    });
});

router.get('/:id', function (req, res, next) {
    PisteAudit.findById(req.params.id, function (err, parametrpistes_auditse) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(pistes_audits);
        }
    });
});

router.post('/', function (req, res, next) {
    var piste_audit = new PisteAudit({
        code_operation: req.body.code_operation,
        libelle_operation: req.body.libelle_operation,
        date_operation : req.body.date_operation,
        code_operateur:req.body.code_operateur,
        code_caisse:req.body.code_caisse,
        info:req.body.info,
        report:req.body.report,
        signature:req.body.signature
    });
    piste_audit.save(function (err, p) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(p);
        }
    });
});

router.put('/:id', function (req, res, next) {
    PisteAudit.findByIdAndUpdate(req.params.id, {
        code_operation: req.body.code_operation,
        libelle_operation: req.body.libelle_operation,
        date_operation : req.body.date_operation,
        code_operateur:req.body.code_operateur,
        code_caisse:req.body.code_caisse,
        info:req.body.info,
        report:req.body.report,
        signature:req.body.signature
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
    PisteAudit.findByIdAndRemove(req.params.id, function (err, p) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(p);
        }
    });
});

module.exports = router;
