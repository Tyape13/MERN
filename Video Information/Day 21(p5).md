Just 5 days left to complete this. I MEAN IT.
I need to finish 6 days videos in 1 day.
Ok.

### 1 -  forEach
arr.forEach(function Definition or Name);
definition matlab function(arrayElement){
    // we didnt call but definition.
}
Example: 

arr.forEach(function(el){
    console.log(el);
}); 

### 2 - Map Function (Learn to Be Familiar with this cause really great Function)
same thing. 
but we need to return value inside function
and save gareko variable ma it saves each updated element after calculations.
so new variable is same length array but updated value from different array elements n calcs.

Example:
let num = [1,2,3,4];
let double = num.map(function(el){
    return el*2;
}); //double must have [2,4,6,8]

//FLOATING POINT PRECISION. when dividing stuff it gives 33.3300000000001 or something. i need to learn more on this later.

// Filter
don't need to RETURN VALUE but 1 line filter with parameters we give, 
when filter applied is True it will add in evens or it don't put it in new variable.
so same thing as 'Map' but if we use 'map' we need to use if conditions.

Example:
let evens = nums.filter( (nums) => (nums%2==0) );

### 3 -  every & some
arr.every(functionDef/name)
usability - everything calculation or filter or condition needs to be true for every Elements or else this returns false.

[Note: I learned we can't learn everything, Just focus on Most Important thing and Let's Move on  after Efficiently Understanding Fundamentals that's necesaary ]


### 4 - Reduce
calculates every elements and uses previous output as input to next interval. 
let newVariable = arr.reduce(function(accumulator, element){ 
    // first accumulator is 0 or null and element is calculated with accumulator 
    // returned value is saved in next accumulator and next element of Array comes to element
    // final returned value is saved in new variable
});

Example: 
[1,2,3,4].reduce((res,el) => (res+el)); 
// 0 + 1 = 1 
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
final result is 10.


### 5 - maximum in array
we can use reduce method. 
we return max value and compare with new value that comes in 'el' parameter.

### 6 - P Que

### 7 - Default parameters
same concept and similar rules. 
rule: if we have default value in first parameter then second parameter must also have a default value
or just put parameters with default values later.

Exmaple: 
function sum(a, b=3){
    return a+b;
}
sum(2); // b is default by 3



### 8 - spread
to spread use '...' - 3 dots. 
it gives us individual items 

Example:
console.log(..."hero");
// h e r o
arr = [1,2,3,4]
Math.min(...arr); // or else we do Math.min(arr[0], arr[1], arr[2], arr[3])


### 9 - Spread with Array (to Copy Array) 
when doing 
let newArr = arr;
// this will point to same array and changing one will affect other
so.
let newArr = [...arr];
// this spreads old array and puts it into newArr and it's copy of arr but different address so independent of one another.



### 10 - Spread with Objects Literals (we will get those properties to be passed on directly as parameters)
yeah


### 11 - Rest (3dots has another function)
when using 3dots as parameters name, it can take infinite arguments in function.
Example:
function herohonda(...arr){
    for (let i=0; i < arr.length; i++)
    {
        // everything is grouped inside arr 
        // i think it's like array 
    }
}


### 12 - Destructuring Array.
destructuring garda corresponding index ko value will be saved n no error.

Example:
let name = ['hero', 'honda', 'gunda', 'punda', 'ganta', 'banda', 'panda', 'pundo', 'funtos']
let [winner, runnerup, secondRunnerUp] = names;
// these winner are variables and it will saves hero, honda and gunda. 
// and printing their names will give the values from corresponding index.


### 13 - Destructuring Objects
let newObject = {
    name: "hero",
    last: 'honda',
    password: 'khoya',
    username: 'herhohndaasdfasd;
}
let {name, last} = newObject; // this will create new variable in global scope and value from Object
let {name: nae} = newObject; // ulto xa concept, variable will be nae, searching query is name in newObject
let {password: pass = "hero"} // even though we declared hero as new value but newObject kai value will be saved. but if there is no password in newObject then pass vanne new variable ma "hero" value will be saved.

