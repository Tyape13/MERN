const mongoose = require("mongose");
const Schema = mongoose.Schema; 
const passwordLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String, 
        required: true
    },
    // we don't need to put username cause passport-local-mongoose adds unique username itself
    // it adds hash and salt fields to store password. and username?? idk.

});

userSchema.plugin(passwordLocalMongoose);

module.exports = mongoose.model("User", userSchema);
