const { Router } = require("express");
const multer = require("multer");
const path = require("path");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../30_config/cloudinary"); // Import cloudinary config

const Blog = require("../models/30_blogs");
const Comment = require("../models/28_comment");

const router = Router();

// Cloudinary Storage Configuration
const cloudinaryStorage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "blog_images", // Folder in Cloudinary
        format: async (req, file) => "jpg", // Force file format to jpg
        public_id: (req, file) => `${Date.now()}-${file.originalname.split(".")[0]}`, // Generate public ID
    },
});

// Local Storage Configuration
const localStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve("./public/uploads"));
    },
    filename: function (req, file, cb) {
        const filename = `${Date.now()}-${file.originalname}`;
        cb(null, filename);
    },
});

// Choose storage method: cloudinaryStorage or localStorage
const useCloudinary = true; // Set to false to use local storage
const storage = useCloudinary ? cloudinaryStorage : localStorage;
const upload = multer({ storage });

// Routes
router.get('/add-new', (req, res) => {
    return res.render('addBlog', {
        user: req.user,
    });
});

router.get('/:id', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id).populate("createdBy");
        const comments = await Comment.find({ blogId: req.params.id }).populate("createdBy");
        return res.render('blog', {
            user: req.user,
            blog: blog,
            comments: comments,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send("Error loading blog");
    }
});

router.post('/comment/:blogId', async (req, res) => {
    try {
        await Comment.create({
            content: req.body.content,
            blogId: req.params.blogId,
            createdBy: req.user._id,
        });
        return res.redirect(`/blog/${req.params.blogId}`);
    } catch (error) {
        console.error(error);
        return res.status(500).send("Error adding comment");
    }
});

router.post('/', upload.single('coverImage'), async (req, res) => {
    try {
        const { title, body } = req.body;
        const blogData = {
            title,
            body,
            createdBy: req.user._id,
        };

        if (useCloudinary) {
            blogData.coverImageURL = req.file.path; // Cloudinary URL
            blogData.coverImagePublicId = req.file.filename; // Cloudinary public ID
        } else {
            blogData.coverImageURL = `/uploads/${req.file.filename}`; // Local file path
        }

        const blog = await Blog.create(blogData);
        return res.redirect(`/blog/${blog._id}`);
    } catch (error) {
        console.error(error);
        return res.status(500).send("Error uploading blog");
    }
});

module.exports = router;