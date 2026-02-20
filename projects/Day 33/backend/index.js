const express = require("express");
const app = express();
const port = 3000;

// go to folder where index.js exists then do node index.js then app will start.

app.get("/register", (req, res) =>{
    let {user, password} = req.query; // nice nice nice. do i get the code. YESSSS.
    res.send ("Standard GET response. Welcome " + user);
});
// when i go to this url direcly i got the response: "http://localhost:3000/register"

app.post("/register", (req,res)=>{
    console.log(req.body)
res.send("standard POST response");
});
// she has installed extension for hoppscotch website to work local host server.
// we change action of post request in index to point to this api, then post one worked.


app.listen(port, () =>{
    console.log(`listening to port ${port}`);
});

// ### 2 - i won't write. j j xa i will write, if not possible then i will write the number.
// so 2nd video information and work above.
