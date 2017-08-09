var mongoose = require('mongoose');

var MessageKpSchema = mongoose.Schema({
    designation: String,
    message: [String]

});

module.exports = mongoose.model('MessageKp', MessageKpSchema);
