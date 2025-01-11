const {v4: uuidv4 } = require('uuid')
const User = require('../models/23_user')
const {setUser} = require('../23_service/auth')

async function handleUserSignup(req, res){
    const {name, email, password} = req.body;
    await User.create({
        name,
        email,
        password,
    });
    return res.redirect("/"); // redirect at home page
    // return res.render("home");// instead of JSON response as we are working with ejs so will send res.render
}

async function handleUserLogin(req, res){
    const {email, password} = req.body;
    const user = await User.findOne({ email, password });
    
    if(!user) return res.render("login",{
        error: "Invalid Username or Password",
    });

    // const sessionId = uuidv4();
    // setUser(sessionId, user);
    // res.cookie("uid", sessionId)
    
    const token = setUser(user); // for stateless we don't need session id we only pass user and get token
    res.cookie("token", token); // now we will not make cookies  We will do:- return res.json({token});
    return res.redirect("/"); // redirect at home page after making Cookie
    // return res.json({token});  // THIS WAS DONE TO EXPLAIN COOKIES IN Lec_22
    // return res.render("home");
}

module.exports = { 
    handleUserSignup,
    handleUserLogin
}