var mongoose = require('mongoose'),
    autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost/klikx");

autoIncrement.initialize(connection);
var DuplicataSchema = mongoose.Schema({
    numero_duplicata: Number,
    numero_doc: {type: Number, default: null},
    date_duplicata: {type: Date, default: Date.now},
    vendeur: {type: mongoose.Schema.Types.ObjectId, ref: 'Vendeur'},
    num_reimpression: {type: Number, default: 2},
    nb_lignes: {type: Number, default: null},
    type_doc: {type: String, default: "DUPLICATA"},
    encrypted: {type: String, default: null},
    encrypted_header: {type: String, default: null},
    report: {type: String, default: null},
    report_header: {type: String, default: null},
    toHash: {type: String, default: null},
    hashed: {type: String, default: null},
});

DuplicataSchema.plugin(autoIncrement.plugin, {model: 'Duplicata', field: 'numero_duplicata', startAt: 1});

module.exports = connection.model('Duplicata', DuplicataSchema);