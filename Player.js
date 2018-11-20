//create constructor
function Player(name , email){
    this.name = name;
    this.email = email;
    this.pointsList = [];//list of points
    this.currentPoint = 0;
}

//create a prototype pattern
Player.prototype = {
    constructor: Player,
    updatePoints: function(newPointToUpdate){
        this.pointsList.push(newPointToUpdate);
    },
    showPoints: function(){
        var playerPoints = this.pointsList.length > 0 ? this.pointsList.join(",") : "no points scored yet";

        return this.name + "'s points are: " + playerPoints;
    },
    updateEmail: function(emailToUpdate){
        this.email = emailToUpdate;
        return "email updated with " + emailToUpdate; 
    }
}

// instantiating and using object
player1 = new Player("John","johndoe@gamil.com");

// show points
console.log(player1.showPoints());

// add points
player1.updatePoints(8);
player1.updatePoints(9);

//show points
console.log(player1.showPoints());

console.log(player1.email);
player1.updateEmail("johndoe@gmail.co.in");
console.log(player1.email);