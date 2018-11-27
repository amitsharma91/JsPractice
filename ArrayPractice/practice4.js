/** Removing Elements from Array */

let array = [1,2,3,4,5,6,7,8,9];
console.log(array);

// Remove from last
console.log(array.pop());
console.log(array);

// Remove from start
console.log(array.shift());
console.log(array);

// Remove from specific Loacation
console.log(array.splice(1,1));
console.log(array);

/** Emptying Array **************************/

// option 1:
array = [];
console.log(array);

array = [1,2,3,4,5,6,7,8,9];
console.log(array);

// option 2:
array.length = 0;
console.log(array);