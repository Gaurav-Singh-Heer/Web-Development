const express=require("express");
const fs=require('fs');
const mongoose=require("mongoose");
const { type } = require("os");
const app=express();
const PORT=8000;

// Connection
mongoose.connect('mongodb://127.0.0.1:27017/Gaurav-app-1') // Gaurav-app-1  is the name of the database
        .then(()=> console.log("MongoDB Connected"))// Promise
        .catch((err)=>console.log("Mongo Error",err));
// Schema
const userSchema= new mongoose.Schema({
    first_name:{
        type:String,
        required:true,
    },
    last_name:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    job_title:{
        type:String,
    },
    gender:{
        type:String,
    },
},{timestamps:true}
);

// Model
const User=mongoose.model("user",userSchema); //This is our collection Name TOO  // using this User class we can interact withbthe Mongo

// Middleware - Plugin
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));


// Routes
app.get("/users", async (req,res)=>{                                  // http://localhost:8000/users
    const allDbUsers=await User.find({});          // empty means all the users
    const html=`
    <ul>
        ${allDbUsers.map((user)=>`<li>${user.first_name}-${user.email}</li>`).join("")}   
    </ul>
    `; //<!-- .join() to remove comma above at each name -->
    res.send(html);
})

// REST API
app.get("/api/users", async (req, res) => {
        const allDbUsers = await User.find({}); // Fetch all users
        res.set("X-MyName", "Piyush Garg"); 
        return res.json(allDbUsers);
});


// As it's impossible to Allocate for URL for each user so, we will use Dynamic Path Parameters

app.get("/api/users/1",(req,res)=>{                                  // http://localhost:8000/api/users
    return res.json(users);
});
/*
Dynamic Path Parameters

GET /api/users/:id
Here, :id-> Variable | Dynamic. :id means it can be any value*/
app
    .route("/api/users/:id") // Grouping
    .get(async (req, res) => {
        // Fetch user by ID from DB
        const user = await User.findById(req.params.id);

        // Handle case where the user is not found
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        return res.status(200).json(user); // Return user data
    })

    .patch(async (req, res) => {
        // Update user data by ID
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body, // Use request body for dynamic updates
            { new: true } // Return the updated document
        );

        // Handle case where the user is not found
        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }

        return res.status(200).json({ status: "success", user: updatedUser });
    })

    .delete(async (req, res) => {
        // Delete user by ID
        const deletedUser = await User.findByIdAndDelete(req.params.id);

        // Handle case where the user is not found
        if (!deletedUser) {
            return res.status(404).json({ error: "User not found" });
        }

        return res.status(200).json({ status: "success", message: "User deleted successfully" });
    });

app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid user ID" }); // Bad Request
    }

    const user = users.find((user) => user.id === id);

    if (!user) {
        return res.status(404).json({ error: "User not found" }); // Not Found
    }

    return res.json(user);
});
    
app.post("/api/users", async (req, res) => {   
    const body = req.body;

    // Validate required fields
    if (
        !body ||
        !body.first_name || 
        !body.last_name || 
        !body.email || 
        !body.gender || 
        !body.job_title
    ) {
        return res.status(400).json({ msg: "All fields are required" });
    }

    try {
        // Create the user using correct field names
        const result = await User.create({
            first_name: body.first_name, // Match schema
            last_name: body.last_name,
            email: body.email,
            gender: body.gender,
            job_title: body.job_title,
        });

        console.log("result", result);
        console.log("Body", body);

        return res.status(201).json({ msg: "success", user: result });
    } catch (err) {
        console.error("Error creating user:", err);
        return res.status(500).json({ msg: "Internal Server Error", error: err });
    }
});

// app.post("/api/users",async(req,res)=>{   
//     const body = req.body;
//     if( !body ||
//         !body.first_name || 
//         !body.last_name|| 
//         !body.email || 
//         !body.gender ||
//         !body.job_title )
//         {
//         return res.status(400).json({msg:"All fields are required"})
//     }
//     const result=await User.create({
//         firstName: body.first_name,
//         lastName: body.last_name,
//         email: body.email,
//         gender: body.gender,
//         jobTitle: body.job_title,
//     })
//     console.log("result", result);
//     console.log("Body", body);
//     return res.status(201).json({msg: "success"});
// });

app.listen(PORT, ()=> console.log(`Server Started at Port: ${PORT}`))