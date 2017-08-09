var mongoose = require('mongoose');

var FamilleSchema = mongoose.Schema({
    designation: String,
    ordre: Number(0),
    color : String
});

module.exports = mongoose.model('Famille', FamilleSchema);
