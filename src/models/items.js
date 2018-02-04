const mongoose = require('mongoose');
//Creando un esquema
const Schema = mongoose.Schema;

const Item = new Schema({
    name: {type: String},
    price: {type: Number}
}, {
    collection: 'items'
});

module.exports = mongoose.model('Item', Item);