'use strict';

// Implement function `rangeOdd(start: number, end: number)` returning
// array with all odd numbers from the range [15, 30] including endpoints

const rangeOdd = (start, end) => {
    if (start < 15 || end > 30 || start > end || start % 2 === 0
        || end % 2 === 0) return [];
    let arr = [];
    for (let item = start; item <= end; item += 2) {
        arr.push(item);
    }
    return arr;
    };
    // let data = rangeOdd(17, 21);
    // console.log(data);

module.exports = { rangeOdd };
