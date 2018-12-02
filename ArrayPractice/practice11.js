/**
 * Using reduce()
 */
const array = [1,2,3,-4,5,-7,9,-11];

const sumValue = 
        array.reduce((accumulator,currentValue)=>
             accumulator+currentValue,0
        );

console.log(sumValue);
