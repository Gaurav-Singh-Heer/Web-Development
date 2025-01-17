const {Router} = require("express");
const User = require('../models/27_user')
const router = Router();

router.get("/signin", (req,res) =>{
    return res.render("signin");
});

router.get("/signup", (req,res) =>{
    return res.render("signup");
});

/*
router.post("/signin",async (req, res) =>{
    const { email,password } = req.body;
    // console.log(email,password); // To Check Error
    //const user = await User.matchPassword(email, password);  // now it will return user data
    // console.log("User",user);
    const token = await User.matchPasswordAndGenerateToken(email, password);  // now it will return user token
    
    // console.log("token",token);
    // return res.redirect("/");
    return res.cookie("token",token).redirect("/");   // if user entered correct password then we made a cookie for user named token and we redirected it to home page
});
*/
router.post("/signin",async (req, res) =>{
    const { email,password } = req.body;
    try {
        const token = await User.matchPasswordAndGenerateToken(email, password);  // now it will return user token
        return res.cookie("token",token).redirect("/");   // if user entered correct password then we made a cookie for user named token and we redirected it to home page
        
    } catch (error) {                               // If error then redirect again to signin page
        return res.render("signin", {
            error: "Incorrect Email or Password",
        })
    }
});

router.get('/logout',(req,res) => {
    res.clearCookie("token").redirect("/");   // At logout, clear cookie and redirect at Homepage
});

router.post("/signup", async (req, res) =>{
    const { fullName,email,password } = req.body;
    await User.create({
        fullName,
        email,
        password,
    });
    return res.redirect("/");     // Once The user is created redirect him to Homepage
});

module.exports = router;