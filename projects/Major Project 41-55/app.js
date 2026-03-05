const express = require("express"); // this is steering wheel of backend while it runs on nodejs as engine. 
const app = express(); // instance object of express, this will listen to requests after we use app.listen() method.
const mongoose = require("mongoose"); // library that helps us do CRUD operations on MongoDB database. this helps comunicate direcly.
const Listing = require("./models/listing"); // this is the model/SCHEMA we created for our listing collection for database. 
const path = require('path'); // help us locate files and folder for our project like ejs files. 
const methodOverride = require("method-override"); // this is a middleware that helps us to use HTTP verbs like PUT and DELETE in places where the client doesn't support it. we will use this for our edit and delete routes.
const ejsMate = require("ejs-mate"); // this is a layout engine for ejs that helps us to create a layout file and use it in our ejs files to avoid code repetition and make our code cleaner. we will use this for our header and footer.


app.engine("ejs", ejsMate); // this is how we use ejs mate layout engine, we pass the engine name and the package we installed.

app.use(express.static(path.join(__dirname, "/public"))); // this is how we serve static files like css, images, js files from public folder. we use express.static middleware and pass the path of our public folder using path.join() method to join the current directory with public folder.

app.use(methodOverride("_method")); // this is how we use method override middleware, we pass the query parameter that we will use in our forms to specify the method we want to use. for example, in our edit form we will use ?_method=PUT to specify that we want to use PUT method for that form submission.

const Mongo_url = "mongodb://127.0.0.1:27017/airbnb"; // this is the url of our database. we are using local host.


app.set("view engine", "ejs"); // setting express to use ejs as our view engine, so ejs files can be rendered and is essential for dynamic content.


app.set("views", path.join(__dirname, "views")); // this is the path of our views folder. we are using path.join() method to join the current directory with views folder.


// this line tells express to use middleware and helps us to parse request body.
app.use(express.urlencoded({extended:true}));


// this executes db function that returns a promise and we use then/catch to work with it.
main().then((result)=>{
    console.log("Connected to Database.");
}).catch((err)=>{
    console.log("sorry couldn't connect to db", err);
})


// this is the main function that connects to our database.
async function main(){
    await mongoose.connect(Mongo_url);
}


// when users visit the root route, we send a simple message "connection successful" to confirm that our server is running and can handle requests. if we do res.render and point to some ejs file with dynamic content that would be cool.
app.get("/", (req, res) =>{
    res.send("connection successful");

});




app.post("/listings", async (req, res) =>{
    // const {title, description, price, location, country, image} = req.body;
    // // this would have worked but we changed new.ejs form to have name attribute same as the keys in our listing schema, so we can directly use req.body to create a new listing without destructuring it.
    // let listing = req.body;
    // console.log(listing);


    const newListing = new Listing(req.body.listing); // this is how we create a new listing using the Listing model and the data from the request body. we are assuming that the form data is sent in the format of {listing: {title: "title", description: "description", price: 100, location: "location", country: "country", image: "image url"}}. so we can directly use req.body.listing to create a new listing.

    await newListing.save(); // this is how we save the new listing to the database, this is an async operation and we wait for it to complete before sending response to the client.

    console.log("New Listing Created");
    res.redirect("/listings"); // after creating a new listing we redirect the user to the listings page to see all the listings including the new one we just created.

});




// New Route
app.get("/listings/new", (req, res) =>{
    res.render("listings/new.ejs");
});

// Delete Route
app.delete("/listings/:id", async (req, res) =>{
    const {id} = req.params;
    await Listing.findByIdAndDelete(id, {runValidators: true}); // this is how we delete a listing from the database using the id from the url parameters. we also pass runValidators option to make sure that the id is valid and exists in the database before trying to delete it.
    // it only deleted when runValidators is there for some reason idk. or maybe i didn't restarted server back then. 
    
    res.redirect("/listings");
});


app.get("/listings/:id/edit", async (req, res) =>{
    const {id} = req.params; 
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", {listing});
});


app.put("/listings/:id", async (req, res) =>{
    const {id} = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    res.redirect(`/listings/${id}`);
});


app.get("/listings/:id", async (req, res) =>{
    const {id} = req.params; // this is how we get the id from the url, we use req.params to get the parameters from the url and destructure it to get the id.

    console.log(id);

    const listing = await Listing.findById(id); // Listing is Schema but data is inside init folder and we seeded database using index.js.  
    // it's schema only, right. so how is it connected to database? we used mongoose.model() method to create a model from the schema and then we can use that model to interact with the database. so when we do Listing.findById() it will look for the listing collection in the database and find the document with the given id.
    
    res.render("listings/show.ejs", {listing}); // this is how we render the show.ejs file and pass the listing object to it.
});


// when browsers uses Get Request to domain.com/listings then this async function fires up.
app.get("/listings", async (req, res) =>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings}); // I PUT /listings/index.ejs and Everything Fell Apart cause i still dono.

    // Listing.find({}).then(res => {
    //         console.log(res);
    //     });
    
})





// // i think we used whole model/listing to create so this one got too basic example. so commented out.
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


// THIS IS WHAT CREATES A STEERING WHEEL FOR OUR SERVER TO LISTEN TO PORT 3000. THIS IS THE IMPORTANT PART OF SERVER that Makes Server.
app.listen(3000, ()=>{
    console.log("Server is listening to port 3000");
})

