const { createUser } = require('../actions/userActions');

const singup = async (data) => {    
    return createUser(data);
}  

const singin = (data) => {
    return res.json('signin');
}

module.exports = {
    singup,
    singin
};