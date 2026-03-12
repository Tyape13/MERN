const express = require("express");
const app = express();
const port = 3000;
const flash = require("connect-flash");
const session = require("express-session");
const path = require("path");

const sessionOptions = {
    secret: "SuperSecretKey",
    resave: false, 
    saveUninitialized: true, 
}
// if we have more options we will update them here, not direcly on middle of war


app.use(session(sessionOptions)); // to initialize session i think, idk actually
app.use(flash()); // put flash middleware for every other routes. 

app.set("view engine", "ejs"); // if i need to remember i need to practice remembering this again n again.
app.set("views", path.join(__dirname, "views"));



app.get("/register" , async (req, res) =>{
    let {name = "Anonymous"} = req.query; // test domain.com/register?name=Sameer Bohara. it worked even with space somehow.
    console.log(req.session);
    req.session.myName = name;
    req.flash("success", "User Registered Successfully!");
    res.redirect("/name");

});


app.get("/name", (req, res) =>{
    // message will only print if session cookies and variables have been set after going to path /register. or else infinite loading so if statement is
    if(req.session.myName) {
        res.render("/page.ejs", {name: req.session.name, msg: req.flash("success")});
    } else{
        res.send("Nothing here"); // idk why it didn't worked when i didn't used else block.
    }
    
});


app.get("/",(req, res) =>{
   res.send("Ok Working!"); 
});


app.listen(port, (req, res) =>{
    console.log("Listening on port ",port);
});