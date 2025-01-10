const {getUser} = require('../service_20/21_1_auth')

async function restrictToLoggedinUserOnly(req, res, next) {
    //const userUid = req.cookies?.uid;   // as using cookies so we need to install -> npm i cookie-parser
    // as we will not get cookies now we will get header so now we will do:-

    console.log("Hello",req.headers);
    const userUid = req.headers['authorization'];
    
    if(!userUid) return res.redirect("/login");
    const token = userUid.split('Bearer ')[1] // token will be looking as "Bearer 23u123khdjdh" 
    /*
    By userUid.split('Bearer') "Bearer 23u123khdjdh" will change to ["","23u123khdjdh"]
    */
    const user = getUser(userUid);
    
    if(!user) return res.redirect("/login");

    req.user = user;
    next();
}

async function checkAuth(req, res, next) {            // This will not do any forceful work it will only check if user is login then ok else also ok
    // const userUid = req.cookies?.uid;   
    const userUid = req.headers['authorization'];

    const token = userUid.split('Bearer ')[1]
    // const user = getUser(userUid);
    const user = getUser(token);
    
    req.user = user;
    next();
}

module.exports={
    restrictToLoggedinUserOnly,
    checkAuth,
}