const { singup, singin } = require("../actions/authActions");

const SingUp = (req, res) => {    
    singup(req.body)
        .then(token => res.status(200).json({"message": "User has been created", "token": token}))
        .catch(err => res.status(400).send(err))
};

const SingIn = (req, res) => {
    singin(req.body)
        .then(token => res.status(200).json({"message": "SingIn", "token": token}))
        .catch(err => res.status(400).send(err))
};

module.exports = {
    SingUp,
    SingIn
}
