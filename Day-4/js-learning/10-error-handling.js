/*
ERROR HANDLING
*/

try {
  let x = y + 1;
} catch (err) {
  console.error("Error occurred");
}


/*
ERROR HANDLING
--------------
*/

try {
  let result = riskyFunction();
} catch (error) {
  console.error("Something went wrong");
} finally {
  console.log("Cleanup");
}

/*
Used in:
- API calls
- Backend logic
*/
