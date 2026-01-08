/*
VARIABLES (ES6)
--------------- 
var   ❌ (avoid)
let   ✅ (mutable)
const ✅ (default choice)
*/

let age = 25;
const name = "Sanket";

// const does NOT mean immutable
const user = { role: "intern" };
user.role = "developer"; // allowed

/*
DATA TYPES
-----------
Primitive:
string, number, boolean, undefined, null

Non-Primitive:
object, array, function
*/

const skills = ["HTML", "CSS", "JS"];
const profile = {
  name: "Sanket",
  skills: skills
};

/*
React heavily uses:
- const
- objects
- arrays
*/
