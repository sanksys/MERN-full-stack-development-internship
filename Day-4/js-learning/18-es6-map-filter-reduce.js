/*
map, filter, reduce
-------------------
*/

const nums = [1, 2, 3, 4];

nums.map(n => n * 2);
nums.filter(n => n % 2 === 0);
nums.reduce((sum, n) => sum + n, 0);
