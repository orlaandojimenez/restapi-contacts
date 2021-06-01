const { createContact, getAllContacts, getContactById, deleteContactById } = require('../actions/contactActions');

const newContact = (req, res) => {
    createContact(req.body)
        .then(contact => res.status(202).json({"message": "Contact has been created"}))
        .catch(err => res.status(400).send(err))
};

const getContacts = (req, res) => {
    getAllContacts()
        .then(contacts => res.status(200).json(contacts))
        .catch(err => res.status(400).send(err))
};

const getContact = (req, res) => {
    getContactById(req.params.id)
        .then(contact => {
            console.log(contact);
            if(!contact) res.status(404).json({"message": "Contact does not exist"});
            res.status(200).json(contact)
        }).catch(err => res.status(400).send(err))
}

const deleteContact = (req, res) => {
    deleteContactById(req.params.id)
        .then(contact => {
            if(!contact) res.status(404).json({"message": "Contact does not exist"});
            res.status(204).json({"message": "Contact has been removed"})
        })
        .catch(err => res.status(400).send(err))
};

module.exports = {
    newContact,
    getContacts,
    getContact,
    deleteContact
};