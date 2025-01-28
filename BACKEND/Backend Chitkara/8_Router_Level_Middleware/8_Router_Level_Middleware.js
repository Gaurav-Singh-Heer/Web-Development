const express = require("express");

const app = express();

const router = express.Router();

const PORT = 8000;

router.use((req,res,next) =>{
    console.log("Router Level Middleware");
    next();
})

router.get('/users', (req,res) => {
    res.send('User list')
})

app.use('/api', router);         // All routes that match "/api/*" will pass through the router

app.listen(PORT, () => {
    console.log(`Server is running at PORT: ${PORT}`);
})