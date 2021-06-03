const { singup, singin } = require("../actions/authActions");

const SingUp = (req, res) => {    
    singup(req.body)
        .then(user => res.status(202).json({"message": "User has been created"}))
        .catch(err => res.status(400).send(err))
};

module.exports = {
    SingUp
}
