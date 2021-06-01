const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
     name:String,
     phone:String,
    addressLines:[String]
});

module.exports = mongoose.model('contacts',ContactSchema);