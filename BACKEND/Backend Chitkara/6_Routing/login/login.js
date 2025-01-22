//import express module
let express = require('express')
//create router instance
let router = express.Router()
//create get request
router.get("/",(req, res)=>{
    res.send({ 'message': 'Welcome to Login module' })
})
//create one more get request
router.get("/login/:uname/:upwd", (req, res) => {
    //here we are reading url parameters using params
    let uname = req.params.uname
    let upwd = req.params.upwd
    if (uname == 'admin' && upwd == 'admin')
        res.json({ 'login': 'success' })
    else
        res.json({ 'login': 'failed' })
})
//export router
module.exports = router
