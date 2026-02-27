const mongoose = require("mongoose");
const Listing = mongoose.Schema;

const listingSchema = new Listing({
    name:{
        type: String,
        required: true,
    },
    description: String,
    location: String, 
    price: Number,
})

module.exports = listingSchema;

