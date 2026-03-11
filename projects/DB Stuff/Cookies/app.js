// basic example of cookies in express.js 
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();


const sessionOptions = {secret: 'mysecret', resave: false, saveUninitialized: false}; // resave false means that the session will not be saved back to the session store if it was not modified during the request. saveUninitialized false means that a session will not be created until something is stored in it. This can help reduce server storage usage and improve performance by avoiding unnecessary sessions.

app.use(session(sessionOptions)); // just this one line is enough to use session in every page cause it's for "/"

app.use(cookieParser()); // this is for parsing cookies in express.js, it will allow us to read and write cookies in our routes.

app.get("/", (req, res) => {
    // res.cookie("name", "John Doe", {httpOnly: true, secure: true, sameSite: 'Strict'});
    res.send("Cookie has been set!");
});


app.get("/register", (req, res) =>{
    let {name= "Anonymous"} = req.params; // test domain.com/register?name=JohnDoe.
    console.log(req.session);
    req.session.name = name; // now this is going to be global variable which can be accessed by any tab. NICE.
    res.redirect("/hello"); 
});

app.get("/hello", (req, res) => {
    res.send(req.session.name);
});
// app.get("/sessioncount" , (req, res) => {
//     if(req.session.count){
//         req.session.count++;
//     } else {
//         req.session.count = 1;
//     }
//     res.send(`You have visited this page ${req.session.count} times.`);
// });

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

