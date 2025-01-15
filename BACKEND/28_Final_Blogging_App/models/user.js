// const { createHmac } = require('node:crypto');  // OR  // crypto is a built in package
const { createHmac, randomBytes } = require('crypto');  
const {Schema, model} = require ('mongoose');

const userSchema = new Schema({
    fullName: {
        type: String,
        required : true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    salt: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    profileImageURL: {
        type: String,
        default: '/images/default.jpg',
    },
    role: {
        type: String,
        enum: ["USER", "ADMIN"],          // enum means not to assign value other than these two // mongoose will throw error if value other than these is assigned 
        default: "USER",
    }
},{timestamps: true});

userSchema.pre('save', function(next){                                // When we will try to save user this function will run and hash the user's password
    const user = this;   // Here, this is pointing at the user

    if(!user.isModified('password')) return;   // If Password not modified in user RETURN

    const salt = randomBytes(16).toString();   // Will Work As our Secret Key
    const hashedPassword = createHmac('sha256', salt)                // using sha256 algorithm
        .update(user.password)
        .digest("hex");                         // digest and give it to me in hexon
    
    this.salt = salt;
    this.password = hashedPassword;

    next();
});

/*
Why is an arrow function not used?

userSchema.pre('save', function(next) {
    console.log(this); // `this` refers to the current document being saved
    next();
});

userSchema.pre('save', (next) => {
    console.log(this); // `this` refers to the outer scope, not the document
    next();
});

*/
userSchema.static('matchPassword', async function(email,password) {
    const user = await this.findOne({email});
    // if(!user) return false;   // OR
    if(!user) throw new Error('User not found!!');

    // console.log(user); // To check error  

    // const salt = 'someRandomSalt';   // Hard-Code   Just to check error
    const salt = user.salt;
    const hashedPassword = user.password;
    
    const userProvidedHash =  createHmac('sha256', salt)                // using sha256 algorithm
        .update(password)
        .digest("hex");                         // digest and give it to me in hexon

        if(hashedPassword !== userProvidedHash){           // if 
            throw new Error("Incorrect Password")
        }

    // return hashedPassword === userProvidedHash;
    // return user;
    // return {...user, password: undefined, salt: undefined};  // else return
    // return {...user._doc, password: undefined, salt: undefined};  // else return
    return user; // else return
    
});

const User = model('user', userSchema);

module.exports = User;