
### 1 - Model Views Controllers
MVC is design pattern or framework, 
MVC is just way of writing code. 
i think we used model, view and let's learn about controllers.
models - have schema of database
views - files like .ejs that we render
controllers - core functionality of backend file.

we tried to shift, async function from inside the /routes file into controllers. 
just exact function is gone to controllers.
putting most of every Callback in controllers/separate_file. 

since route is for routing we can't put whole functions inside that, we will just see routes there
so moving all callbacks to make code look cleaner. 

controller/listing.js:
module.exports.index = async(...) 
// we can have multiple with diff names of this .index or .review, stuff.

routes/listing.js
const listingControllers = require('../controller/listing.js');
router.get("/", asyncWrap(listingControllers.index));

this is it. 

### 2 - we did above for eveyr other routes. 
tried to gave such a name that's helpful for us.


### 3 - MVC for reviews section of main project. 
same done.
for user route also.    

### 4 - more compact router
router.route()
this route() method, puts different functions like post, put, delete of same route like '/:id/viewpost' then we combine them all
it is more compact.
router.route('/').get(onlycallback).post(callbackNameOnly);
 
see get request is only 1 for each route, and if it has post request.
WE CAN USE ROUTER.ROUTE().

Remember Kids: we always but '/random' above '/:id' cause if /:id is above then it takes random as id and doesn't let it pass through in router file.
done for all, listing, review and users. 

### 5 - restyling Reviews star section 
cause it was bad and range ko html default rating jasto khoya.
starability package learning. 
me skipping.


### 6 - Img upload
than putting link like a fukin idiot.
but how does she save. i think locally for now. Nope. mongox Vanne cloud service ma re. 
we upload and it gives us link and we save link in mongodb.

this is little complex thing to handle everything, errors and stuff but just normal basics haru herne re yeta.


### 7 - Manipulating Form
we can only send urlencoded data right now through form or backend.
but we change it now. 

we make:
<form enctype="multipart/form-data"> // this makes it possible
<input type="file" >  // now it will give upload section

we checked then from backend:
we have:
app.use(express.urlencoded({extended:true}));
// having this will give empty body to parse cause there is whole file send in but url ko matrai data can be parsed from above code.

we use 'multer' package. 
middleware for handling multipart/form-data.
only parses this type of file, not other types. 

let's install it. 

we require then put destination as local file itself.  it will create that folder if it doesnt' exist. 


### 8 - CLOUDINARY using for images. 
she says there is different way to store .env variables in Production. well that's good information.
we only require dotenv when in development and not while ....Production... 

### 9 - libraries using
cloudinary libraries to connect to cloudinary
'multer-storage-cloudinary' library.

... 
### 10-idk
all about showing image...



# 53
it was editing and showing preview about images
then it was about MAPS, i don't need it i need to learn tech stack cause it's too much imp than this.

# 54
let's just see 54 and, session ko last 3 videos saraaaraaa. then i move to tech stack. 



I will learn react Paxi. it's important and i will complete those videos but tech stack priority wise padum and i need to be able to understand every code. 
