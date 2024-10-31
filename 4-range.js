'use strict';

// Implement function `range(start: number, end: number): array` returning
// array with all numbers from the range [15, 30] including endpoints

const range = (start, end) => {
if (start < 15 || end > 30 || start > end) return [];
let arr = [];
for (let item = start; item <= end; ++item) {
    arr.push(item);
}
return arr;
};
// let data = range(17, 21);
// console.log(data);
module.exports = { range };
