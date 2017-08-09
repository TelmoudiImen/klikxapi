var mongoose = require('mongoose');

var ModePaimentSchema = mongoose.Schema({
    designation: String,
    etat: Boolean,
    ecran: Boolean,
    rendu: {type: Boolean, default: false},
    editable : {type: Boolean, default: true}
});

module.exports = mongoose.model('ModePaiement', ModePaimentSchema);
