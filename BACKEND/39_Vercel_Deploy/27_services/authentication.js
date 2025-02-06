const JWT = require('jsonwebtoken');

const secret = "$uperman@123";

function createTokenForUser(user){                    // This Function Will take user object and generate it's Token
    const payload = {
        _id: user._id,
        email: user.email,
        profileImageURL: user.profileImageURL,
        role: user.role,
    }
/*
    const token = JWT.sign(payload, secret,{
        expiresIn: '1h' // Token expiration time (1 hour)    // we can also set expiration time in tokens
    })
*/
    const token = JWT.sign(payload, secret);
    return token;
}

function validateToken(token){                         // This function will take token and validate it
    const payload = JWT.verify(token,secret);
    return payload;
}

module.exports = {
    createTokenForUser,
    validateToken,
}