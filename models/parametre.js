var mongoose = require('mongoose');

var ParametreSchema = mongoose.Schema({
    cle: String,
    valeur: String
});

module.exports = mongoose.model('Parametre', ParametreSchema);
