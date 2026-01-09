/*
SPREAD & REST OPERATORS (ES6)
----------------------------

Both use ... (three dots) but are used in DIFFERENT ways.

Spread → expands values
Rest   → collects values
*/

// -------------------------------------
// 1️⃣ SPREAD OPERATOR
// -------------------------------------

const nums = [1, 2, 3];

// Spread expands the array into individual values
const newNums = [...nums, 4];

console.log("Original array:");
console.log(nums);      // [1, 2, 3]

console.log("New array using spread:");
console.log(newNums);  // [1, 2, 3, 4]

/*
Why use spread?
- Avoids modifying original array
- Very important in React (state updates)
*/

// -------------------------------------
// 2️⃣ REST OPERATOR
// -------------------------------------

function sum(...values) {
  // values becomes an array
  console.log("\nValues received by rest implies:");
  console.log(values);

  return values.reduce((a, b) => a + b, 0);
}

console.log("\nSum function output:");
console.log(sum(1, 2, 3));    // 6
console.log(sum(5, 10, 15));  // 30

/*
Why use rest?
- Accepts any number of arguments
- Cleaner than arguments keyword
*/

// -------------------------------------
// SUMMARY 
// -------------------------------------

console.log("\nSUMMARY:");
console.log("Spread (...) → expands array/object");
console.log("Rest   (...) → collects function arguments");
console.log("Both are heavily used in React");
