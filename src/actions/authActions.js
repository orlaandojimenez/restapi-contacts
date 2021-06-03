const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const {SECRET} = require('../config');
const { createUser, getUserByEmail } = require('../actions/userActions');

Date.prototype.addDays = function (days) {
	var date = new Date(this.valueOf());
	date.setDate(date.getDate() + days);
	return date;
};

const createToken = ({ email, _id}) => {
    const exp = new Date().addDays(1).getTime();    
	const payload = {
		_id,
		email,
		exp
	};
	return jwt.sign(payload, SECRET);
};

const singup = (data) => {   
    return new Promise((resolve, reject) => {
        createUser(data).then(
            user => {
                const token = createToken(user);
                console.log(token);
                resolve(token);
            }
        ).catch(reject);
    }); 
}  

const singin = ({email, password}) => {
    return new Promise((resolve, reject) => {
		getUserByEmail(email).then((user) => {
            if(!user) reject(new Error("User not found"));
			bcrypt.compare(password, user.password, (err, isValid) => {
				if(err) reject(err);
				isValid ? resolve(createToken(user)) : reject(new Error("Password does not match"));
			});
		}).catch(reject)
	});
}

module.exports = {
    singup,
    singin
};