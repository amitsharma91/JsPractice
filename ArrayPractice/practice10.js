/**
 * Using map()
 */
const array = [1,2,3,-4,5,-7,9,-11];

console.log(5%2);

//filter for positive
const positivesArray = array.filter(number => number >= 0);
console.log(positivesArray);

// mapping
const map = positivesArray.map(num => ({val:num}));
console.log(map);
// const map = positivesArray.map(num => {return  "<li>"+num+"</li>"});
// console.log(map);
/******************************************************************* */
/**
 * Chaining filter and map
 */

 //creating chain to fetch all positive even numbers from array
const newArray = array
                .filter(number => number >= 0)
                .map(number => ({value:number}))
                .filter(object => (object.value % 2 === 0));
                
console.log(newArray);
