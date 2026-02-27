const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description: String,
    image:{
        default: "https://images.unsplash.com/photo-1707339054608-a3cdff14fd3f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",        
        type:String,
        set: (v) => v===""? "https://images.unsplash.com/photo-1707339054608-a3cdff14fd3f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D":v, // this is ternary operator
    },
    price: Number,
    location: String,
    country: String,
});
// we could add defualt image, required, other constraints, 


const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing; // we used modules.export then it gave error, then used module.export then i felt tingling feeling and it didn't work saying Listing is no constructor or something hten we used this one. fialure to learn. i will now remember. remember what??? 
