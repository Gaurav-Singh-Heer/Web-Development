const {Schema, model} = require ('mongoose');

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type:String,
        required: true,
    },
    coverImageURL:{
        type: String,
        required: false,
    },
    createdBy:{
        type: Schema.Types.ObjectId,  // Storing user's mongodb '_id' here
        ref: "user", // given by models/27_user.js  (const User = model('user', userSchema);)  // Now, Created By will Automatically point Towards User
    },
    
},{timestamps:true}
);

const Blog = model('blog', blogSchema);

module.exports = Blog;