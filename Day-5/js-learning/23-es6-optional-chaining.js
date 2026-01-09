/*
OPTIONAL CHAINING (?.)
---------------------
Optional chaining safely accesses
nested object properties.

It prevents runtime errors.
*/

// -------------------------------------
// 1️⃣ PROBLEM WITHOUT OPTIONAL CHAINING
// -------------------------------------

const user = {};

try {
  // console.log(user.profile.name); // ❌ Error
} catch (e) {
  console.log("Error without optional chaining");
}

/*
If a property does not exist,
JavaScript throws an error.
*/

// -------------------------------------
// 2️⃣ USING OPTIONAL CHAINING
// -------------------------------------

console.log("With optional chaining:");
console.log(user?.profile?.name); // undefined

/*
?. checks:
- If value exists → continue
- If value is null/undefined → stop safely
*/

// -------------------------------------
// 3️⃣ WHY THIS IS IMPORTANT
// -------------------------------------

/*
API responses may not always
contain all fields.

Optional chaining prevents app crashes.
*/

// -------------------------------------
// REACT / MERN CONNECTION
// -------------------------------------

/*
Very common in React:

user?.name
user?.address?.city
data?.results?.[0]

Used when:
- API data loads late
- State is initially empty
*/

// -------------------------------------
// SUMMARY 
// -------------------------------------

console.log("\nSUMMARY:");
console.log("?. prevents errors");
console.log("Returns undefined safely");
console.log("Mandatory for API-based apps");
