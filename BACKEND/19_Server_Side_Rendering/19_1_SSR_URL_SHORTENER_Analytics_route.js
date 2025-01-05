const express=require("express");
const {connectToMongoDB}=require('./connect');
const urlRoute=require('./routes/url');
const URL=require('./models/url');
const app=express();
const PORT=8001;

connectToMongoDB('mongodb://localhost:27017/short-url')
    .then(()=> console.log("MongoDB connected")
);

app.use(express.json());

app.get("/test",(req,res)=>{                          // Way 1 to add frontend Routing
    return res.end("<h1>Hey from server</h1>")
});

app.use('/url' , urlRoute);      // POST route for creating short URLs

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