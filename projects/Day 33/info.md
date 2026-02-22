Get and Post Request bare. 

query string form means - extra data sending in url ko form
drawbacks of GET request - limited with browser of url length, string data format, visible in url.

POST requests - secure, to create/write/update.
data send via request body(any type of data)
No Hacker man can crack this now, HEHEHAHAHAH

### 2 - handling post request
app.use (express.urlencoded({extended:true})); // this is standard line, we always use when using express // this will be used by every other requests. 
app.use(express.json()); // in case of using json format data in post request. 

we need to parse POST request data. cause express doesn't understand directly the query or data send through post, it comes with body and needs to be decoded.

by using above commands in code, the express will understand req.body ma kasto data is loaded. 



### 3 - Revisiting JS
OOPS haru bare. 
Object Oriented Programming. 
(to structure our code)
prototypes
new operator
constructors
classes 
keywords (extends, super)

class is like a blueprint to create objects. i know bro.



### 4 - Prototype methods 
idk bro k k thyo
arr.__proto__ ho ki k thyo yaar. if this comes up i will learn. 

i get it prototype doesn't let same function to be in different location. 
cause it points to same function. 
example in index.js


### 5 - factory functions
just function trying to act as class with methods. but objects created from this function will have functions in separate memory so 1000 objects will have methods pointing at 1000 different locations. 

### 6 - New Operator
the 'new' operator let's developers create an instance of a user-defined object type or of one of the build-in object types that has a constructur function. 

'new' is important to refresh 'this' keyword.. i think. idk but i think that's why new is important and i should put it before creating any object through that constructor. 


### 7 - class 
code ma xa.

### 8 - inheritance ( 'extends' , 'super' keyword)
i think parent ko class name passing in child class, right?
'teacher' , 'student' class ko parent class is 'Person' class. 

class Student extends Person {
    constructor(name, age, marks){
        super(name, age); // we calling parents class constructor.
        this.marks = marks;
    }
}

let s1 = new Student("nice", 12, 34);
s1.talk();
