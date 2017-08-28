var express = require('express');
var router = express.Router();
var MessageKp= require('../models/message');
var Article = require('../models/article');

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
    Article.find({
        message_kp: req.params.id
    }).exec(function (err, messages) {
        if(!err){
            if(messages.length > 0 ){
                return res.json({
                    exist : true
                })
            }
            else{
                MessageKp.findByIdAndRemove(req.params.id, function (err,m) {
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