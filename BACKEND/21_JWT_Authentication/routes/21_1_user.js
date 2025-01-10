const express=require('express')
const {handleUserSignup, handleUserLogin} = require("../controllers/21_1_user")
const router=express.Router();

router.post("/",handleUserSignup)                     // For Sign Up
router.post("/login",handleUserLogin)                     // For Login

module.exports = router;