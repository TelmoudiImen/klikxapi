var mongoose = require('mongoose');

var FamilleSchema = mongoose.Schema({
    designation: String,
    ordre: Number(0),
    color : String,
    printers : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Imprimante' }]
});

module.exports = mongoose.model('Famille', FamilleSchema);
