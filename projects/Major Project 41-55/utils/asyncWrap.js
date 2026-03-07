const asyncWrap = (fn) => {
  // Line 1: Define some logic
  console.log("Wrapping a new route...");

  // Line 2: We MUST use the 'return' keyword here 
  // because we are inside curly braces.
  return (req, res, next) => {
    const startTime = Date.now(); // Another variable
    
    Promise.resolve(fn(req, res, next))
      .catch((err) => {
        console.error(`Error after ${Date.now() - startTime}ms`);
        next(err);
      });
  };
};
// The "Double Arrow" Explained
// In JavaScript, when you write an arrow function without curly braces, it implicitly returns whatever follows the arrow.


module.exports = asyncWrap;


// Look at this line from the fix I suggested:
// Promise.resolve(fn(req, res, next)).catch(next);

// If the function fn is not an async function (meaning it doesn't return a Promise), a standard .catch() would throw a "TypeError: .catch is not a function" and  your server.

// By wrapping it in Promise.resolve(), you are saying:

// "I don't care if fn is async or sync. Turn the result into a Promise so I can safely use .catch() on it."