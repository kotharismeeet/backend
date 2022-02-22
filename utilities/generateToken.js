const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    // jwt sign first arg: payload second arg: secret and third arg : expire
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'30d'});
}

module.exports = generateToken;