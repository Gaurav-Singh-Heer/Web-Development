const express=require("express");
const fs=require('fs');
const mongoose=require("mongoose");
const users=require("./MOCK_DATA.json");
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
const User=mongoose.model("user",userSchema); // This is our collection Name TOO  // using this User class we can interact withbthe Mongo

// Middleware - Plugin
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));


// Routes
app.get("/users",(req,res)=>{                                  // http://localhost:8000/users
    const html=`
    <ul>
        ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}   
    </ul>
    `; //<!-- .join() to remove comma above at each name -->
    res.send(html);
})

// REST API
app.get("/api/users",(req,res)=>{                                  // http://localhost:8000/api/users
    return res.json(users);
})

// As it's impossible to Allocate for URL for each user so, we will use Dynamic Path Parameters

app.get("/api/users/1",(req,res)=>{                                  // http://localhost:8000/api/users
    return res.json(users);
});
/*
Dynamic Path Parameters

GET /api/users/:id
Here, :id-> Variable | Dynamic. :id means it can be any value*/

app
    .route("/api/users/:id")             //Grouping
    .get((req,res)=>{
        const id=Number(req.params.id);
        const user=users.find((user)=>user.id===id);
        return res.json(user);
    })
    .patch((req, res) => {
        const id = Number(req.params.id);
        const index = users.findIndex(user => user.id === id);
        if (index === -1) {
            return res.status(404).json({ error: "User not found" });
        }
        console.log("Request Body:", req.body); // Debugging
        console.log("User Before Update:", users[index]); // Debugging

        users[index] = { ...users[index], ...req.body }; // Merge updated fields

        console.log("Updated User:", users[index]); // Debugging

        fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err,data) =>{
            return res.json({ status: "success", user: users[index] });
        });
    })

    .delete((req, res) => {
        const id = Number(req.params.id);
        const index = users.findIndex(user => user.id === id);
        if (index === -1) {
            return res.status(404).json({ error: "User not found" });
        }
        users.splice(index, 1);
        fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err,data) =>{
            return res.json({ status: "success", id })
        });
    }); 

app.get("/api/users/:id",(req,res)=>{           // We can also name id as userid , But it's good Practise to use id
    const id=Number(req.params.id);
    const user=users.find((user)=>user.id===id);
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