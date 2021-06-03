const jwt = require('jsonwebtoken');
const {SECRET} = require('../config');
const {getUserById} = require('../actions/userActions');

const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers['x-access-token'];
        if(!token) return res.status(403).json({"message": "No token provided"})
        const decoded = jwt.verify(token, SECRET);
        req.userId = decoded._id;    
        const user = await getUserById(req.userId);
        if(!user) return res.status(404).json({"message": "User not found"});
        next();
    } catch (error) {
        return res.status(401).json({"message": "Unauthorized"});
    }
    
}

module.exports = {
    verifyToken
};