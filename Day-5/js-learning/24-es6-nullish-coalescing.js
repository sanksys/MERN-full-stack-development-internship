/*
NULLISH COALESCING (??)
----------------------
?? provides a default value ONLY when
the left side is null or undefined.
*/

// -------------------------------------
// 1️⃣ BASIC EXAMPLE
// -------------------------------------

const value = null ?? "Default";

console.log("Result:");
console.log(value); // "Default"

/*
If value is:
- null        → use default
- undefined   → use default
*/

// -------------------------------------
// 2️⃣ DIFFERENCE FROM || (IMPORTANT)
// -------------------------------------

const score = 0;

console.log("\nUsing || operator:");
console.log(score || 100); // 100 ❌ (wrong for valid 0)

console.log("\nUsing ?? operator:");
console.log(score ?? 100); // 0 ✅ (correct)

/*
|| treats:
0, "", false as false

?? treats ONLY:
null, undefined as missing
*/

// -------------------------------------
// 3️⃣ REACT / MERN USE CASE
// -------------------------------------

/*
Common in React when showing data:

user.age ?? "Not provided"
product.price ?? 0
apiResponse.message ?? "No message"
*/

// -------------------------------------
// SUMMARY 
// -------------------------------------

console.log("\nSUMMARY:");
console.log("?? checks only null or undefined");
console.log("Safer than || for default values");
console.log("Very useful with API data");
