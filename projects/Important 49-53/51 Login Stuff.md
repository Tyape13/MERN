

### 1 - Connecting Login Route
right now anyone is authenticated to create listings, but we need to create verify users or send them back to login.
using Function.

`req.isAuthenticated()` // method from passport package

user ko information is stored in session.
so it goes to ask for session. so i need to relearn completely and really go deep into SESSION first before other things. 

what we did is in middleware to create new post:
if(!req.isAuthenticated()){
    session.flash('error','mgsg');
    res.redirect("/home");
}

I just want to learn and understand every part of code, i knw.
when user is logged in, 
req.user ma information is stored then isauthenticated works from there. 


### 2 - Logout User
using logout method.

logout route, get req. 
Code:
req.logout((err) =>{
    if (err) {
        return next(err);
    }
    req.flash("Success", "loggedout");
    res.redirect("/listings");
})
---

i think we can use component or js functions to trigger logout on push of button but logout in url is also possible.

### 3 - Adding Styling
options like logout in navbar.
above had normal logics implemented. so skipped.

### 4 - automatic login after signup


### 5 - Post Login
for convinence.
if user is on any product page and they have to login then they have to get redirected back to same product page, 
Whole Process thought out.

when user isn't logged in then we want to save the url of the last page user was in.

passport package doesn't have access to delete res.locals variables that can be accessed on any tabs.
after signed up, session is cleared so normal logic of req.session.redirectedUrl=req.originalUrl; when not logged in to current one won't work cause it will be removed after logged in.

# UNDERSTAND THE FLOW OF CODE.

### 6 - Listing Owner
we have list of owner so post is linked with owner. 
we can do authorization after knowing users and their level of access to the content.

we put owner property in each posts post by initDb by using map function and saving updated data again.
owner type is schema.object.type or something i don't remember.
then we put in object string in initDb and reinitialized then every post had just 1 owner for this basic example.

new user ko id saves in.
newListing.owner = req.user._id;
we need to use current user OBJECT id to be passed as OWNER REFERENCE.

just these concepts


### 7 - Starting with Authorization.
i think just checking current id with post id.
with extra feature like hiding buttons if no access stuff.

### 8 - 