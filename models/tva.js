var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost/klikx");
autoIncrement.initialize(connection);
var libs = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r'];
var TvaSchema = mongoose.Schema({
    valeur: Number,
    number: Number,
    default : {type: Boolean, default: false},

}, {
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
});
TvaSchema
    .virtual('libelle')
    .get(function () {
        return libs[this.number - 1]
    });

TvaSchema.plugin(autoIncrement.plugin, {model: 'Tva', field: 'number', startAt: 1});
module.exports = mongoose.model('Tva', TvaSchema);
