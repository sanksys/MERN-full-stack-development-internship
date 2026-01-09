/*
IMMUTABILITY
------------
Immutability means:
❌ do NOT change original data
✅ create a NEW copy with changes

This is EXTREMELY IMPORTANT in React.
*/

// -------------------------------------
// 1️⃣ MUTATION (BAD PRACTICE)
// -------------------------------------

const user = { name: "Sanket" };

// Directly modifying the object
user.role = "Intern";

console.log("After mutation:");
console.log(user);

/*
Problem:
- Original object is changed
- React may NOT detect change
*/

// -------------------------------------
// 2️⃣ IMMUTABLE UPDATE (CORRECT WAY)
// -------------------------------------

const updated = { ...user, role: "Dev" };

console.log("\nImmutable update:");
console.log(updated);

console.log("\nOriginal object remains:");
console.log(user);

/*
Spread operator creates a new object
Original object is untouched
*/

// -------------------------------------
// 3️⃣ WHY THIS MATTERS IN REACT
// -------------------------------------

/*
React compares old state and new state.
If you mutate:
- Reference stays same
- React may not re-render

If you create new object:
- Reference changes
- React updates UI
*/

// -------------------------------------
// SUMMARY 
// -------------------------------------

console.log("\nSUMMARY:");
console.log("Do NOT modify original data");
console.log("Always create new copy");
console.log("Immutability is mandatory in React");
