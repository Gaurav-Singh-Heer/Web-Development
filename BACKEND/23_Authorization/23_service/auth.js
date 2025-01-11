const jwt = require ("jsonwebtoken")
const secret = "Piyush$123@$"

function setUser (user) {     // This Function will Create our Token for user
    const payload={
        _id: user._id,
        email: user.email,
        role: user.role,
    }
    return jwt.sign(payload, secret); // Secret is our secret key (STAMP ON TICKET) 
}

//FOR NO CRASH
function getUser(token){
    if(!token) return null;
    try{
        return jwt.verify(token, secret);   // Verify with our secret key again
    }
    catch(error){
        return null;
    }
}

module.exports={
    setUser,
    getUser,
}