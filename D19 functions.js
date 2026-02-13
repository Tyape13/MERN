// D18 has just "dictionaries" called "Object Literals" and guessing games. 

// D19, i don't need to see videos, these are the topics, that's it. 

function hello(){
    console.log('this is nice');
}

// do i need to remember the word function as to create function in js, No. But it's 'def' in python.
function isAdult(){
    let age = 22;
    console.log("bro i m old not just adult");
    if (age>=18){
        console.log("You Man Now");
    }else{
        console.log("You wanna watch CocoMelon??? Awww");
    }
}
isAdult(); // func calling.

// Function with args

function namePrinting(name){ // ok we don't need to put 'namePrinting(let name)' no let.
    console.log("My Name is", name);
}

namePrinting("Sameer");

// return works same as i used to use.

function sum(a,b){
    return a+b;
    console.log("Beginners mistake, so as Programmer See UnExpected Errors");
    console.log("after Fundamentals Mastered");
}
let s = sum(sum(3,4),7);
console.log("sum is", s);
// i know bro return breaks whole function even if it's loop. 
// actually idk bro, break or return which more powerful when loop.

function tester(){
    for (let i = 0; i<=20; i++){
        if (i==15){
            return true;
        }
        console.log(i); // will it stop before 15?
    }
}

console.log(tester()); // nice

// Scope, i have no idea what's this. 
// Scope determines accessibility of variables, objects and functions from diff parts of code
// 3 types: function, block, lexical.

// function scope. OHHH SCOPEEE.
// context: variable bare, so variables inside the function cant be accessed by outside methods. 
// SCOPE...hmmm

// this is just concept of fundamental about how function works. 
// so, same name can exist which are different if it's inside function or outside. 

/// ok ok ok ok, one more thing. 

let sum1 = 123123123; // ok idiot sum has been function above. 
// that's the reason we need TYPESCRIPT. AHHH I see.

function calcSum(){
    // let sum1 = 2; // try to comment out and comment this, same name but 
    console.log(sum1);
}

calcSum();
console.log(sum1); // if we comment first one then error. but we can comment let sum1 inside function.
// if func doesn't have variable inside then it will look outside function
// yeah, not complex but writing complex. 


// BLOCK scope
// {} - yo vitra ko only scope exists. it doesn't apply on var. 
// we don't use 'var' cause not good and sometimes illogical than others.
// same as for(let i = 0; i<12; i++), we can't access i outside of this for loop. 
// it only works inside block.

// LEXICAL scope
// complex name but the concept is:
// nested function vitra ko same logic as access for inside and outside variables


// Function Expressions
// we don't assign name directly to function but
// we assign variable to nameless function

let stupidity = function(a,b){
    console.log("printing this variable will give function but only with () it will work");
}

console.log(stupidity); //  to pass function_variable as argument in another function..
stupidity();

sum; // BROO i m not getting error on this sum() function too wtf.

// Higher Order Function
// we return function after checking like: ('odd'/'even') so same work for different variants can be easy.
// decent concept but not usable i think.

// METHODS
const calculator = {
    add: function (a,b){
        return a + b;
    },
    sub: function(a,b){
        return a - b;
    },
    mul: function(a,b){
        return a * b;
    }
}

console.log(calculator.add(12,12));
console.log(calculator["mul"](12,12)); // ok i can't do ["mul(12,12)"].

