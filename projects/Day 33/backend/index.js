const express = require("express");
const app = express();
const port = 3000;


app.use (express.urlencoded({extended: true}));


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
// i need to be able to understand every piece of code. 
// what are the areas covered will be written in info.md



function PersonMaker(name, age) {
    const person = {
        name: name,
        age: age,
        talk(){
            console.log("whatttt??? you talking bro")
        }
    }
    return person
}

let p1 = PersonMaker("hero", 23);
let p2 = PersonMaker("nice", 123);
// p1 and p2 will have talk() function in different memory
// so thousand objects will have same function called talk() in 1000 memory locations.
// so this inefficient, that's why we using classes stuff. cause Memory Efficient. 
// blue print banxa yesle but not memory efficient. THATSSS BADDDDDD, NAAAHHH AHHH. BADDDD





function Person(name, age){
    this.name = name;
    this.age = age;
}
Person.prototype.talk = function(){
    console.log(`Hi, My name is ${this.name}.`);
}
let p3 = new Person("herohonda", 34);
let p4 = new Person("Gunda Raj", 45);

// these 2 above code is efficient and doesn't consume memory as other used to.
//  but there is better method, using classes. 


 
class DamiPerson{
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    talk () {
        console.log(" NICE NICE");
    }
}
let p5 = new DamiPerson("HEHEHAHAHAH", 123);
let p6 = new DamiPerson("Me was happy not selfish i think", 56);


