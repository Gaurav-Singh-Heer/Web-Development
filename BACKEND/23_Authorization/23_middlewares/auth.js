const {getUser} = require('../23_service/auth')

function checkForAuthentication(req, res, next) {
    const tokenCookie = req.cookies?.token; // ?. stands for null check
    req.user=null;
    if(!tokenCookie){
        return next();
    }
    
    const token = tokenCookie;
    const user = getUser(token)

    req.user = user;
    return next();
}   

function restrictTo(roles) {    // Here we will pass array of Roles // Role example:- Admin, Employee, Normal, Customer
    return function(req,res,next){
        if(!req.user) return res.redirect("/login");

        if(!roles.includes(req.user.role)) return res.end("UnAuthorized");

        return next();   // when both if Satisfied
    }
}

module.exports={
    checkForAuthentication,
    restrictTo,
}