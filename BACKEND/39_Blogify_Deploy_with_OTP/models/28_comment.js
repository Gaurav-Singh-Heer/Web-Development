const {Schema, model} = require ('mongoose');
 
const commentSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    blogId: {
        type: Schema.Types.ObjectId,
        ref: "blog",                      // reference, blog database
    },
    createdBy: {                             // same as in models/27_blog.js
        type: Schema.Types.ObjectId,
        ref: "user",                         // reference
    },
},{timestamps: true}
);

const Comment = model('comment', commentSchema);

module.exports = Comment;