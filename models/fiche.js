var mongoose = require('mongoose'),
    autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost/klikx");

autoIncrement.initialize(connection);
var FicheSchema = mongoose.Schema({
    numero_fiche: Number,
    id_ticket: { type: mongoose.Schema.Types.ObjectId, ref: 'TicketsSolder' },
    date_impression: {type: Date, default: Date.now},
    vendeur: {type: mongoose.Schema.Types.ObjectId, ref: 'Vendeur'},
    table: [mongoose.Schema.Types.Mixed],
    nb_couvert : {type: String, default: null},
    articles: [mongoose.Schema.Types.Mixed],
    paiements: [mongoose.Schema.Types.Mixed],
    remise : {type: Boolean, default: false},
    remiseType : {type: String, default: null},
    remiseValue : {type: String, default: null}

});

FicheSchema.plugin(autoIncrement.plugin, {model: 'Fiche', field: 'numero_fiche', startAt: 1});

module.exports = connection.model('Fiche', FicheSchema);