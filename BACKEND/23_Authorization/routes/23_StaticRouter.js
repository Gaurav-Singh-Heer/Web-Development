const express=require('express');
const {restrictTo} = require('../23_middlewares/auth');
const URL=require("../models/url");

const router=express.Router();

router.get("/admin/urls",restrictTo(["ADMIN"]), async(req,res) => {
    const allurls = await URL.find({});
    return res.render("home",{
        urls: allurls,
    });
});

router.get("/", restrictTo(["NORMAL","ADMIN"]), async(req,res)=>{           // restrictTo(["NORMAL"]) is called INLINE MIDDLEWARE          // Home Page
    const allurls=await URL.find({createdBy: req.user._id})
    console.log(allurls);  // Log the URLs to see if they exist
    return res.render('home',{
        urls: allurls
    });
});   

/*
router.get("/",async(req,res)=>{                    // Home Page
    const allurls=await URL.find({})
    console.log(allurls);  // Log the URLs to see if they exist
    return res.render('home',{
        urls: allurls
    });
});              
*/
router.get('/signup', (req,res)=>{
    return res.render("signup");
})

router.get('/login', (req,res)=>{
    return res.render("login");
})

module.exports=router;