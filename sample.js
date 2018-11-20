/*function Smaple() {}
Smaple.prototype.firstName = "Amit";
Smaple.prototype.lastName = "Sharma";
Smaple.prototype.profession = "Developer";
Smaple.prototype.fullName = function(){
    console.log(this.firstName+" "+this.lastName);    
};

var object = new Smaple();
console.log(object.firstName);
console.log(object.fullName());
*/
///////////////////////////////////////////////

function Sample(name,profession){
    this.name = name;
    this.profession = profession;
};

var sample  = new Sample("Amit", "Developer");
console.log(sample.name + " is "+ sample.profession);

