const prompt = require('prompt-sync')(); // module not found. bruh

let arr = [];
let i = 0;
let l;
while (i != 4){
    console.log("1. Show all Tools.");
    console.log("2. Add a Tool.");
    console.log("3. Remove a Tool.");
    console.log("4. Exit.");
    i = parseInt(prompt("Enter your choice:")); // i had k here and i hadn't even initialized k or l.
    switch (i) {
        case 1:
            console.log("Tools:");
            for(let j = 0; j < arr.length; j++){ ////// BROOTHAAA ..ok remember to use 'of' when using array
                console.log(arr[j] + "\n");
            }
            break;
        case 2:
            l = prompt("Type what to add:"); // prompt doesn't work in node.js it's browser function we use readline
            arr.push(l);
            break;
        case 3:
            console.log('i think we delete last one cause i dont know method to do that');
            arr.pop()
            //ok she using splice(value, 1); this to delete than pop. 
            // ok i didn't knew so whatever i don't need to know i m here to understand architecture for actual apps.
            // hehehe i do need things like that but i will research when i need it.
            break;
        case 4:
            break;
    }

}
// there is no simple as "input" in js. 
// we use prompt-sync package for this code to run

// whatever bro.
//i will be watching this videos. this todo app.

// ok i need to practice how to communicate brotha.....
// i know.
// stupid idiot caring too much....sigh*


/// BROO she is using html and js both... yeah whatever.