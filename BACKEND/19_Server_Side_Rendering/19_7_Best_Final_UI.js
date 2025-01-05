const express=require("express");
const path= require('path')

const {connectToMongoDB}=require('./connect');
const urlRoute=require('./routes/url');
const staticRoute=require('./routes/19_6_StaticRouter');
const URL=require('./models/url');
const app=express();
const PORT=8001;

connectToMongoDB('mongodb://localhost:27017/short-url')
    .then(()=> console.log("MongoDB connected")
);

app.set("view engine","ejs");
app.set("views", path.resolve("./19_7_views"));

app.use(express.json());
app.use(express.urlencoded({extended:false}));// to parse form data we need one more middleware

app.use("/url" , urlRoute);      // POST route for creating short URLs
app.use("/", staticRoute);

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