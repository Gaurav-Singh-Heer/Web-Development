const {v4: uuidv4 } = require('uuid')
const User = require('../models/20_1_user')
const {setUser} = require('../service_20/21_1_auth')

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
    res.cookie("uid", token)
    return res.redirect("/"); // redirect at home page
    // return res.render("home");
}

module.exports = { 
    handleUserSignup,
    handleUserLogin
}