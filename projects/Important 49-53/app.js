const express = require("express");
const app = express();
const port = 3000;
const flash = require("connect-flash");
const session = require("express-session");
const path = require("path");
const passport = require('passport');
const localStrategy = require('passport-local');
const User = require('./models/user');



const sessionOptions = {
    secret: "SuperSecretKey",
    resave: false, 
    saveUninitialized: true, 
    cookie: {
        expires:Date.now() + 7*24*60*60*1000, // current date with time in milliseconds. 
        maxAge: 7*24*60*60*1000,
        httpOnly: true, // just for security purposes and not significant for now.
    }
}
// if we have more options we will update them here, not direcly on middle of war


app.use(session(sessionOptions)); // to initialize session i think, idk actually
app.use(flash()); // put flash middleware for every other routes. 


app.use(passport.initialize()); // middleware that initializes
app.use(passport.session()); 
passport.use(new localStrategy((User.authenticate()))); // 


passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

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
        res.render("page.ejs", {name: req.session.myName, msg: req.flash("success")});
    } else{
        res.send("Nothing here"); // idk why it didn't worked when i didn't used else block.
    }
    
});

app.get("/createdemo", async(req, res) =>{
    let user = {
        email: "herhonda@gumba.com",
        username: "GreekGod69"
    };
    let registeredUser = await User.register(user, "passworditself");
    res.send(registeredUser); // it will show what is being saved in mongodb.

});

app.get("/",(req, res) =>{
   res.send("Ok Working!"); 
});


app.listen(port, (req, res) =>{
    console.log("Listening on port ",port);
});