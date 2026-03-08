const express = require('express');
const router = express.Router();
const asyncWrap = require("../utils/asyncWrap"); // this is a utility function that helps us to wrap our async route handlers and catch any errors that might occur in them and pass them to the next error handling middleware. this is good practice to avoid having try/catch blocks in every route handler and keep our code cleaner. we will use this for all our async route handlers.
const Listing = require("../models/listing"); // this is the model/SCHEMA we created for our listing collection for database. 





// when browsers uses Get Request to domain.com/listings then this async function fires up.
router.get("/", asyncWrap(async (req, res) =>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings}); // I PUT /listings/index.ejs and Everything Fell Apart cause i still dno.

    // Listing.find({}).then(res => {
    //         console.log(res);
    //     });
    
}));


router.post("/", async (req, res) =>{
    // const {title, description, price, location, country, image} = req.body;
    // // this would have worked but we changed new.ejs form to have name attribute same as the keys in our listing schema, so we can directly use req.body to create a new listing without destructuring it.
    // let listing = req.body;
    // console.log(listing);

    try{  
    const newListing = new Listing(req.body.listing); // this is how we create a new listing using the Listing model and the data from the request body. we are assuming that the form data is sent in the format of {listing: {title: "title", description: "description", price: 100, location: "location", country: "country", image: "image url"}}. so we can directly use req.body.listing to create a new listing.

    await newListing.save(); // this is how we save the new listing to the database, this is an async operation and we wait for it to complete before sending response to the client.

    console.log("New Listing Created");
    res.redirect("/listings"); // after creating a new listing we redirect the user to the listings page to see all the listings including the new one we just created.

    } catch(err){
        next(err); // we pass to next error handling middleware.    
    }
});



router.get("/new", (req, res) =>{
    res.render("listings/new.ejs");
});


// Delete Route
router.delete("/:id", asyncWrap(async (req, res) =>{
    const {id} = req.params;
    await Listing.findByIdAndDelete(id, {runValidators: true}); // this is how we delete a listing from the database using the id from the url parameters. we also pass runValidators option to make sure that the id is valid and exists in the database before trying to delete it.
    // it only deleted when runValidators is there for some reason idk. or maybe i didn't restarted server back then. 
    
    res.redirect("/listings");
}));


router.get("/:id/edit", asyncWrap(async (req, res) =>{
    const {id} = req.params; 
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", {listing});
}));



router.put("/:id", asyncWrap(async (req, res) =>{
    if (!req.body.listing || Object.keys(req.body.listing).length === 0) {
        // If the listing data is missing or empty, throw an error with a 400 status code.
        throw new ExpressError(400, "Bad Request: No listing data provided.");
    }
    const {id} = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    res.redirect(`/listings/${id}`);
}));


// New Route



router.get("/:id", asyncWrap(async (req, res) =>{
    const {id} = req.params; // this is how we get the id from the url, we use req.params to get the parameters from the url and destructure it to get the id.

    console.log(id);

    const listing = await Listing.findById(id); // Listing is Schema but data is inside init folder and we seeded database using index.js.  
    // it's schema only, right. so how is it connected to database? we used mongoose.model() method to create a model from the schema and then we can use that model to interact with the database. so when we do Listing.findById() it will look for the listing collection in the database and find the document with the given id.
    
    res.render("listings/show.ejs", {listing}); // this is how we render the show.ejs file and pass the listing object to it.
}));




module.exports = router;
