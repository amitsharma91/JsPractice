/**
 * Using every() & some()
 */

 const array = [1,2,3,-4,5,-7,9];

 //using every()
const areAllPositive = array.every(function(number){return number > 0;});
console.log("Are all positive? : "+areAllPositive);

const isAtleastOnePositive = array.some(function(number){return number > 0;});
 console.log("Is atleast on number posiitve? : "+isAtleastOnePositive);
 /******************************************************** */
