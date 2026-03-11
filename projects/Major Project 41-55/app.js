const express = require("express"); // this is steering wheel of backend while it runs on nodejs as engine. 
const app = express(); // instance object of express, this will listen to requests after we use app.listen() method.
const mongoose = require("mongoose"); // library that helps us do CRUD operations on MongoDB database. this helps comunicate direcly.
const path = require('path'); // help us locate files and folder for our project like ejs files. 
const methodOverride = require("method-override"); // this is a middleware that helps us to use HTTP verbs like PUT and DELETE in places where the client doesn't support it. we will use this for our edit and delete routes.
const ejsMate = require("ejs-mate"); // this is a layout engine for ejs that helps us to create a layout file and use it in our ejs files to avoid code repetition and make our code cleaner. we will use this for our header and footer.
const ExpressError = require("./utils/expressError"); // this is a custom error class that we will use to create our own error objects with status code and message. this is good practice to have a custom error class to handle errors in a consistent way throughout our application. we will use this to throw errors in our route handlers and catch them in our error handling middleware.

const listingRoutes = require("./routes/listing.js"); // this is the router for our listing routes, we will use this to handle all the routes related to listings and keep our app.js file cleaner and more organized. we will use this for all our listing routes.

const passport = require('passport');
const localStrategy = requrie("passport-local");
const User = require("./models/user.js");

app.engine("ejs", ejsMate); // this is how we use ejs mate layout engine, we pass the engine name and the package we installed.

app.use(express.static(path.join(__dirname, "/public"))); // this is how we serve static files like css, images, js files from public folder. we use express.static middleware and pass the path of our public folder using path.join() method to join the current directory with public folder.

app.use(methodOverride("_method")); // this is how we use method override middleware, we pass the query parameter that we will use in our forms to specify the method we want to use. for example, in our edit form we will use ?_method=PUT to specify that we want to use PUT method for that form submission.

const Mongo_url = "mongodb://127.0.0.1:27017/airbnb"; // this is the url of our database. we are using local host.


app.set("view engine", "ejs"); // setting express to use ejs as our view engine, so ejs files can be rendered and is essential for dynamic content.


app.set("views", path.join(__dirname, "views")); // this is the path of our views folder. we are using path.join() method to join the current directory with views folder.


// this line tells express to use middleware and helps us to parse request body.
app.use(express.urlencoded({extended:true}));

app.use("/listings", listingRoutes); // this is how we use the listing routes, we pass the router object that we exported from our listing.js file. this will make all the routes defined in listing.js file available in our app.js file and we can use them to handle requests related to listings.

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


// if any route is not defined above it, then this route will match it and send a 404 error.
app.use((req, res, next) =>{
    // the thing to learn is i need to master purano fundamental but use newer ways.
    next(new ExpressError(404, "Page Not Found"));
    // this is a catch-all route that will match any route that is not defined above it. we use app.use() without a path to match all routes. we pass a new ExpressError with status code 404 and message "Page Not Found" to the next error handling middleware. this is good practice to have a catch-all route to handle 404 errors and send a proper response to the client instead of just sending a generic 404 page.
});



app.use((err, req, res, next) =>{
    const {statusCode = 500, message = "Something went wrong"} = err;
    res.status(statusCode).send(message);
    // this will handle every other error that has not been handled by any other middleware. if this was not there cliend would need to see huge stack trace of the error and it would be a security risk. this is global error handling middleware, which is good practice. 

});


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

