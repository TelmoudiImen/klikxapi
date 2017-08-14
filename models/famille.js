var mongoose = require('mongoose');
var _ = require('lodash');

var FamilleSchema = mongoose.Schema({
    designation: String,
    ordre: Number(0),
    color : String,
    printers : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Imprimante' }]
},
{
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
});

FamilleSchema
    .virtual('printersNames')
    .get(function () {
        var temp = [];
	    _.forEach(this.printers, function(value) {
	        if(value.designation != undefined){
	            temp.push(value.designation);
	        }
	    });
	    return temp.join(', ');
    });

module.exports = mongoose.model('Famille', FamilleSchema);
