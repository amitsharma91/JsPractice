/**
  * Using Filters in array of primitives
  **/

const array = [1,2,3,-4,5,-7,9,-11];

const allPositiveArray = array.filter(number => number >= 0);
console.log(allPositiveArray);

const allNegativesArray = array.filter(number => number < 0 );
console.log(allNegativesArray);
/*********************************************************** */

/**
 * Using Filters in Array of Objects
 */

const array2 = [
    {rollNo: 1, percent: 63.63},
    {rollNo: 2, percent: 48.99},
    {rollNo: 3, percent: 79.09},
    {rollNo: 4, percent: 92.53},
    {rollNo: 5, percent: 75.67}
];
console.log(array2);


const distinction = array2.filter(object => object.percent > 90);
console.log(distinction);

const firstClass = array2.filter(object => object.percent >= 70 && object.percent<90);
console.log(firstClass);

const secondClass = array2.filter(object => object.percent >= 50 && object.percent<70);
console.log(secondClass);

const passClass = array2.filter(object => object.percent >=40 && object.percent<50);
console.log(passClass);