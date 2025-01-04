const express=require("express");
const fs=require('fs')
const users=require("./MOCK_DATA.json")
const app=express();
const PORT=8000;

// Middleware - Plugin
app.use(express.urlencoded({            //Middleware 1
    extended: false 
}));

app.use((req,res,next)=>{              // Middleware 2, Next for Middleware 1
    console.log("Hello from Middleware 1");
    next();
    // return res.json({msg:"Hello from Middleware 1"})
})

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
    .patch((req,res)=>{
        //Edit user with id
        return req.json({status:"Pending"});
    })
   .delete((req,res)=>{
        //Delete user with id
        return req.json({status:"Pending"});
    })

app.get("/api/users/:id",(req,res)=>{           // We can also name id as userid , But it's good Practise to use id
    const id=Number(req.params.id);
    const user=users.find((user)=>user.id===id);
    return res.json(user);
});

app.post("/api/users",(req,res)=>{   
    const body = req.body;
    users.push({...body, id: users.length+1});  // Id is made on our own by using length of whole data (= total users)
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err,data)=>{
        return res.json({status:"success", id : users.length});
    })
    console.log("Body", body);
});

app.listen(PORT, ()=> console.log(`Server Started at Port: ${PORT}`))