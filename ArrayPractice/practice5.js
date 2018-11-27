/** Combining & Slicing Array */

let array1 = [1,2,3,4];
let array2 = [5,6,7,8];

// combining Array
const combinedArray = array1.concat(array2);
console.log(combinedArray);

// slicing from Array
const slicedArray = combinedArray.slice(2,6);
console.log(slicedArray); 
// this creates a copy of array: combinedArray.slice();

/** Using SPREAD operator */

//combining array using spread operator
const combinedArray2 = [...array1,"spam-element",...array2];
console.log(combinedArray2);
// this creates a copy of array: [...combinedArray2];