Ok, Just 1 and a half progress. while plan was 10 days worth of videos.



### 1 - Advance JS Call Stack
We Exploring Asynchronous Behaviour of Javascript.
- call Stack
Last in, First Out. 
it's basic Stack like Plate Stack we put in top and take top one out first.

she just nested calls functions inside one another then calls it's data structure. LIFO.
i know how it work

### 2 - visualization call stack  
for this code below:

function one(){
    return 1;
}
function two() {
    return one() + one();
}
function three(){
    let ans = two() + one();
    console.log(ans);
}

// this is how fibonacci sequence works, i think. 
// i don't think it's that complex it jumps from one function to another when it's called and it will be at another function until answers isn't returned then only it moves on.


### 3 - BreakPoints
for Debugging in Browser.

browsers ma variables vitra value aayeko each steps like Debugging nai dekhaudo raixa 
from f12 then sources then idk


### 4 - Js is Single Threaded Langauge
that's why it's simple to understand and debug concepts.
just like [API] will take request and give response. that's JOB of API.

Only Javascript ho vane, it will Wait for Request or Pause Everything for response to come, 
or
saving data in database also same logic, cause too much data takes alot of time.

but even when JS is single threaded lang, 
we have CallBack and other concepts.
// Callback Concept
"Callback are those function that goes into another function as argument and run there."
like:

setTimeout, HMMM it takes Callback function and it runs after some time while OTHER ARE RUNNING. 
setTimeout is run by browser that is made from C++, and C++ is Multithreaded Language and they can run.

// SYNCHRONOUS
Js is Synchronous, which mean it goes lines by line and No Multi Threading

// Asynchronous
Using setTimeout Functions zasto makes Js, ASYNCHRONOUS. 
Multi Threading vayeko is Asynchronous



### 5 - Callback Hell (Important)
We need to know this Concept.

we can't always know previous response kati bela aauxa, so for that we can't always Think of Time ki 1 sec ma yo 2 sec ma tyo.
NO
if one gets executed then it should trigger another Multithread type await. HMMM AWAIT.
idk if learning that right now. 

CALLBACK NESTING is called CALLBACK HELL.

code below:

function changeColor(color, delay, nextColor){
    setTimeout(()=>{
        h1.style.backgroundColor = color;
    },delay);
    if (nextColor) nextColor();
}

changeColor("red",1000, ()=>{
    changeColor("blue",1000, () => {
        changeColor("pink", 1000, ()=> {
            changeColor("yellow", 1000);
        });
    });
})

// this will get so much complex afterwards

that's why we USE.
'promises'
'async'
'await'
nice nice nice nice. i was telling about this. 


### 6 - Setting up for Promises
The promise object represents the eventual completition (or failure) of an asynchronous operation and it's resulting value.

showing some random database saving and not saving situations with CALLBACK HELL.


### 7 - Learning to use Promises
it's Object in Js.
We did Nesting Callback cause Functions Interdependent on one another. 
like if internet speed was good then only it would save then we could save second Data too but if failed in middle then other will cutoff stuff like those. 

as in Promise, we don't know if it will complete or Fail. We don't know brother. yeahhhhh... somethign something.

Ok back on track.
and Result of what happend will be stored in Promise Object.
Promise Object have 2 things: resolve (success)    &   reject (failure)

Example Code:
// Voli