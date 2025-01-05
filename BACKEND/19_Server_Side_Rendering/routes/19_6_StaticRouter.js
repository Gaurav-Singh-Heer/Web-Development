const express=require('express');
const URL=require("../models/url")

const router=express.Router();

router.get("/",async(req,res)=>{                    // Home Page
    const allurls=await URL.find({})
    console.log(allurls);  // Log the URLs to see if they exist
    return res.render('home',{
        urls: allurls
    });
});              

module.exports=router;