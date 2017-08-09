var mongoose = require('mongoose'),
    autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost/klikx");

autoIncrement.initialize(connection);
var TicketSchema = mongoose.Schema({
    numero_ticket: Number,
    date_ticket: {type: Date, default: Date.now},
    montant: Number,
    //tva: Number,
    flag: String,
    vendeur: {type: mongoose.Schema.Types.ObjectId, ref: 'Vendeur'},
    table: [mongoose.Schema.Types.Mixed],
    nb_couvert: Number,
    articles: [mongoose.Schema.Types.Mixed],
    articlesDeleted: [mongoose.Schema.Types.Mixed],
    recap_paiement: [mongoose.Schema.Types.Mixed],
    paiement: [mongoose.Schema.Types.Mixed],
    ticket_annulation: {type: Number, default: 0},
    ticket_annulee: {type: Boolean, default: false},
    encrypted: {type: String, default: null},
    encrypted_header: {type: String, default: null},
    report: {type: String, default: null},
    suivre: [mongoose.Schema.Types.Mixed],
    suivreSend: [mongoose.Schema.Types.Mixed],
    remiseTotalObj: [mongoose.Schema.Types.Mixed]

}, {
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
});

TicketSchema
    .virtual('montant_ht')
    .get(function () {
        return (this.montant / (this.tva + 100)) * 100;
    });


TicketSchema.plugin(autoIncrement.plugin, {model: 'Ticket', field: 'numero_ticket', startAt: 1});

module.exports = connection.model('Ticket', TicketSchema);