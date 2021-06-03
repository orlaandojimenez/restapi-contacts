const User = require("../models/Users");


const createUser = async (data) => {
	const {username, email, password} = data;
    const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password)
    });
    console.log(newUser);
	return User.create(newUser);
};

const getUserByEmail = (email) => {
	return User.findOne({email:email});
};

const getUserById = (id) => {
	return User.findOne({_id:id}).select("-password");
};

const getAllUsers = () => {
	return User.find().select("-password");
};

const updateUserById = (id,data) =>{
	return User.findByIdAndUpdate(id,{$set:data},{new:true}).select("-password");
};

const deleteUserById =  (id)  => {
	return User.findByIdAndDelete({_id:id},{new:true});
};

module.exports = {
	createUser,
	getUserByEmail,
	getUserById,
	getAllUsers,
	updateUserById,
	deleteUserById
};