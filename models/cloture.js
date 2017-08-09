var mongoose = require('mongoose'),
    autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost/klikx");

autoIncrement.initialize(connection);
var ClotureSchema = mongoose.Schema({
    numero_cloture: Number,
    date_cloture: {type: Date, default: Date.now},
    vendeur: {type: mongoose.Schema.Types.ObjectId, ref: 'Vendeur'},
    total_periodique: Number,
    total_periodique_perpetuel: Number,
    total_tva: Number,
    montants: [mongoose.Schema.Types.Mixed],
    libelle: {type: String, default: null},
    encrypted: {type: String, default: null},
    report: {type: String, default: null},
    hash: {type: String, default: null},
    flag: {type: String, default: "periodique"},
    first_ticket: {type: String, default: null},
    last_ticket: {type: String, default: null},
    belongs_to_date: {type: Date, default: Date.now}


});


ClotureSchema.plugin(autoIncrement.plugin, {model: 'Cloture', field: 'numero_cloture', startAt: 1});

module.exports = connection.model('Cloture', ClotureSchema);