'use strict';

/* Call function from function in loop
- Implement function `average` with signature
  `average(a: number, b: number): number`
  calculating average (arithmetic mean).
- Implement function `square` with signature
  `square(x: number): number` calculating square of x.
- Implement function `cube` with signature
  `cube(x: number): number` calculating cube of x.
- Call `square` and `cube` in loop 0 to 9, pass results
  to function `average` on each iteration.
  Add calculation results to array and return this array
  from function `calculate`.

Call functions `square` and `cube` in loop, then pass their
results to function `average`. Print what `average` returns. */

const square = (x) => x**2;

const cube = (x) => x**3; // x * square(x)

const average = (a, b) => (a + b) / 2;

const calculate = (start = 0, end = 9) => {
let arr = [];
for (let item = start; item <= end; ++item) {
  arr.push(average(square(item), cube(item)));
}
return arr;
};
// let data = calculate();
// console.log(data);

calculate();

module.exports = { square, cube, average, calculate };
