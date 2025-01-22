// import modules
let express = require('express');
let login = require('./login/login');
let logout = require('./logout/logout');

let app = express();

// use modules

app.use("/login",login)
app.use("/logout",logout)


let PORT = 8080;

app.get('/',(req,res)=>{
    res.send("Yo, Go a Login Page!!!")
})

app.listen(PORT, () => {
    console.log(`Server Started at PORT : ${PORT}`);
});

/*

Now, test these URLs

1) http://localhost:8080/login
2) http://localhost:8080/login/login/admin/admin
3) http://localhost:8080/login/login/admin/user
4) http://localhost:8080/logout
5) http://localhost:8080/logout/logout?uname=admin&upwd=admin
6) http://localhost:8080/logout/logout?uname=admin&upwd=user

*/