let name = "Sameer";
let lastName = "Dai";
console.log(`My name is ${name} ${lastName}`);

console.log('why do i have \`\` in my code editor? Can we use that in js code?');

// Yes, those are called backticks and they are used for template literals in JavaScript.
// Template literals allow for easier string interpolation and multi-line strings.
let fullName = name + " " + lastName;
let numer1 = fullName.length;
console.log(`The length of my full name "${fullName}" is ${numer1} characters.`);

// we run this in code using "node D14 p1.js" command in terminal.
// or npx nodemon D14 p1.js if nodemon is installed.
/* 
<!doctype html>
<html>
  <body>
    <script src="D14 p1.js"></script>
  </body>
</html>
*/
