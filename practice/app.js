const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const port = 3002;

const mongo_url = "mongodb://127.0.0.1/27017/practice";

app.listen(port, () =>{
    console.log("Server Route is Listening to port 3002");
})

app.get("/", (req, res) => {
    res.send("Successfully started");
})

main().then((res)=>{
    console.log("Connected to Database");
}).catch((err) =>{
    console.log("Database Connection Error. use mongod on terminal to start i think idk");
})

async function main(){
    await mongoose.connect(mongo_url);
}

