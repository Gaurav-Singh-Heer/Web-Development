const express=require("express");
const path= require('path')
const cookieParser = require('cookie-parser');
const {connectToMongoDB}=require('./connect');
const {restrictToLoggedinUserOnly,checkAuth} = require('./middlewares_20/21_auth');

const URL=require('./models/url');

const urlRoute=require('./routes/url');
const staticRoute=require('./routes/20_1_StaticRouter');
const userRoute=require('./routes/21_1_user')

const app=express();
const PORT=8001;

connectToMongoDB('mongodb://localhost:27017/short-url')
    .then(()=> console.log("MongoDB connected")
);

app.set("view engine","ejs");
app.set("views", path.resolve("./20_2_Authenication_views_FULL_UI"));

app.use(express.json());
app.use(express.urlencoded({extended:false}));// to parse form data we need one more middleware
app.use(cookieParser()); // After this only we can use cookies

app.use("/url" , restrictToLoggedinUserOnly, urlRoute); //restrictToLoggedinUserOnly is an inline middleware // So, now can only route to this link after we login      // POST route for creating short URLs
app.use("/user" , userRoute);      // POST route for creating user ID
app.use("/", checkAuth, staticRoute); // only check autherntication if yes then ok else also ok

app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    console.log('Incoming shortId:', shortId);

    const entry = await URL.findOneAndUpdate(
        { shortId },
        { $push: { visitHistory: { timestamp: Date.now() } } },
        { new: true }
    );
    console.log('Database Entry:', entry);

    if (!entry) {
        return res.status(404).json({ error: 'Short URL not found' });
    }

    return res.redirect(entry.redirectURL);
    
});

app.listen(PORT,()=>console.log(`Server Started at PORT:${PORT}`))