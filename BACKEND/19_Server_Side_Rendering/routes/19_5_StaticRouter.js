const express=require('express');

const router=express.Router();

router.get('/',(req,res)=>{                    // Home Page
    return res.render('home')
})              

module.exports=router;
