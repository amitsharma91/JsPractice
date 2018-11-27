const arrayOfObjects = [
    {"id":1,"name": "abc"},
    {"id":2,"name": "xyz"}
];

// Using ARROW operator in function
const resultArray = arrayOfObjects.find(element => element.name == 'abc');

console.log(resultArray);