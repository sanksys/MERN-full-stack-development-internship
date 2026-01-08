/*
OPERATORS & CONDITIONS
*/

let a = 10;
let b = 5;

if (a > b) {
  console.log("a is greater");
} else {
  console.log("b is greater");
}



/*
OPERATORS
----------
==  vs === (IMPORTANT)
*/

const x = "10";
const y = 10;

console.log(x == y);  // true ❌
console.log(x === y); // false ✅

/*
CONDITIONS
-----------
Used heavily in React rendering
*/

const isLoggedIn = true;

if (isLoggedIn) {
  console.log("Show Dashboard");
} else {
  console.log("Show Login");
}

// Ternary (React favorite)
const message = isLoggedIn ? "Welcome" : "Please Login";
