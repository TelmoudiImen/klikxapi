var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CaisseSchema = mongoose.Schema({
    designation: String,
    content: [Schema.Types.Mixed],
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Caisse', CaisseSchema);
