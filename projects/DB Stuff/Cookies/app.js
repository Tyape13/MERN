// basic example of cookies in express.js 
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();


const sessionOptions = {secret: 'mysecret', resave: false, saveUninitialized: false};

app.use(session(sessionOptions)); // just this one line is enough to use session in every page cause it's for "/"

app.use(cookieParser()); // this is for parsing cookies in express.js, it will allow us to read and write cookies in our routes.

app.get("/", (req, res) => {
    // res.cookie("name", "John Doe", {httpOnly: true, secure: true, sameSite: 'Strict'});
    res.send("Cookie has been set!");
});

app.get("/sessioncount" , (req, res) => {
    if(req.session.count){
        req.session.count++;
    } else {
        req.session.count = 1;
    }
    res.send(`You have visited this page ${req.session.count} times.`);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

