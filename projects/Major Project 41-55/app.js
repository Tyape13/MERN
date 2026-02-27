const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const path = require('path');

const Mongo_url = "mongodb://127.0.0.1:27017/airbnb";

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

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

app.get("/listings", async (req, res) =>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings}); // I PUT /listings/index.ejs and Everything Fell Apart cause i still dono.


    
    // Listing.find({}).then(res => {
    //         console.log(res);
    //     });
    
})


// app.get("/testListing", async (req,res) =>{
//     let sampleListing = new Listing({
//         title : "New Villa",
//         description: "i have nothignt o say about this siht.",
//         price: 2323,
//         location: "goa",
//         country: "india"
//     });
//     await sampleListing.save(); // this whole route is async function and here it waits before getting sucess/failure. 
//     console.log("Same was created");
//     res.send("Successful Test");

// })

app.listen(3000, ()=>{
    console.log("Server is listening to port 3000");
})

