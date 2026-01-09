/*
PROMISES
--------
A Promise represents a value that will be
available in the future.

Used heavily for:
- API calls
- Async operations
- MERN applications
*/

// -------------------------------------
// 1️⃣ CREATING A PROMISE
// -------------------------------------

const fetchData = () =>
  new Promise(resolve => {
    console.log("Fetching data...");
    setTimeout(() => {
      resolve("Data received");
    }, 1000);
  });

/*
Promise states:
- Pending
- Fulfilled (resolve)
- Rejected (reject)
*/

// -------------------------------------
// 2️⃣ CONSUMING A PROMISE (.then)
// -------------------------------------

fetchData().then(result => {
  console.log("\nPromise resolved:");
  console.log(result);
});

/*
.then runs when promise is resolved
*/

// -------------------------------------
// 3️⃣ WHY PROMISES MATTER
// -------------------------------------

/*
Without promises:
- Callback hell
- Hard to read code

Promises make async code:
- Cleaner
- More readable
*/

// -------------------------------------
// REACT / MERN CONNECTION
// -------------------------------------

/*
In React:
- API calls return promises
- fetch(), axios → promises
- useEffect uses promises

Example:
fetch(url).then(res => res.json())
*/

// -------------------------------------
// SUMMARY 
// -------------------------------------

console.log("\nSUMMARY:");
console.log("Promise = future value");
console.log("resolve → success");
console.log("then → handle result");
