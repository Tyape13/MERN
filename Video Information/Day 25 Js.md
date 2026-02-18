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


### 5 - 