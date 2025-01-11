const express=require('express')
const {handleUserSignup, handleUserLogin} = require("../controllers/23_user")
const router=express.Router();

router.post("/",handleUserSignup)                     // For Sign Up
router.post("/login",handleUserLogin)                     // For Login

module.exports = router;