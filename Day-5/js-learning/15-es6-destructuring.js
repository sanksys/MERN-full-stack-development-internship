/*
ES6 DESTRUCTURING
----------------
Destructuring allows us to extract values
from objects and arrays easily.

This is used EVERYWHERE in React.
*/

// -------------------------------------
// 1️⃣ OBJECT DESTRUCTURING (MOST COMMON)
// -------------------------------------

const user = {
  name: "Sanket",
  role: "Intern"
};

// old way (not used in React)
console.log("Old way:");
console.log(user.name);
console.log(user.role);

// new way (React style)
const { name, role } = user;

console.log("\nDestructuring output:");
console.log(name);
console.log(role);

/*
Used in React for props:
function Component({ name, role }) {}
*/

// -------------------------------------
// 2️⃣ ARRAY DESTRUCTURING
// -------------------------------------

const numbers = [10, 20];

// old way
console.log("\nOld array access:");
console.log(numbers[0]);
console.log(numbers[1]);

// new way
const [a, b] = numbers;

console.log("\nArray destructuring:");
console.log(a);
console.log(b);

/*
Used in React hooks:
const [state, setState] = useState()
*/

// -------------------------------------
// 3️⃣ DEFAULT VALUE (SAFE CODE)
// -------------------------------------

const { city = "Nashik" } = user;

console.log("\nDefault value:");
console.log(city);

/*
Prevents undefined values
Common in API data handling
*/

// -------------------------------------
// SUMMARY 
// -------------------------------------

console.log("\nSUMMARY:");
console.log("Destructuring = cleaner code");
console.log("Used in props, state, hooks");
console.log("Mandatory for React");
