this is about template files. 
it's just same as profile, we all have specific places where name, logo comes. 
it's template with different data.
templating with ejs. it's like car having a model blueprint and now we can product with different colors, different features, different engines, different transmissions, etc. something like those not too much core but yea we can do custom also.

### 1 - EJS
ejs is simple templating language, that let's us generate HTML markup with plain JS.
ejs is internally imoprted by express, she talks about nodemon stuff in express day 31 it seems.
'views' folder usually stores every other template by default cause express searches for it. 
idk what happens in Fastify.


### 2 - how to use EJS
just write one line in set


app.set("view engine", "ejs"); // view engine matlab, template banaune engine.
// we don't need to import ejs but when importing express it gets along.
app.get ('/', (req, res) =>{
    res.render("home.ejs"); // this home.ejs have html code
})

Remember to create 'view' folder, where every templates are saved.


### 3 - MAIN PROBLEM with routing stuff and routes searching and trying to search in wrong directory.
use this code re:
const path = require('path');

app.set("views", path.join(__dirname, '/views')); // this is how we make server know it's complete path from any places then DYNAMIC TRYING MESS.
// __dirname = this is the working directory of Index.js so it's gonna search from this point.

we need to import this const path = require('path'); in every other code file to not make path searching mistakes. 


### 4 - interpolation syntax
we use ${variable} to embeed value, in normal scale. but by using ejs we can put whole Javascript things.
EJS has different Tags.. Bruh i have to learn this??? naaa. i using Ai. hehehahhahahahahahah hahahahah 
evil smile*

we using    `<%=  ['hello', 'namaste'][0]  %>` this is the Ejs tags, remember yesko bare ma k k learned.


### 5 - Passing Data to Ejs
concept is:
we pass variable value in terms of object, while rendering ejs file itself. 
then we can access that key of object literal in ejs file. 

database bate ayeko data can be passed straight to ejs file:
let rollDice = Math.floor(Math.random()*6) +1;
res.render("rolldice.ejs",{num: rollDice}) // we can even pass just rollDice only. and directly access it.

in ejs file:
<%= num %>

### 6 - using ejs as in instagram username 
first we access the profile from url
that route : "/:username" using let {username} = req.params;
then passing this username into ejs file
that's it.

### 7 - conditional statement in ejs
yes, different concepts on how it works. not necessary i think for now.


### 8 - loops in file.ejs 
she uses for loop to print out followers and using some ejs ko own concepts to print it. 

### 9 - nothing complex 
just normal coding but using logics no new learning topic. 
decent work, idk bro not so important.


### 10 - Includes: this creates subtemplates inside ejs file
we create a new folder calles includes in views folder.
new ejs concept:
<%- include("includes/head.ejs") %>

we removed html ko head whole tags and put it in head.ejs and now this include code comes on top of views folder vitra ko files ko top ma cause saab ma yeai xa salalaaaalalalalla lalallalalala.


'=' using this in <%= %> gives string inside that
'-' using this in <%- %> will render as exact html

header and footer yesari using. 
