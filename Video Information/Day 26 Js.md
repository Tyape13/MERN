I have nothing to say here. 
Really Nothing to Say.

I have something.
I m not going to remember everything when i m quick scanning videos this fast. 
so i will practice things that will be necessary in futures from here. and if i have to master i will consume whole topic

### 1 - what the fkc is 'async' function 
putting 'async' before function will return PROMISE.
then we can use 'then' and 'catch' method on these async functions.

Example:
`
async function greet() {
    // abc.abc(); // when error happens cause there is nothing like abc.abc() then reject promise
    // throw "this is error";
    return "hello world";
}
let hello = async () =>{
    // how to run async arrow function.
} 

// if error comes inside async function, we will get rejected promise. 
// 'throw' keyword can also give error if something wrong happens.

greet().then((result) =>{

}).catch((error) =>{
    console.log(error);
})


### 2 - 'await' keyword
this will make whole process wait until PROMISE is settled to (resolved or rejected)

Example:
async function show() {
    await colorChange('violet', 1000); // so now it won't print all at once 
    await colorChange('blue', 1000); // one sec after another. than all once after 1 sec.
    
    return "done";
}

await can only be used inside async.



### 3 - Handling Rejections.
if any function inside async that has await is rejected it won't print other that we want,
these situation ko lagi, 
we use Try and Catch Block.


### 4 - API (Application Programming Interface) = 'Waiter' jasto
amazing ko server lai we requesting it's website then it gives response. 
now we talk Sending Request to API than server. 
kitchen is Server. 
waiter is Api.

we can like posts, we can post anything on fb, insta, twitter. using API.

when we get to api link in browser. we see like json data. 

### 5 - public api examples
cat wala

### 6 - Json format.
pahile xml format ma aauthyo returned data. 


### 7 - json data accessing
json data is all in string format when we access it,
we use, 
JSON. parse(data)



### 8 - api requests testing tools
tools:
hoppscoth - better option cause no need for signup or installation
postman

hoppscoth - it's a online website tool and we can test our api. or public api.


### 9 - what is AJAX
Asynchronous Javascript and XML (but we use JSON)
this is whole about api requesting and getting data, handling asynchronous process.
it's liking posts, cause whole page doesn't need to reload.

### 10 - Https Verbs
GET - to get information and is not sensitive information
POST - OK Sensitive Data and need Security
DELETE - tryin to del somethin
PUT - IDK

### 11 - Status Codes
200 - ok (generally success wala 2 dekhi start)
404 - not Found
400 - Bad request (client side error usually starts from 4)
500 - Internal Server Error (starting error from 5 is server errors)

aru ni k k xa xa no need to remember but i can google when i need to.


### 12 - Adding information in urls
idk bro nonsense things


### 13 - https headers
bunch of nothing

### 14 - fetch
fetch(url)
request goes to this url.

this returns PROMISE as Response

fetch(url).then((response) =>{
    console.log(response);
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch((err) =>{
    console.log("fxk");
})


### 15 - async and await use garera fetch

let url = "nice.com/api/facts";

async function getFacts(){
    let res = await fetch(url); // if there is no await response will have undefined when internet slow
    console.log(res);
}