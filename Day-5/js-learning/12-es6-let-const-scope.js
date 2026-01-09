/*
ES6: let, const & Block Scope
----------------------------

ES6 introduced let and const to fix problems of var.

React depends on:
✔ predictable scope
✔ no accidental variable overwrite
✔ clean, safe code
*/

// -------------------------------------
// ❌ PROBLEM WITH var (OLD WAY)
// -------------------------------------

if (true) {
  var a = 10;
}

console.log("var example:");
console.log(a); // ✅ Accessible (BAD PRACTICE)

/*
Why is this bad?
- var is function scoped
- It ignores block boundaries
- Can cause unexpected bugs
*/

// -------------------------------------
// ✅ let (BLOCK SCOPED)
// -------------------------------------

if (true) {
  let b = 20;
  console.log("\nlet inside block:");
  console.log(b); // ✅ Works
}

// console.log(b); ❌ ReferenceError

/*
let is:
- Block scoped
- Safer
- Preferred over var
*/

// -------------------------------------
// ✅ const (BLOCK SCOPED + SAFE)
// -------------------------------------

if (true) {
  const c = 30;
  console.log("\nconst inside block:");
  console.log(c); // ✅ Works
}

// console.log(c); ❌ ReferenceError

/*
const is:
- Block scoped
- Cannot be reassigned
- DEFAULT choice in React
*/

// -------------------------------------
// IMPORTANT: const is NOT immutable
// -------------------------------------

const user = {
  name: "Sanket"
};

user.name = "Intern";

console.log("\nconst object mutation:");
console.log(user);

/*
We cannot reassign the object,
but we CAN change its properties.
*/

// user = {} ❌ Error

// -------------------------------------
// SUMMARY 
// -------------------------------------

console.log("\nSUMMARY:");
console.log("var  -> avoid ❌");
console.log("let  -> use when value changes ✅");
console.log("const -> use by default ✅");

/*
REACT CONNECTION
----------------
- React components use const
- State updates require predictable scope
- var can break React logic
*/
