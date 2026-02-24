const express = require("express");
const app = express();
const mongoose = require("mongoose");

const Mongo_url = "mongodb://127.0.0.1:27017/airbnb"

main().then((result)=>{
    console.log("Connected to Database.");
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect(Mongo_url);
}

app.get("/", (req, res) =>{
    res.send("connection successful");

})

app.listen(3000, ()=>{
    console.log("Server is listening to port 3000");
})