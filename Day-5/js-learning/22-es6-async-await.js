/*
ASYNC / AWAIT
-------------
async / await is a cleaner way to work with Promises.
It makes async code look like normal synchronous code.
*/

// -------------------------------------
// 1️⃣ ASYNC FUNCTION
// -------------------------------------

async function loadData() {
  console.log("Fetching data...");

  const response = await fetch("https://example.com");

  console.log("Response received:");
  console.log(response);
}

/*
async:
- Makes a function asynchronous
- Always returns a Promise

await:
- Waits for the Promise to resolve
- Pauses execution inside the function
*/

// -------------------------------------
// 2️⃣ CALLING ASYNC FUNCTION
// -------------------------------------

loadData();

/*
Without await:
- Code becomes hard to read

With await:
- Code flows top to bottom
*/

// -------------------------------------
// 3️⃣ WHY ASYNC / AWAIT IS IMPORTANT
// -------------------------------------

/*
Compare mentally:

Promise style:
fetch(url).then(res => res.json())

Async / Await style:
const res = await fetch(url)

Much easier to read!
*/

// -------------------------------------
// REACT / MERN CONNECTION
// -------------------------------------

/*
In React:
- API calls use async / await
- Commonly used inside useEffect
- Backend APIs also use async / await

Example:
useEffect(() => {
  async function fetchData() {
    const res = await fetch(url);
  }
  fetchData();
}, []);
*/

// -------------------------------------
// SUMMARY 
// -------------------------------------

console.log("\nSUMMARY:");
console.log("async → makes function async");
console.log("await → waits for Promise");
console.log("Used everywhere in React & MERN");
