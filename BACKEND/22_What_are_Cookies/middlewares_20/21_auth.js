const {getUser} = require('../service_20/21_1_auth')

async function restrictToLoggedinUserOnly(req, res, next) {
    const userUid = req.cookies?.uid;   // as using cookies so we need to install -> npm i cookie-parser

    if(!userUid) return res.redirect("/login");
    
    const user = getUser(userUid);
    
    if(!user) return res.redirect("/login");

    req.user = user;
    next();
}

async function checkAuth(req, res, next) {            // This will not do any forceful work it will only check if user is login then ok else also ok
    const userUid = req.cookies?.uid;   

    const user = getUser(userUid);
    
    req.user = user;
    next();
}

module.exports={
    restrictToLoggedinUserOnly,
    checkAuth,
}