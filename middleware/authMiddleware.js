const asyncHandler = require("express-async-handler")
const jwt = require('jsonwebtoken');
const Customer = require("../models/Customer");

const protect = asyncHandler(async(req,res,next) => {
    let token;
    try {
        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await Customer.findById(decoded.id).select('-password');
        }
        console.log('Authentication Worked!');
        next();    
    } catch (error) {
        console.log(error);
        res.send(401);
    }
    if(!token) res.send(401);
});

module.exports = protect;