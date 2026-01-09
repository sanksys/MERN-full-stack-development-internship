/*
DEFAULT PARAMETERS
------------------
Default parameters provide a fallback value
when no argument is passed to a function.
*/

// -------------------------------------
// 1️⃣ BASIC EXAMPLE
// -------------------------------------

function greet(name = "Guest") {
  return `Hello ${name}`;
}

console.log("With argument:");
console.log(greet("Sanket")); // Hello Sanket

console.log("\nWithout argument:");
console.log(greet()); // Hello Guest

/*
If name is:
- undefined → default is used
*/

// -------------------------------------
// 2️⃣ WHY THIS IS USEFUL
// -------------------------------------

/*
Without default parameters:
- You must manually check undefined
- More code, less clarity

Default parameters keep functions clean.
*/

// -------------------------------------
// 3️⃣ REACT / MERN CONNECTION
// -------------------------------------

/*
Used commonly in React:

function Button({ label = "Click Me" }) {
  return <button>{label}</button>;
}

Prevents undefined values in UI.
*/

// -------------------------------------
// SUMMARY
// -------------------------------------

console.log("\nSUMMARY:");
console.log("Default values avoid undefined");
console.log("Cleaner and safer functions");
console.log("Very useful in React components");
