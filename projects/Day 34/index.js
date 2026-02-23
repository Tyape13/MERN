const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

// i need to restart the server every time.

app.use(express.urlencoded({extended: true}));
// express will understand every request using this code

app.set("view engine", "ejs");
// we initiated ejs to create and use templates 

app.set("views", path.join(__dirname, "views"));
// just setting view folder complete path

app.use(express.static(path.join(__dirname, "public")));
// this makes the system to access public and css file.


app.get("/posts/new", (req, res) =>{
    res.render("new.ejs")
});


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
        content: "Tailung, it's Understandable. Sameer, I understand Me, I understand hatred and sadness it's alright i work now."
    }
];

app.get("/posts", (req, res)=>{
    res.render("index.ejs", {posts});
})

app.get('/', (req, res) =>{
    res.send("serving working well!");
})


app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`);
})
// i think i need to write on top than below about the code. 

