const {Router} = require("express");
const User = require('../models/user')
const router = Router();

router.get("/signin", (req,res) =>{
    return res.render("signin");
});

router.get("/signup", (req,res) =>{
    return res.render("signup");
});

router.post("/signin",async (req, res) =>{
    const { email,password } = req.body;
    // console.log(email,password); // To Check Error
    const user = await User.matchPassword(email, password);  // now it will return user data
    console.log(user)
    return res.redirect("/");
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