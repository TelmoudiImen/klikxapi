var express = require('express');
var router = express.Router();
var Famille = require('../models/famille');

router.get('/', function (req, res, next) {
    Famille.find({deleted : false}).populate('printers').exec(function (err, familles) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(familles);
        }
    });
});
router.get('/:id', function (req, res, next) {
    Famille.findById(req.params.id, function (err, f) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(f);
        }
    });
});

router.post('/', function (req, res, next) {
    var famille = new Famille({
        designation: req.body.designation,
        ordre: (req.body.ordre !== "") ? parseInt(req.body.ordre) : 0,
        color:req.body.color,
        printers: req.body.printers
    });

    famille.save(function (err, f) {
        if (err) {
            return res.json(err);
        } else {
          f.populate('printers', function(error, famille){
              return res.json(famille);
          });
        }
    });
});

router.put('/:id', function (req, res, next) {
    Famille.findByIdAndUpdate(req.params.id, {
        designation: req.body.designation,
        ordre: (req.body.ordre !== "") ? parseInt(req.body.ordre) : 0,
        color:req.body.color,
        printers: req.body.printers
    }, {
        new: true
    }, function (err, f) {
        if (err) {
            return res.json(err);
        } else {
          f.populate('printers', function(error, famille){
            return res.json(famille);
          });
        }
    });
});
router.delete('/:id', function (req, res, next) {
    Famille.findByIdAndUpdate(req.params.id, {
        deleted : true
    }, {
        new: true
    }, function (err,f) {
        if (err) {
            return res.json(err);
        } else {
            return res.json(f);
        }
    });
});


//update many records//
router.put('/',function (req, res, next) {
  var data=req.body;
  data.forEach(function(obj, index) {
    Famille.update({_id:obj._id}, {"$set":
         {
           designation: obj.designation,
           ordre: obj.ordre,
           color:  obj.color
         }
       },
       function (err, f) {
           if (err) {
               if(index == (data.length - 1))
                return res.json(err);
           } else {
               if(index == (data.length - 1))
               return res.json(f);
           }
       }
    )
  });
});
module.exports = router;
