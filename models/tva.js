var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost/klikx");
autoIncrement.initialize(connection);

/*var tab = ["a"]*/

var TvaSchema = mongoose.Schema({
    valeur: Number(0),
    libelle: String
}, {
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
});
TvaSchem.fromCharCode('A'.charCodeAt('libelle')+1);



/*
TvaSchema.plugin(autoIncrement.plugin, {model: 'Tva', field: 'libelle', startAt:'a'});
*/

module.exports = connection.model('Tva', TvaSchema);
