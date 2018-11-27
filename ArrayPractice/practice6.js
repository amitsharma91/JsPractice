/** Iterating Array */

let array = [1,2,3,4,5,6,7,8];

// option 1
for(let number of array)
    console.log(number);

// option 2
array.forEach(number => console.log(number));

/** Joining Arrays */

// join array
const joinedArray = array.join(",");
console.log(joinedArray);

// split string
const splitArray = joinedArray.split(",");
console.log(splitArray);

const str = "This-is-simple-string-to-display";

//split string
const string1 = str.split("-")
console.log(string1);

//join array
console.log(string1.join(" "));

