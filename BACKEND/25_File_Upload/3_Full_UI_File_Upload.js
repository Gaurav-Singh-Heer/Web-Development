const path = require("path");
const express = require("express");
const multer = require("multer");

const app = express();
const PORT = 8000;

const storage =  multer.diskStorage({             // in this we have 2 parameters
    destination: function (req, file, cb) {       // 1-> destination  (callback Function) // 1-> destination  (callback Function) , here we tell where or inside which folder our file is to be stored (file, is file uploaded by user; cb is the callback function ) 
        return cb(null, "./uploads");              // null means no error
      },
      filename: function (req, file, cb) {        // 2-> Filename , here we can take original file name but in that the problem is if another user uploaded with same name then it would be overwrite. So, here we will generate our own filename
        return cb(null, `${Date.now()}-${file.originalname}`); // created our own filename(date+filename(in Local system)) ${Date.now()}-${file.originalname}
      }
});

// const upload = multer({storage: storage}); // OR
const upload = multer({storage});

app.set("view engine", "ejs");
app.set("views", path.resolve("./Full_UI_Views"));

app.use(express.urlencoded({extended:false}))

app.use(express.json());   // middleware

app.get("/", (req,res) =>{
    return res.render("homepage");
});

app.post("/upload", upload.single("profileImage"), (req,res) => {
    console.log(req.body);
    console.log(req.file);

    return res.redirect("/");
});

app.listen(PORT, ()=>console.log(`Server Started at PORT:${PORT}`));