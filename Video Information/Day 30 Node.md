is 9+6 videos = 15 days worth of videos possible to consume knowledge from???
nope, cause learning needs practice, it's not watching kdrama or youtube and wasting time thinking doing nothing.

1-3: introductions

### 4 - Node REPL
Read, Evaluate (i thought edit) , Print, Loop
when writing node in terminal we get like ide that runs command like console.log("Hello")
node don't have window object but GLOBAL Object.
> global
> .help
> .exit

### 5 - Node Files
node jsfile.js 
in terminal. I KNOW

basic info

### 6/7 - module.exports (IMPORTANT NEW Concept)
to use function / properties from other file.
to make things available to another file. 

module.exports = 123; 
// only this 123 will be accessible from other files. 
// this written in those utility repeadily used codes that we can on other pages, like navbar.

const somevalue = require("./math"); 
// ./means same directory, ok.
// 'require' keyword to import.


to export everything
put everything into one object with same name like:

Example:
let obj = {
    sum: sum,
    mul: mul,
    pi: pi
}
module.exports = obj;

then using require in another function
and then

math.sum(a,b)
console.log(math.pi);
or
module.exports = {//sidai object haldine}

module.exports.sum = (a,b) => (a+b); 
// this will work 

exports.sum = (a,b) => a+b;
// this will also work but

but 
exports = 3; // might not work, cause it treats as variable re.
so what about:
exports.pi = 3.14; // idk... literally i don't know. cause objects is said to work but not value itself so idk.


### 8 - Exports in Directories 
if we require Directory, it will look for index.js and returns what it gave us. 
it's like entry point, like main() in c or c++



### 9 - what is npm
Node Package Manager
standard package manager for node.js
libraries of packages.


### 10 - installing
npmjs.com - node ko packages in this website

`mkdir figletDir`
`cd figletDir`
`npm install figlet`

installed packages are our dependencies and their version is most important for compatiability with other packages.

node_modules - contains every installed dependency for our project
package-lock.json - records exact version of every installed dependency, including it's sub-dependencies and their version.
// we ignored package.json this time.

they get generated automatically when we install packages.

to use any packages we go to their documentation, NICEEEEEEE.

const figlet = require('figlet');
// our code will know it's package and we don't need to use ./ dot slash
code copy pasted from docs.

### 11 - package.json
this has more important data,
it contains descriptive and functaional metadata about project, eg: name, version, dependencies, liscence haru 

use: we share this file to let other to download specific version of any tools, stuff. this one smaller file.

when using `npm install` when we have this package.json file in our folder.
then it will check and make sure every packages are downloaded that are in package.json file.

first we learn and find out which version of which packages are compatiable,
we download using `npm install figlet-name` then these goes to be saved at package.json
then we can't mess with package.json file after that cause it's the summary file.

WE USE 'npm init' in our folder so that we put our information like liscence and author like our names that can be known to others if our project is going good or somethin.g

this is how we create 'package.json' without download any packages in first.



### 12 - locally or globally downloading
if node module isn't in your directory where your file lives, then it can't find the libraries. 
node_module needs to be on the same folder as your code or it should get branches off that main point. 
node_module doesn't cover on it's parent directory, or previous folder.
ERROR hunxa if we try to use libraries code outside it's range.

BEST USAGE is LOCAL INSTALLATION, how we use.
but just for information

`npm install -g figlet`
this -g will download in global level but we need to link before we can use it. idk why.
`npm link figlet` in that directory then we work 


### 13 - using 'import' than 'require'
we should always 'import' or 'require' can't do half half.

we use 'export' before any object or function.
example:
export const sum = (a,b) => a+b;

then, 
import {sum, pi} from "./math.js";

console.log(sum(1,2)); // can't do this
but we need to manually put
"type": "module" in package.json file in main folder. 


when using module.exports, we have to initialize whole 1000 lines of code, while 
when we use import then we can access specific functions of that code. 

it is said that module.exports is synchronous 
but 
import and 'export' keyword is asynchronous function

i don't remember but ek choti the packages didn't activated or imported and codes below ran and stuff like those, are called BUGS.

