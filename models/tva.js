var mongoose = require('mongoose');

var TvaSchema = mongoose.Schema({
    valeur: Number(0),
    libelle: String
});

module.exports = mongoose.model('Tva', TvaSchema);
