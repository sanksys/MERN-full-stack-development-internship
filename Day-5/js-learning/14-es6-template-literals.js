/*
TEMPLATE LITERALS (ES6)
----------------------

Template literals allow us to:
✔ Create strings easily
✔ Insert variables inside strings
✔ Write clean, readable code

Template literals use BACKTICKS (` `) instead of quotes.
*/

// ❌ OLD WAY (Before ES6)
const username = "Sanket";
const course = "MERN Internship";

console.log("Old way output:");
console.log("Welcome " + username + " to " + course);

// -------------------------------------

// ✅ NEW WAY (ES6 Template Literals)
console.log("\nTemplate literal output:");
console.log(`Welcome ${username} to ${course}`);

// -------------------------------------

/*
Why this is better?
- No + operator
- Easy to read
- Less error-prone
- Very common in React
*/

// -------------------------------------

// Example with expression inside template literal
const totalMarks = 85;
const maxMarks = 100;

console.log("\nUsing expressions:");
console.log(`Your score is ${totalMarks}/${maxMarks}`);
console.log(`Result: ${totalMarks >= 40 ? "PASS" : "FAIL"}`);

// -------------------------------------

/*
MULTI-LINE STRINGS
------------------
Template literals allow multi-line strings easily.
*/

console.log("\nMulti-line message:");
console.log(`
Hello ${username},
Welcome to the MERN Internship.
You will learn:
- JavaScript
- React
- Node.js
- MongoDB
Good luck!
`);

/*
REACT CONNECTION
----------------
In React, template literals are commonly used for:
- Dynamic text
- Class names
- Messages
*/

console.log("\nReact mindset example:");
const isLoggedIn = true;
console.log(`User Status: ${isLoggedIn ? "Logged In" : "Logged Out"}`);
