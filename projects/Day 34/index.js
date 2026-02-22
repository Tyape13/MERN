const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({extended: true}));
// express will understand every request using this code

app.set("view engine", "ejs");
// we initiated ejs to create and use templates 

app.set("views", path.join(__dirname, "views"));
// just setting view folder complete path

app.set(express.static(path.join(__dirname, "public")));
// i have no idea what's this for.


let posts = [
    {
        username: "herohonda",
        content: "I love coding"
    }, 
    {
        username: "noherhonda",
        content: "hard work is important to make progress towards things you want you fucking idiot"
    },
    {
        username: "heroMan",
        content: "I love Tailung... bro was content until his master filled his head with destiny shit and bro felt pressure to live up to it and ended up angry, bro is human not snow leopard"
    }
];


app.get('/', (req, res) =>{
    console.log("serving working well!");
})


app.listen(port, ()=>{
    console.log("Listening to port: 8080");
})
// i think i need to write on top than below about the code. 

