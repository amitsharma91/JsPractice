//array of Objects
const arrayOfObjects = [
    {"id":1,"name": "abc"},
    {"id":2,"name": "xyz"}
];

console.log(arrayOfObjects);

//find element in Array
const resultArray = arrayOfObjects.findIndex(function(element){
    return element.name == 'abc';    
});

console.log(resultArray);