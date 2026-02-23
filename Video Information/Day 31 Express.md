I could have learned this express but i know i m going to learn
Fastify sooo nope. 
but some content would have helped me but whatever dude.

Fastify is 2 times faster and less in size so it's efficient than express.

sorry but let's move on.


Ok i m going to learn the fundamentals of express.


### 1 - What is EXPRESS
library - small collection of tools, in small scale. eg: axios (api request send garxa)
framework - whole architecture of the application is defined using this, it has major control and we just learn how to use it. eg: express

# I was SCARED
I thought others can COPY my IDEA and Build Business, But WE CAN ALSO DO THE SAME of other Ideas, that's Why EXECUTION MATTERS MORE not IDEA itself. SO LET'S DO IT. I M LEARNING EVERYTHING FUNDAMENTALS then Making AI WORK. 
This is Not ERA OF GETTING JOB. RATHER BUILDING BUSINESS, THAT CAN HELP PEOPLE.

### still 1 - 
listen for incomming request - express ko kaam .
Express can PARSE requests. 
it matches response with routes (/nextpage).



### 2 - i think i used express
THIS EXPRESS IS BACKEND Main point, cause it's LISTENING TO REQUESTS and giving Responses.
It's the core functionality of Backend.

Code:
const express = require("express");
const app = express();

let port = 3000; // this is like location where docking or data is shared, just a path ko main location. 

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})

app.use((req, res) =>{
    console.log(res); // this will show what are the properties of the object which we can use. 

    console.log('new incomming request'); // this listens to every request
    let firstRes = {
        name:"sending Object",
        color: "this is the response we get after request is send to the our listening server."
    };
    let secRes = "<h1>Straight HTML</h1>"
    res.send(secRes);

}) // now if i go to http://localhost:3000/
// it will print 'new incomming request' in console.
// but we won't get any response or see anything in browser.


### 5 - Routing
it's just '/routes', or called path. 
so having above code will always send that response whatever the route is so: we need change.



### 6 - nodemon
i used to use. npm run dev. cause changes in code doesn't get change in server and we always restarted server but we now use nodemon so change in code directly shows up in server in development. and
npm run dev is using nodemon internally.


### 7 - Path Parameter
we don't code each pathname like new facebook profile and code but have variable for that path in url.

app.get("/:username/:id",(req, res) =>{
    let {username, id} = req.params;
    console.log(username);
    res.send(`<h1>${username}</h1>`);
})

### 8 - Query related stuff
req.query ma aauxa tyo q=Google wala hunthyo ni ho tyo.

