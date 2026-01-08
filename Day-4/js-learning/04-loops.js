/*
LOOPS
*/

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

/*
Other loops:
while, do-while, forEach
*/
/*
LOOPS
------
for, while → less used in React
map, filter → MOST IMPORTANT
*/

const numbers = [1, 2, 3, 4];

// forEach
numbers.forEach(n => console.log(n));

// map (React rendering)
const doubled = numbers.map(n => n * 2);

// filter (conditional UI)
const even = numbers.filter(n => n % 2 === 0);
