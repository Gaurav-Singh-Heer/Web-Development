const path = require("path");
const express = require('express')
const app = express()
const port = 3000

app.set("view engine", "ejs");                  // middleware
app.set("views", path.resolve("./views"));

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.get('/', (req,res) =>{
    res.render("home");
})
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/demo', (req, res) => {
    const user = {
        name: 'Jethalal',
        isAdmin: true
    };
    res.render('demo', { user });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
