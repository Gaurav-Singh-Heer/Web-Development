//?
const  express = require('express');

const router = express.Router();

// Route handler for GET/api
app.get('/', (req, res) => {
    res.json({ message: `Hello, Welcome to the API` });
});

// Route Handler for Get /api/greet/:name
router.get('/greet/:name', (req,res) =>{
    const name = req.params.name;
    res.json({message: `Hello, ${name}`});
})

// Route handler for POST/api/echo (echoes the posted data)
router.post('/echo', (req, res)=>{
    const data = req.body
    res.json({message: 'Here is your data', data})
})

// Route handler for GET /api/random (returns a random number)
app.get('/random', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    res.json({ randomNumber});
});

module.exports = router;