const express = require('express');
const { newContact, getContacts, getContact, deleteContact } = require('../controllers/Contacts');
const { getUsers, getUser, updateUser, deleteUser, me, updateMe } = require('../controllers/Users');
const { SingUp } = require('../controllers/Auth');

const router = express.Router();

//Contacts
router.get('/contacts', getContacts);
router.get('/contacts/:id', getContact);
router.post('/contacts', newContact);
router.delete('/contacts/:id', deleteContact);

//Users
router.get("/users", getUsers);
router.get("/users/:id", getUser);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

//Auth
router.post("/auth/signup", SingUp);
router.post("/auth/signin");

module.exports = router;