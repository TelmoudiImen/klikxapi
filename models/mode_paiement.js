var mongoose = require('mongoose');

var ModePaimentSchema = mongoose.Schema({
    designation: String,
    etat: Boolean,
    ecran: Boolean,
    rendu: {type: Boolean, default: false},
    tiroir: {type: Boolean, default: true},
    editable : {type: Boolean, default: true},
    monnai : {type: Boolean, default: false},
});

module.exports = mongoose.model('ModePaiement', ModePaimentSchema);
