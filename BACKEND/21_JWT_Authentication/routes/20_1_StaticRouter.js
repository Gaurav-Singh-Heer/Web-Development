const express=require('express');
const URL=require("../models/url")

const router=express.Router();

router.get("/",async(req,res)=>{                    // Home Page
    if(!req.user) return res.redirect("/login");
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