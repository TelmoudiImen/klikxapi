var express = require('express');
var router = express.Router();
var MessageKp= require('../models/message');

router.get('/', function (req, res, next) {
    MessageKp.find().exec(function (err, messages) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(messages);
        }
    });
});

router.get('/:id', function (req, res, next) {
    MessageKp.findById(req.params.id, function (err, messages) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(messages);
        }
    });
});

router.post('/', function (req, res, next) {
    var message = new MessageKp({
        designation: req.body.designation,
        messages:req.body.messages
    });
    message.save(function (err, f) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(f);
        }
    });
});

router.put('/:id', function (req, res, next) {
    MessageKp.findByIdAndUpdate(req.params.id, {
        designation: req.body.designation,
        messages:req.body.messages
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
    MessageKp.findByIdAndRemove(req.params.id, function (err, m) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(m);
        }
    });
});
module.exports = router;