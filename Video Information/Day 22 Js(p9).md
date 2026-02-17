Dom Related Stuff. 

### 1 - Intro
we can access DOM in js as it's a tree with hierarcy cause html ma we have implemented in heirarchical way. so it's easier for us to interact and change things in this DOCUMENT.

### 2 - What is Dom.
when html + css are initialized in browsers it creates a Document, 
and we can control this 'Document Object Model'.
javascript generates document for which html that's linked with.  
j hos browsers ko console ma document lekhda we can see html stuff.

but we do is.
'console.dir(document);'
and we can actually see that everything in html and css is regarded as object in Js.

so when we change anything in this document, html and everything in pages changes. 

### 3 - download starter Code. 
there are 2 steps:
1. we select elements/tags.
2. changes and manipulations.

literally DOM ko name itself mai k ho description xa. 
it says Document Object Model so everything in document like html+css acts as Object itself and this is model as a whole.

we only manage and edit and make changes to 'document.all' cause document.all has our html code as Object.
it's not 'document' only but 'document.all' that has every code from html. 

// we need to know if document ko object is Array or property;
Example:
console.dir(document.all[8].innerHtml);
// this will return h1 tag vitra ko value and we can also alter it. 
// my point was paxadi 8 lekheko document.all ko array zasto model.

### 5 - Selecting Elements (getElementById)
Greatest piece of code ever.
Example:
let newimg = document.getElementById(variable)
// mistake can be: we need to pass in "" or variable zasto treat whatever we pass.
// cause id is string.  

then we edit things of this object ko 
// we can go to browser and see what are the properties for those
// go to console. 

let imageObject = document.getElementById('nice');
console.log(imageObject); // then we see what can be properties of this image tag ko

// this gives null if no Id Matched


### 6 - Selecting Elements by ClassName (getElementbyClassName)
this will give us: array / collection of objects that has className we told it to find.

Example:
document.getElementByClassName("herohonda");
// it will give us COLLECTION of elements/tags ko Objects haru.

// it will give us Array kinda object even if no Element tags found. Null hudaina

### 7 - getElementByTagname
hmm...
gives empty collection if no tag ko founds.

### 8 - querySelector
IMPORTANT re. cause frequently used. 

document.querySelector('p'); // select first p tag
document.querySelector('#p'); // select first id='p'
document.querySelector('.p'); // select first class='p'
document.querySelectorAll('p'); // select all tags named 'p' 

console.dir(document.querySelector("div a")); // this will give only 'a' tag inside 'div' tags.

// ok this is cool


### 9  - Content in Objects
innerText - shows visible text, like clean text only shows here. 
textContent - shows all full text, like hidden spaces or '\n' yesto haru but no anchor tags with href src links.
innerHtml - shows full markup, bold tag, full SRC links, href full html nai dekhauxa.



### 10 - manipulating attributes
obj.getAttribute(attr);
obj.setAttribute(attr, val); // it removes previous value and sets the value we give it.

'obj' yaneki variable ma saved ELEMENT/Tags or id/class bate selected Tag that has attributes now. 
there methods are for objects. 
exactly how i think it works. 


### 11 - obj.style 
kunai pani object ko full style k k set xa are within this. cause style vanne property has everything that's applied.

Example:
let img = document.querySelector("img");
console.log(img.style); // object.style is inside console.
img.style.backgroundColor = "blue"; // we use background-color in css but like this in JS.

We don't use it that often cause cause cause, we can't access styles that are written in CSS FILE. 
it only gives you value of inline style that's actually nailed into HTML tag code itself which is bad practice. 
WE DONT USE THIS, Tesko Karan.


### 12 - classList Property
kunai pani element haru ko different classNames haru print garna ko lagi we use this property.
one element can have multiple classNames, example we used btn-danger-bold to change style. 
teai print garna ko lagi

we add, remove, update classNames.
it's same as with tyo OPEN source ClassBate changing Styles, wala
we put so many style in one class name and update classname with this.

Example:
obj.classList.add() 
obj.classList.remove()
obj.classList.contains() - to check if class exists
obj.classList.toggle()  - if class exists it removes and if it doesn't it adds.

### 13 - Navigation on Page. 
parentElement
children
previousElementSibling / nextElementSibling

one variable will contain the object of any element then, we can use any property like parentElement or children then new variable will have that new Object assigned to 
multiple huda, array
parent is only 1, so it might be just directly Object.


### 14 - 
