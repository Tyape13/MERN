const stud = {
    name:"Sameer Ho Mug",
    age:22,
    description:"Fuking Old Emotional Fool",
    idk() {
        console.log(`${this.name}, Hero Raixa Kta but failure ko dherai chinta linxa ZATTHAAA!!! Failure Nermro Vanne Belief Baseko xa mug ko, Pahile keai ko matlab gardaina thyo ahile lamo zasto dimakh khrb garera....budo vaiskyo. ZATHAA`);
    },
    how() {
        console.log("how tf is this working no idk:function(){} but directly name only")
    }
}
stud.idk();

function stud2(){
    console.log(this); // 'this' refers to Windows Object cause outside. so we can also do window.stud2(); to call func.
}

// 2 - Try & Catch error
try{
    console.log(a);
}catch(e){
    // console.log(e);
}

// 3 - ARROW FUNCTION
const arrowfunc = (a,b,c,d) => { // we using const cause LETS NOT CHANGE FUNCTION. YEAHH 'const' usefulness
    return (a+b+c,d);
}


// 4 - Arrow Func Implicit Return - when just one thing to return or something idk
const somethin = (a,b) => (a*b); // it's () not {}
console.log(somethin(1,2));
// implicit mean if it's just one value it will know it should return that like this
// we might not be using this that much i think cause we could directly paste the code rather

// implicit - no need to use return statement, use () and have just 1 line of calculations, i think
// explicit - normal one that we use return statement.

const squareArea = a => (a*a);
// for 1 variable only we don't need () but for none we do need () lol.
// this seems easier to understand than tying a*a in middle of code and not understanding paxi.
// AHHHH. nice nice.


// 5 - Set Timeout

setTimeout(() => {
    console.log('1. this is the callback nameless function passed in setTimeout.')
}, 1000); // setTimeout(callback_without_parameter, 1s);

console.log('LET ME GIVE YOU INFO ABOUT THIS.');
console.log('4');
console.log('3');
console.log('2');

setTimeout(arrowfunc, 1000);


// 6 - SET INTERVAL
// it will wait and execute, wait and execute, for ETERNITYYYYYYYYY.

let j = 0;
const id = setInterval(()=>{ // id number 1 hunxa so id=1, second SetInterval will be 2.
    console.log("This is "+ ++j + "Time Printing"); // Stupid executes after 5 secondds
    for (let i = 0; i<=10; i++){
        console.log(i);
    }
    
},1000);

setTimeout(() => {
    console.log(++j + "is END"); // Stupid executes after 5 second ONCE.
    clearInterval(id)
}, 5000); /// above will keep printing 1-10 each second, and in 5 second this clearInterval(id) will stop it.

// 7 - how 'this' behaves with arrow 

const whateva = {
    naem: "happy normal day",
    prop: this, // let's play and see how this works.
    getnaem: function(){
        console.log(this.naem);
    }
}

console.log("########## whateva.prop is",whateva.prop); // this will refer to window object cause it's outside of function, so it will print window object.
// it was supposed to print out windows
// but it printed {} empty string, idk why.

console.log(whateva);
whateva.getnaem();


// Same Example and Explanation.
const student = {
    name: "Herohonda",
    marks: 95,
    prop: this, // it has nothing just {} for some reason. idk it was supposed to give global window as value
    // global Scope

    getName: function(){ 
        console.log(this);
        return this.name; // this refers to Student Object
    },
    getMarks: ()=> { // PARENT SCOPE OF ARROW FUNCTION IS GLOBAL SCOPE, so 'this' will refer to global scope's 'this' which is {} or window.

        console.log(this); // this gave {} for some reason
        return this.name; // this refers to undefined cause idk
    },
    getNothin(){
        console.log(this); // this is same as getName: function()
        return this.name;
    }
}
console.log("VIDEO 7 - UNDERSTANDING CONCEPT----------")
console.log(student);
console.log("getName:")
console.log(student.getName()); 
console.log("getMarks:");
console.log(student.getMarks());
console.log("getNothing:");
console.log(student.getNothin());
console.log('-----------------------------------------');
// LEMME EXPLAIN KIDDO:
// Explanation starts here. 
// 'func' called as -> "obj.func" like -> student.getName() so -> 'this'='student'

// but for arrow func, this goes to one who calls it's parents. 
// Arrow will DIRECTLY MOVE TO DEAL WITH the ONE WHO CALLED HIS PARENTS.
// ARROW Cares about his Parents and Will Directly Deal with the one Pulling String to his Parents. 
// Arrow is MEGA CHAD.
// so,

// 'arrow_func' gets called by parents as same way like -> 'obj.arrow_func' like -> student.getMarks() 
// but 'student' Object is Parent of Arrow, so Arrow see his PARENT 'student' Object is Being Called by WINDOWS so it's this is 'Windows' so it's {}. 

// I think pahila it used to show 'windows' but it nowdays shows nothin.

// let's try this theory.


// theory trying.
const megaChadParent = {
    ArrowMan: (func) => {  // ← Arrow function defined here
        func();            // ← kidArrow called with no context
    }
}

const kidArrow = () => {   // ← Arrow function defined in GLOBAL scope
    console.log(this);     // ← 'this' = global scope's 'this' = {} or window
}


megaChadParent.ArrowMan(kidArrow); // If it was supposed to be lexical it should have printed MegaChadParent According to my Theory but it's going directly to windows always for some reason. Bruh.




/// The Theory was Wrong. I REPEAT THE THEORY WAS WRONG. 
/// It's about Where the ARROW FUNCTION IS DEFINED at that time and not called from or outside function calling inside func.

const obj = {
    name: "Parent",
    
    // Regular method
    regularMethod: function() {
        console.log(this.name); // "Parent"
        
        const arrowInside = () => {
            console.log(this.name); // "Parent" — captured from parent function!
        };
        arrowInside();
    },
    
    // Arrow method (bad idea)
    arrowMethod: () => {
        console.log(this.name); // undefined — captured global 'this'
    }
};

obj.regularMethod();  // "Parent", "Parent"
obj.arrowMethod();    // undefined


// There is no Advantage of using this in arrow function cause we can't access properties of object. 
// I think Scope as What part does this Code Affects or Covers. I think.

// I Still don't get this 'THIS' but i will see more examples then understand it.
// cause new example shows that setTimeout is also function and it's scope and stuff and me confused.

const stdLonda = {
    name: "herhonda",
    whateva: this, // this referes to windows cause we not using any normal/arrow function so this is just like printing this in global scope itself. 
    newFunc(){
        setTimeout(function(){
            console.log(this); // this will refer to windows object cause it's normal function and SetTimeout is also function and it's scope is global scope so this will refer to windows object.
    },2000)
    },
    anotherFunc(){
        setTimeout(() => {
            console.log(this); // this will refer to stdLonda object cause it's arrow function and it will take parent scope's 'this' which is stdLonda object. but scope of anotherFunc... I still don't get it bro
        },2000);
    }
}