var mongoose = require('mongoose');

var MessageKpSchema = mongoose.Schema({
    designation: String,
    messages: [String]

});

module.exports = mongoose.model('MessageKp', MessageKpSchema);
