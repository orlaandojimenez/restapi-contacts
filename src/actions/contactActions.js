const Contact = require('../models/Contacts');

const createContact = (data) => {
    return Contact.create(data);
};

const getAllContacts = () => {
    return Contact.find().sort({name: 1});
};

const getContactById = (id) => {
    return Contact.findOne({_id: id});
};

const deleteContactById = (id) => {
    return Contact.findByIdAndDelete({_id: id}); 
};

module.exports = {
    createContact,
    getAllContacts,
    getContactById,
    deleteContactById
};