const mongoose = require("mongoose");


main().then((result)=>{
    console.log(result);
    console.log("Connection Successful");
    console.log("I have no idea why this connected when i haven't started mongod in terminal.")
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1/27017/test");

}

/// ### 3 - Schema
/// schema defines the shape of document within that collection. 

const userSchema = new mongoose.Schema({
    name: String, 
    email: String, 
    age: Number,
});

const User = mongoose. model("User", userSchema);
// now using `show collections` in mongosh it will show User Collection