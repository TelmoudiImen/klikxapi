var express = require('express');
var router = express.Router();
var Ticket = require('../models/ticket');

router.get('/', function (req, res, next) {
    Ticket.find().exec(function (err, tickets) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(tickets);
        }
    });
});

router.get('/:id', function (req, res, next) {
    Ticket.findById(req.params.id, function (err, tickets) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(tickets);
        }
    });
});

router.post('/', function (req, res, next) {
    var ticket = new Ticket({
        date_ticket: req.body.date_ticket,
        montant: req.body.montant,
        //tva: req.body.tva,
        flag: req.body.flag,
        vendeur: req.body.vendeur,
        table: req.body.table,
        nb_couvert: req.body.nb_couvert,
        articles: req.body.articles,
        articlesDeleted: req.body.articlesDeleted,
        recap_paiement: req.body.recap_paiement,
        paiement: req.body.paiement,
        ticket_annulation: req.body.ticket_annulation,
        ticket_annulee:req.body.ticket_annulee,
        encrypted: req.body.encrypted,
        encrypted_header: req.body.encrypted_header,
        report: req.body.report,
        suivre: req.body.suivre,
        suivreSend: req.body.suivreSend,
        remiseTotalObj: req.body.remiseTotalObj
    });
    ticket.save(function (err, t) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(t);
        }
    });
});
router.delete('/:id', function (req, res, next) {
    Ticket.findByIdAndRemove(req.params.id, function (err, t) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(t);
        }
    });
});

module.exports = router;
