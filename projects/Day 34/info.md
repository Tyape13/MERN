if i want to finis this videos in 1 week, i need to finish 4-5 days worth of video in 1 day.

### 1 - REST (Representational State Transfer)
REST is an architectural style that defines a set of constraints to be used for creating web services. 
REST is really important concept. 
we have learned about api, how to get/post request. 
now for RESTFUL api, let's learn k k xa.

she talks about a project, where she made quora type website, where we edit post, write post or delete post and dynamic content xa and actively change hune frontend according to users. 

REST is not a package, it's just RULES??? Really??? just rules. Ok.
restful api is used for CRUD, create read update delete, this is main concept in database. 

she says, just for good practice. we do these things. we don't go to /users/delete rather create delete request for /users or things like this.

### 2 - CRUD Operations
GET - retrives resources
POST - submit new data to server
PUT - update existing data COMPLETELY
PATCH - update only 1 or 2 things in data partially
DELETE - removes data


### 3 - Creating RESTful Apis
GET: /posts - to get data for all posts
POST: /posts - to add a new post
GET: /posts/:id - to get one post(using id)
PATCH: /posts/:id - to update specific post
DELETE: /posts/:id - to delete specific post

we done some progress in project

### 4 - Index Route
we put NOUN in routes than VERBS(action word). like post and not view_posts. 
i had to "npm install ejs". 


### 5 - 
Before Writing Code, we usually make Architecture, posts/new haru zasto use garera for one action,
and different path for different paths.

### 6 - Redirect
to redirect into another page cause we will be stuck after update and that looks bad. so for redirecting. 

res.redirect(url);

### 7 - GET /posts/:id
we will put id 
i developed some random things. like it's fun


### 8 - giving and generating random id
uuid, this is package that will help us generate random new unique ids.

used this package
let newId = uuidv4();
this generates new id, we assin and use it. normal logic.

### 9 - 'patch' request
to update existing content.

### 10 - create form for update
get request for /posts/:id/edit
not implemented this functionality in this website, 
but i quick watch video for new concepts.

from html, we can't send put, patch, delete requests. 
WE CANT. Nice nice. not nice actually.

we using 'method-override' package from npm to Change Post Request into Patch, Put or Delete.
how using this package?

in server:
const methodOverride = require("method-override");
app.use(methodOverride('_method'));
// override with POST having ?_method=DELETE

in client:
<form method="POST" action="/recourse?_method=DELETE">
    <button> Delete resource </button>
</form>
 
this will overrider POST request from html browser and overrider to delete in server.
when it sees those things in client and browser.


### 11 - delete route
/posts/:id ma sending Delete request.

nothing big concepts, but i haven't implemented these things, i m moving on to next one.
