const {getUserByEmail, getUserByUsername} = require('../actions/userActions');

const checkDuplicateUsernameOrEmail = async (req, res, next) => {
    const user  = await getUserByUsername(req.body.username);
    if(user) return res.status(400).json({"message":"The user already exists"});

    const email = await getUserByEmail(req.body.email);
    if(email) return res.status(400).json({"message":"The email already exists"});

    next();
}

module.exports = {
    checkDuplicateUsernameOrEmail
}