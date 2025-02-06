const {Router} = require("express");
const multer = require("multer");
const path = require("path");                        // to tell where to store

const Blog = require("../models/27_blogs");

const router = Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    //   cb(null, path.resolve(`./public/uploads/${req.user._id}`))  // inside uploads will make folder of name req.user._id
      cb(null, path.resolve(`./public/uploads`))
    },
    filename: function (req, file, cb) {
      const filename = `${Date.now()}-${file.originalname}`;
      cb(null, filename);
    },
})
  
const upload = multer({ storage: storage })  // this :storage is from -->const storage = multer.diskStorage({
 
router.get('/add-new', (req,res) => {
    return res.render('addBlog',{
        user: req.user,
    })
})

router.post("/", upload.single('coverImage'), async (req,res) => {   // from views/addBlog.ejs  --> <input type="file" class="form-control" id="coverImage" name="coverImage" aria-describedby="coverImage">
    // console.log(req.body);
    // console.log(req.file);
    const {title, body} = req.body;
    const blog = await Blog.create({
        body,
        title,
        createdBy: req.user._id,
        coverImageURL: `/uploads/${req.file.filename}`
    })
    // return res.redirect("/");
    return res.redirect(`/blog/${blog._id}`);
})

module.exports = router;