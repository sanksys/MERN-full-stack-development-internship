/*
ES6 Arrow Functions
------------------

Arrow functions are a shorter and cleaner way to write functions.
They are used everywhere in React.

React components, event handlers, and callbacks
are mostly written using arrow functions.
*/

// -------------------------------------
// ❌ OLD WAY (Normal Function)
// -------------------------------------

function add(a, b) {
  return a + b;
}

console.log("Normal function output:");
console.log(add(2, 3)); // 5

/*
Problems with normal functions:
- Longer syntax
- Confusing `this` keyword
*/

// -------------------------------------
// ✅ ES6 ARROW FUNCTION
// -------------------------------------

const addArrow = (a, b) => {
  return a + b;
};

console.log("\nArrow function output:");
console.log(addArrow(2, 3)); // 5

/*
Arrow function advantages:
- Shorter syntax
- Cleaner code
- Predictable `this`
*/

// -------------------------------------
// ✅ SHORTER ARROW FUNCTION (Implicit Return)
// -------------------------------------

const multiply = (a, b) => a * b;

console.log("\nArrow function with implicit return:");
console.log(multiply(4, 5)); // 20

/*
If function body has only ONE statement,
we can skip:
- curly braces {}
- return keyword
*/

// -------------------------------------
// ✅ SINGLE PARAMETER ARROW FUNCTION
// -------------------------------------

const square = x => x * x;

console.log("\nSingle parameter arrow function:");
console.log(square(6)); // 36

// -------------------------------------
// ❗ IMPORTANT DIFFERENCE: `this`
// -------------------------------------

const user = {
  name: "Sanket",

  normalFunction: function () {
    console.log("\nNormal function this:");
    console.log(this.name);
  },

  arrowFunction: () => {
    console.log("\nArrow function this:");
    console.log(this.name); // undefined
  }
};

user.normalFunction();
user.arrowFunction();

/*
Arrow functions do NOT have their own `this`.
They use `this` from the surrounding scope.
*/

// -------------------------------------
// REACT CONNECTION (VERY IMPORTANT)
// -------------------------------------

/*
In React:
- Components are arrow functions
- Event handlers are arrow functions
- map(), filter() use arrow functions
*/

console.log("\nReact mindset example:");

const users = ["A", "B", "C"];
const userList = users.map(user => `User: ${user}`);

console.log(userList);

// -------------------------------------
// SUMMARY 
// -------------------------------------

console.log("\nSUMMARY:");
console.log("Arrow functions = shorter, cleaner code");
console.log("Used everywhere in React");
console.log("Avoid normal functions inside React components");
