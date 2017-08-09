var mongoose = require('mongoose');

var GttSchema = mongoose.Schema({
    numero_ticket: Number,
    montants: [mongoose.Schema.Types.Mixed],
    date_gtt: {type: Date, default: Date.now},
    grand_total: Number,
    grand_total_perpetuel: Number,
    report: String,
    signature: String
}, {
    toJSON: {
        virtuals: true
    }
});


module.exports = mongoose.model('Gtt', GttSchema);
