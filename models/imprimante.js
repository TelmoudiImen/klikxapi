var mongoose = require('mongoose');

var ImprimanteSchema = mongoose.Schema({
    designation: String,
    ip: String,
    gerant : { type: Boolean, default: false }
});

module.exports = mongoose.model('Imprimante', ImprimanteSchema);
