/**
 * Sorting primitive Array
 */
const array = [2,3,1];

array.sort()
console.log(array);
array.reverse();
console.log(array);
/************************************** */

/**
 * Sorting Array of Objects
 */

 const oArray = [
    {id: 1, name : 'joy'},
    {id: 3, name : 'tobo'},
    {id: 2, name : 'alobo'}
 ];

//sorting array of objects
 oArray.sort(function(object1,object2){
    name1 = object1.name.toLowerCase();
    name2 = object2.name.toLowerCase();

    //ASC
    if(name1 > name2) return 1;
    if(name1 < name2) return -1;
    if(name1 == name2) return 0;

    // DESC
    // if(name2 > name1) return 1;
    // if(name2 < name1) return -1;
    // if(name2 == name1) return 0;
 });
 console.log(oArray);