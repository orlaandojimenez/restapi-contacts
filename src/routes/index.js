const express = require('express');
const { newContact, getContacts, getContact, deleteContact } = require('../controllers/Contacts');
const { getUsers, getUser, updateUser, deleteUser, me, updateMe } = require('../controllers/Users');
const { SingUp, SingIn } = require('../controllers/Auth');
const {verifyToken} = require('../middlewares/isAuthenticated');
const {checkDuplicateUsernameOrEmail} = require('../middlewares/verifySingUp');

const router = express.Router();

//Contacts
router.get('/contacts', verifyToken, getContacts);
router.get('/contacts/:id', verifyToken, getContact);
router.post('/contacts', verifyToken, newContact);
router.delete('/contacts/:id', verifyToken, deleteContact);

//Users
router.get("/users", verifyToken, getUsers);
router.get("/users/:id", verifyToken, getUser);
router.patch("/users/:id", verifyToken, updateUser);
router.delete("/users/:id", verifyToken, deleteUser);

//Auth
router.post("/auth/signup",checkDuplicateUsernameOrEmail, SingUp);
router.post("/auth/signin", SingIn);

module.exports = router;