/*
Spread & Rest Operators
-----------------------
*/

const nums = [1, 2, 3];
const newNums = [...nums, 4];

function sum(...values) {
  return values.reduce((a, b) => a + b, 0);
}
