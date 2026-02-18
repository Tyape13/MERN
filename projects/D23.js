// let btn = document.querySelector('button');
// btn.innerText="Please Click Me :(";
// btn.style.backgroundColor = 'pink';
// // pink liips, pinnk lips

// // btn.onclick = function(){
// //     alert("Stop Clicking Me You Idiot");
// // }

// function justFunc(){
//     alert("Stop Clicking Me You Idiot");
// }
// btn.onclick = justFunc; // if we put justFunc() then it executes even if we don't click


// // we have SOOO MANY attributes and so many things we can do with document 
// // TOO MUCH TO REMEMBER
// // so Just Important Ones ONLY. ALWAYS in ANYTHING, IN LIFE ITSELF.



// // for Every other Buttons

// btns = document.querySelectorAll('button');
// for (let i = 0; i < btns.length; i++){ //bttn of btns
//     if (i!=0){
//         btns[i].onclick = niceOne;
//     }
// }
// function niceOne(){
//     alert("Nice Update");
// }








// // ### 7 

// let btn = document.querySelector('button');

// function nice(something){
//     this.herhonda = something;
//     console.log(this.herhonda); // print huna parne event itself ho, but this referes to btn specifically.
// }

// btn.addEventListener('click',(event)=>{
//     nice(event); // NICE NICE NICE NICE NICE NICE NICE. 
// })

// // this worked and printed POINTER EVENT.
// // NICE







// // ### 9

let form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault(); /// AWW Javascript COde Line doesn't let that action to be performed when button is pressed
    
    alert("in html code it was supposed to go to next page called action, but we see alert from JS");
    let inp = document.querySelector('input');
    console.dir(inp);
    console.log(inp.value); // innerText doesn't show the value users printed, it goes to value of input.
    
})