var mongoose = require('mongoose');

var VendeurSchema = mongoose.Schema({
    nom: String,
    prenom: {type: String, default: ''},
    role: String,
    code: String,
    code_vendeur: Number,
    permissions: mongoose.Schema.Types.Mixed,
    params: mongoose.Schema.Types.Mixed,
    photo: String
});

module.exports = mongoose.model('Vendeur', VendeurSchema);
