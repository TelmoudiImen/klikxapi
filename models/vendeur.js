var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost/klikx");
autoIncrement.initialize(connection);

var VendeurSchema = mongoose.Schema({
    nom: String,
    prenom: {type: String, default: ''},
    role: String,
    code: String,
    code_vendeur: Number,
    permissions: mongoose.Schema.Types.Mixed,
    params: mongoose.Schema.Types.Mixed,
    photo: {type: String, default: null},
    deleted : {type: Boolean, default: false}
});

VendeurSchema.plugin(autoIncrement.plugin, {model: 'Vendeur', field: 'code_vendeur', startAt: 1});

module.exports = mongoose.model('Vendeur', VendeurSchema);
