//create new Array
const array = [4,5];

//push elements in array
array.push(6,7,5);
array.push('8');

//push elemets at begining
array.unshift(1,2,3);

//push element at specific location 
array.splice(2,0,'spam-element');

console.log(array);
/** *********************************** */
//Finding elements

console.log("position of 9: "+array.indexOf(9));
console.log("position of 5: "+array.indexOf(5));
console.log("position of 5 after 6th position: "+array.indexOf(5,6));
console.log("last position of 5: "+array.lastIndexOf(5));

console.log("does 6 exists: "+array.includes(6));
console.log("does 9 exists: "+array.includes(9));