const { Schema, model } = require('mongoose');
const { createTokenForUser } = require('../27_services/authentication');

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
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
        enum: ["USER", "ADMIN"],  // enum means not to assign value other than these two
        default: "USER",
    }
}, { timestamps: true });

// Remove password hashing (no need for salt or hashing)
userSchema.pre('save', function(next) { 
    const user = this;   
    if (!user.isModified('password')) return;   // Only modify if password is new

    // No hashing or salting, store the password as it is
    console.log("Password during save:", user.password); // Debugging line
    
    next();
});

// Compare password normally (without hash or salt)
userSchema.static('matchPasswordAndGenerateToken', async function(email, password) {
    const user = await this.findOne({ email });
    if (!user) throw new Error('User not found!!');
    
    // Check if provided password matches the stored password
    console.log("Stored password:", user.password); // Debugging line
    console.log("User provided password:", password); // Debugging line

    // Compare passwords directly (no hash comparison)
    if (user.password !== password) { 
        throw new Error("Incorrect Password");
    }

    const token = createTokenForUser(user);
    return token;
});

const User = model('user', userSchema);

module.exports = User;


/*
// const { createHmac } = require('node:crypto');  // OR  // crypto is a built in package
const { createHmac, randomBytes } = require('crypto');  
const {Schema, model} = require ('mongoose');
const { createTokenForUser } = require('../27_services/authentication');

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

/*
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
*/

/* EXTRA (/*)
userSchema.pre('save', function(next) { 
    const user = this;   
    if (!user.isModified('password')) return;   

    // Generate a salt using the email (or any other unique value for consistency)
    const salt = createHmac('sha256', user.email).update(user.email).digest('hex'); 

    const hashedPassword = createHmac('sha256', salt) 
        .update(user.password)
        .digest('hex');                        

    this.salt = salt;
    this.password = hashedPassword;

    console.log("Salt during save:", salt);  // Debugging line
    console.log("Hashed password during save:", hashedPassword); // Debugging line

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
/*
userSchema.static('matchPasswordAndGenerateToken', async function(email,password) {
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
            console.log(hashedPassword);
            console.log(userProvidedHash);
            throw new Error("Incorrect Password")
        }

    // return user; // else return

    const token = createTokenForUser(user);
    return token;
    
});
*/

/* EXTRA (/*)
userSchema.static('matchPasswordAndGenerateToken', async function(email, password) {
    const user = await this.findOne({ email });
    if (!user) throw new Error('User not found!!');

    const salt = user.salt;
    const hashedPassword = user.password;
    
    const userProvidedHash = createHmac('sha256', salt) 
    .update(password)
    .digest("hex");
    
    console.log("Salt during comparison:", salt); // Debugging line
    console.log("Hashed password from DB:", hashedPassword); // Debugging line
    console.log("User provided hash:", userProvidedHash); // Debugging line
    
    console.log('Stored hash:', storedHash);

    if (hashedPassword !== userProvidedHash) { 
        throw new Error("Incorrect Password");
    }

    const token = createTokenForUser(user);
    return token;
});

const User = model('user', userSchema);

module.exports = User;
*/