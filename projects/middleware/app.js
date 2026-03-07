const express = require('express');
const app = express();
const port = 3000;
const ExpressError = require("./Custom/Error");

// app.use("/path", (req, res, next) =>{
//     console.log("this middleware should only work for /path route");
//     next();
// });

// app.use((req, res, next) =>{
//     console.log("This is the first middleware that will execute for every request. even if path doesn't exists.");
//     return next();
//     // we could also write console.log after next() function call. and it would execute that's why we put return. so we can put or not put return it doesn't matter just for sake of not having anything underneath. that's all.

// });

// app.use((req, res, next) =>{
//     console.log("This is the second middleware that will execute after the first one.");
//     next();
// });


// app.get("/path", () =>{
//     console.log("This is supposed to print but middleware will intercept and it will execute.");
//     // console.log("now we understand how middleware works, it intercepts the request and response and can modify them or do something before sending response to the client. it can also end the request-response cycle by sending response to the client or it can pass control to the next middleware in the stack by calling next() function.");
//     // console.log("we can have multiple middleware for a single route and they will execute in the order they are defined. we can also have middleware that executes for all routes by defining it before any route handlers. we can also have middleware that executes for specific routes by defining it after the route handlers.");
//     // console.log("we can also have error handling middleware that will execute when there is an error in the request-response cycle. we can define it by using app.use() and passing a function with four parameters (err, req, res, next). this middleware will execute when there is an error in the request-response cycle and we can send response to the client or pass control to the next middleware in the stack by calling next() function with the error object.");
//     // console.log("middleware is a powerful tool that allows us to modify the request and response objects, end the request-response cycle, or pass control to the next middleware in the stack. it is an essential part of building web applications with express.js and it helps us to keep our code organized and maintainable.");
// });


/// utility middleware
// we always need this middleware before any route handler, cause once response is send middleware isn't executed.
app.use("/dontmesswidme",(req, res, next) =>{
    console.log(req.method, req.url, Date.now()); // GET /path 1772720242143
    next();
});

let checker = (req, res, next) =>{
    let {token} = req.query;
    if(token === "givingaccess"){
        // If the token is valid, just call next() to pass control.
        // DO NOT send a response here, as the next middleware will handle it.
        next();
    }else{
        // If unauthorized, send the response and return to stop further execution.
        throw new ExpressError(401, "Unauthorized access. Invalid token."); // This will be caught by the error handling middleware.
        // this is not normally how we do things but basic default k ho vanera dekhako, when we had just Error but we changed it to ExpressError.
        
    }
};

// This middleware should handle the actual sending of data if 'checker' passes.
app.get('/api/data', checker, (req, res) =>{ // Changed from app.use to app.get, and removed 'next' from here.
    res.json({
        message: "This is some data from the server."
    });
    // No next() here, as this is the final handler for this route.
});

// The previous app.get('/api/data', (req, res) => { ... }) is now redundant and can be removed,
// as the app.get above handles both the middleware and the final response.


app.get("/", (req,res)=>{
    res.send("Hello World");
});

app.listen(port, () =>{
    console.log("Listening to port", port);
});
