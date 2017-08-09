var mongoose = require('mongoose');

var PisteAuditSchema = mongoose.Schema({
    code_operation: Number(0),
    libelle_operation: String,
    date_operation : { type: Date, default: Date.now },
    code_operateur:String,
    code_caisse:String,
    info:String,
    report:String,
    signature:String
});
module.exports = mongoose.model('PisteAudit', PisteAuditSchema);
