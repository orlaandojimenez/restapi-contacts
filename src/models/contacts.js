const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
     name:{
         type: String,
         required: true
     },
     phone:{
        type: String,
        required: true
     },
    addressLines:[{
        type: String
    }]
});

module.exports = mongoose.model('contacts',ContactSchema);