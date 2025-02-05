const {Router} = require("express");
const multer = require("multer");
const path = require("path");                        // to tell where to store

const Blog = require("../models/27_blogs");
const Comment = require("../models/28_comment");

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

router.get('/:id', async (req, res) => {
    const blog = await Blog.findById(req.params.id).populate("createdBy");
    // console.log("blog",blog)
    const comments = await Comment.find({blogId: req.params.id }).populate("createdBy")
    console.log("comments",comments)
    return res.render('blog',{
        user: req.user,
        blog: blog,
        comments: comments,
    })
})

router.post('/comment/:blogId', async (req, res) => {
    // const comment = await Comment.create({    // No need of This Const
    await Comment.create({    
        content: req.body.content,
        blogId: req.params.blogId,
        createdBy: req.user._id,
    });
    return res.redirect(`/blog/${req.params.blogId}`);
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