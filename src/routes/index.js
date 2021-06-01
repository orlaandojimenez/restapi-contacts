const express = require('express');
const { newContact, getContacts, getContact, deleteContact } = require('../controllers/Contacts');

const router = express.Router();

//Contacts
router.get('/contacts', getContacts);
router.get('/contacts/:id', getContact);
router.post('/contacts', newContact);
router.delete('/contacts/:id', deleteContact);

module.exports = router;