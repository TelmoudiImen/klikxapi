var mongoose = require('mongoose');

var ArticleSchema = mongoose.Schema({
        designation: String,
        famille: {type: mongoose.Schema.Types.ObjectId, ref: 'Famille'},
        prix: Number,
        tva: Number,
        couleur: String,
        message_kp: [{type: mongoose.Schema.Types.ObjectId, ref: 'Messagekp'}],
        nb_msg: [mongoose.Schema.Types.Mixed],
        printers: [{type: mongoose.Schema.Types.ObjectId, ref: 'Imprimante'}],
        description: String,
        prix_libre: Boolean,
        bar_code: String,
        menu: {type: Boolean, default: false},
        menuItems: [mongoose.Schema.Types.Mixed],
        articlesItems: [{type: mongoose.Schema.Types.ObjectId, ref: 'Article'}]
    },
    {
        toObject: {
            virtuals: true
        },
        toJSON: {
            virtuals: true
        }
    });

module.exports = mongoose.model('Article', ArticleSchema);
