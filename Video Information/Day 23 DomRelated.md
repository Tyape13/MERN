6 hrs, 10 days, 120+ video.
Hajimemashou !!! smirk*
lol i love me.

### 1 - DOM events
it comes from user inputs or some event occured after some function.

we don't usually do this but:
Example:
<button onclick="console.log('works but not preferred');" >Click me</button>

Inline Dom Events and Js making it functional is like this!!!
we only use this sometimes.


### 2 - Mouse Pointer Events
onclick(when an element is clicked)
onmouseenter(when mouse enters an element)

i think we can also enter with tab and selected through keyboard. idk.

// Bro I think i can quick scan all 120+ videos but I need to learn and play with concepts. 
// I know. let's see kati vyeauxa.

Extra Concepts:
btn.onmouseenter = function(){
    console.log('this just prints when we hover over those elements');
}



### 3 - EVENTS LISTENERS (TOO MUCH IMPORTANT)
i have seen this even in so many places.


Example:
object.addEventListener(event, Callback); // this callback should be normal function not arrow then we use 'this' normally.

element.addEventListener("click", function(){
    console.log("button clicked");
})



// Concept
This will listen to Infinity and repeadeadly.
In normal btn.onclick = funcion; garda we can't run multiple functions and just yeauta matrai work garxa. like even alert, last walal only work.
BASICALLY, EVERY FUNCTION will work when the events happens.

// There are too many Events just for mouse event only Online ma We can Learn
For our specific needs
'dblclick' event.



### 4 - Small Project
generates random color then heading changes and background also changes. 
uses:
body{
    text-align:center;
}
inside 'div': height, width, border.
when clicking the btn 

### 5 - addEventListener for Elements
even when we click on tags like 'p' or any text inside those tags, we can make it react, 
we can functions to start.
clicking p tag texts to write console.log

### 6 - 'this' inside addEventListener
we use normal function in CALLBACK. i wrote it up.

example: 
btn.addEventListener("click", function(){
    console.dir(this.innerText);
    this.style.backgroundColor = "blue"; // we using 'this'
})


// CONCEPT
we don't want REDUNDANCY, same core logic code shouldn't be written for different elemtents, areas.
we used this same code of function for multiple elements, 
but we put function outside then callback ma Name Halne.
This was supposed to be done basically but k hunxa herera ko.


### 7 - Keyboard Events
we can even track, any key being pressed, or let go. EVEN LETTING GO can be Tracked in Websites. 
Nice.... HackerMan being happy.

// in addEventListener we can pass parameters, but Normal functions rakhda it will be executed. 
SO WE USE ARROW FUNCTION and put normal function with 'this' concept outside the callback arrow function.

HEHEHEHEHAHAHAHHAHAHAHAHAH NICEEEEEEEEEE. kada dxt.

Example:
let btn = document.querySelector('button');

function nice(something){
    this.herhonda = something;
    console.log(this.herhonda);
}

btn.addEventListener('click',(event)=>{
    nice(event);
})

i think this should work. 
- yes it worked
Nice.

'keydown' event when pressing anykey will trigger, even backspace repeateadly triggers everytime and keep pressing space will run this function as much as space is registered.


We use this for games on website. 
ArrowUp, ArrowDown, ArrowLeft, ArrowRight
KeyW, KeyS, KeyA, KeyD ma we can also make those chtr move in function.


### 8 - form events
using 'submit' as event for form object 
then function


### 9 - Extracting Data from FORM
talking about how we can extract form data.
example in D23 but tala ko garena. 

then, we can't always be making separate objects for multiple elements so we use,
form ko object itself than querySelecting new elements like 'input' or with id "#user" "#pass".

we use 'form.elements[0]', acessing it with console.dir(form) or 'this' or event i think, idk about event, probably now.
it's 'elements'. not element. 


### 10 - More Events
events changes - only works on input vitra ko value or textarea or <select> elements.
input events - it triggers when value of <input>, <select>, <textarea> element changes.
not on every steps but when we leave those area, and when there is difference in initial and final steps.


it's just extra knowledge. nothing more.
