const express=require("express");
const {connectMongoDB}=require('./connection')

const {logReqRes} =require("./middlewares/index")
const userRouter=require("./routes/user");

const app=express();
const PORT=8000;

//Connection
connectMongoDB("mongodb://127.0.0.1:27017/Gaurav-app-1").then(()=>
    console.log("MongoDB Connected")
);

// Middleware - Plugin
app.use(express.urlencoded({
    extended: false
}));

app.use(logReqRes("log.txt"));

//ROUTES

app.use("/user", userRouter); // Means at Routes user.js, "/" means /user, "/:id" means /user/:id

app.listen(PORT, ()=> console.log(`Server Started at Port: ${PORT}`))