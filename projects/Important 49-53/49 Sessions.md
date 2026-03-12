I m going to code separately then i know then i implement in original app. 

npm i express express-session

### 1 - what did i do. 
installed packages, 
made basic server listening,
used express-session package,
i checked cookie and saw connect.sid, IT'S SESSINO ID. of individual Browser. NOW THE BROWSER can Remember it's ME from different tabs, CRAZYYY.

let's see what does req.session even store to begin with. Heheehhe hahahah HAHAHAHAHA lol. matha kharab xa bc.
so req.session 

### 5 - connect-flash
we need to show temporary info to user after something happened. 
we usually execute and show message when we get redirected to new page like from login to dashboard. 
It is compulsary to use Session before using connect-flash. 

i can't install package right now but:
npm i connect-flash
but all code will be here. 

we send 2 things in flash middleware, it's key and value. yeahh...

once we put reviews or comment, we can flash that hey, success happened you idiot. 
and however many times i refresh it doesn't show, UNLESS.... i put new comment, i don't know how this flash works.
every time flash message is initialized it won't disappear unless it's shown.

once msg is shown it disappears from memory. so that Initialization needs to work every time. 
that's why every new registered user run initializatino that's the reaon we would see flash message every time. 
NICE NICE NICE........


### 6 - Better way of using Flash
req.locals

we don't need to actually pass each time like that but can use.
req.locals.msg = req.flash("success");
req.locals.errorMsg = req.flash("error"); // just used if statement n had error message initialized and then used for anonomous name.

now this 'msg' can be accessed in any page cause locally cached in session i think.
but once it's Viewed, Flash will know and remove message from memory.


another better way: MIDDLEWARES. LOL i didn't thought of this.. i will start to think of middleware from now. 
we can just put those middleware to save flashmessages in req.locals in middlewares for those path. 
not implemented but i think easy enough. 


### 7 - Implement Session in Project.
Let's just watch. 
yeah.

### 8 - Cookie in sessionOption
Great Information.
cookies can save session with no expiration data. Damn. i didn't knew that. 
so we set limit.
expires directly set garna mileko xaina, 
it is said to have no expiration date but idk dude if non-persistent cookies gets deleted once browser is exited.

Cookie Expiry data put in sessionOptions:
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


### 9 - Implement Flash in Project.
Let's just see video no need to implement, things i learned. idk. 


### 10 - Flash Success Styling
we just used ejs and bootstraps.
idk.


### 11 - Flash Failure Includes
See when we delete some post and someone directly goes to URL LINK. we need to show something like it doesn't exists, 
cause right now it shows ERRORS. 
we need to test and Think of all the possibility.

Just Normal concepts using if statements and other things. no new concepts.
