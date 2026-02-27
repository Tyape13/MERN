const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("./../models/listing.js");

const Mongo_url = "mongodb://127.0.0.1:27017/airbnb";

main().then((result)=>{
    console.log("Connected to Database.");
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect(Mongo_url);
}

const initDb = async () =>{
    await Listing.deleteMany({}); // this will always delete if anything exists on database. 
    await Listing.insertMany(initData.data); // this will insert everydata
    console.log("Data was initialized"); // we can check things using mongodb compass
};

initDb();
