const express=require("express");
const users=require("./MOCK_DATA.json")
const app=express();
const PORT=8000;

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

app.get("/api/users/:id",(req,res)=>{           // We can also name id as userid , But it's good Practise to use id
    const id=Number(req.params.id);
    const user=users.find((user)=>user.id===id);
    return res.json(user);
});
/* Can test url by adding any id till 1000 at end. Example:-
http://localhost:8000/api/users/2
http://localhost:8000/api/users/208
http://localhost:8000/api/users/406
http://localhost:8000/api/users/1000

Only Data of the respective user will be visible
*/


app.listen(PORT, ()=> console.log(`Server Started at Port: ${PORT}`))