const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose").default;
const userSchema = new Schema ({
    email:{
        type: String,
        required: true
    },
});

userSchema.plugin(passportLocalMongoose); // this will automatically ADD username and passport, hashing, salting. 
// we don't need to build those things manually. 
// i just want to make basic version work so i can look back and see how things works to begin with. 

module.exports = mongoose.model('User', userSchema);

