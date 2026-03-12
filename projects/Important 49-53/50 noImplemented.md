
### 1 - Authentication vs Authorization
whenever user needs to login and sign up, this concept comes to play.
like 'listing' or 'review' model, we will have user model that will have multiple functions now. 

Authentication: Process of VERIFYING who someone is. like password or facescan on different app to authorize owner of the device is doing things. 

Authorization: After Login, Process of verifying What LEVEL OF ACCESS user has for files, data, applications. only we can change our post from our profile. 


### 2 - Storing Passwords
Concepts and Things about Storing pass.
email, username, pass is necessary.

password can't be stored as normal text. but as HASH Form (Ideally 1 way function).
if one app password is hacked then user usually use similar/same pass so saving password is really necessary.


### 3 - What is Hashing.
one way function, we can't get input from output.
different input, diffeernt output of SAME LENGTH.
small change in input -> LARGE CHANGE in Output. 
eg of 1 way func is : .abs(-5) = 5, we can't ever know by seeing output if input was 5 or -5.
or 3%3 = 0 or 9%3=0 so knowing 0 can't help us find input. 
SHA256(not so good, cause fast algorithm and easy for bruteforce), 
MD5, bycrypt

### 4 - Salting
we add more string to make it more secure. OHH server adding string of it's own added with user password.
LOL.
SALTING. NICE TACTICS. Damn.

even if bruteforce done, normal password hudaina cause salt is complex. 
Salting to Counter rather make BruteForce Hard. 

nodejs already has a package that uses salting stuff or other things too. 
package name is called 'passport'

### 5 - Passport Library
npm i passport
npm i passport-local
npm i passport-local-mongoose

so many other options like jwt, or instagram, linked in stuff idk, but it seems we need to install all three libraries from above. 


i wasn't going to use this package but it seems typescript also uses same packages as javascript so this is important. 


### 6 - User Model
user: username, password, email.

we created model/user.js

### 7 - Using Strategies we learned
we made changes in app.js 

it is said that we need to use SESSION STUFF but we didn't do things from 49.md and session is implemented more on another folder. 
app.use(session({sessionOptions}));
app.use(flash());

new codes in app.js:
app.use(passport.initialize()); // middleware that initializes
app.use(passport.session()); 
// web app needs ability to identify users as they browse from page to page, this series of requests and responses and each associated with the same user, is known as session.

passport.use(new LocalStrategy(User.authenticate()));
- passport.use(): This tells the Passport middleware, "Hey, I want to use a specific method for authentication."
- new LocalStrategy(...): This specifies that the method is the "Local" strategy—meaning you are checking credentials against your own database rather than an external provider like Google or Facebook.
- User.authenticate(): This is the "magic" part. It is a static method usually provided by a plugin called passport-local-mongoose.


When time comes i can master all these things in separate folder, then implement into main app. 
for now knowing is enough. 
we don't need to implement whole logic, we just need to learn PACKAGE, that's it bro.


serializeUser() - storing user information in session
deserializeUser() - removing user information from session

some concept regarding this.


### 8 - Demo User ( I need to learn new updates packages cause syntax haru is diff)
let's add demo user.
i m not adding it but code is:

app.get("/createdemo", async(req, res) =>{
    let user = {
        email: "herhonda@gumba.com",
        username: "GreekGod69"
    };
    let registeredUser = await user.register(user, "passworditself");
    res.send(registeredUser);
});

register is convienent method, it will check if username is unique or not, it will save hashed and salted password. idk how will it verify salt when it's not manually given or something cause we might be able to give it through .env file.

Legends say that we don't even need to connect to mongoose rather just user.register does all the work saving hash itself or something after adding salt. 


Note: it didn't worked cause mongodb wasn't working and in app we didn't connect it anywhere i think.



# wasn't important after this i think. 


### 9 - Signup Form creating stuff.
using get reuqest and doing stuff.


### 10 - Signup form bate Post Method

### 11 - Login User


This Day Series is mostly all about 'passport' package. 
THATS IT.
