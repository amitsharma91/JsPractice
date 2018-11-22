//Create Address Class
function Address(street,city,zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function isEqual(address1,address2){
    return address1.street == address2.street && address1.city == address2.city && address1.zipCode == address2.zipCode; 
}

function isSame(address1,address2){
    return address1 === address2;
}

var address1 = new Address("east street 101","California","982374");
var address2 = new Address("east street 101","California","982374");

console.log(address1);
console.log(address2);

console.log(isEqual(address1,address2));
console.log(isEqual(address1,address2));