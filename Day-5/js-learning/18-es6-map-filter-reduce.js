/*
MAP, FILTER, REDUCE
------------------
These are array methods used for
data transformation.

React uses them A LOT for rendering UI.
*/

const nums = [1, 2, 3, 4];

// -------------------------------------
// 1️⃣ MAP – transform each item
// -------------------------------------

const doubled = nums.map(n => n * 2);

console.log("MAP result (doubled):");
console.log(doubled); // [2, 4, 6, 8]

/*
map:
- runs for each item
- returns NEW array
- does NOT modify original
*/

// -------------------------------------
// 2️⃣ FILTER – select some items
// -------------------------------------

const evens = nums.filter(n => n % 2 === 0);

console.log("\nFILTER result (even numbers):");
console.log(evens); // [2, 4]

/*
filter:
- keeps items that match condition
- returns NEW array
*/

// -------------------------------------
// 3️⃣ REDUCE – combine into single value
// -------------------------------------

const total = nums.reduce((sum, n) => sum + n, 0);

console.log("\nREDUCE result (sum):");
console.log(total); // 10

/*
reduce:
- accumulates values
- returns single result
*/

// -------------------------------------
// SUMMARY 
// -------------------------------------

console.log("\nSUMMARY:");
console.log("map    → change items");
console.log("filter → select items");
console.log("reduce → combine items");

/*
REACT CONNECTION:
-----------------
map    → render lists
filter → conditional UI
reduce → totals, counts
*/
