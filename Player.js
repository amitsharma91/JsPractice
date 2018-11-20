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

        return this.name + " points are: " + playerPoints;
    },
    updateEmail: function(emailToUpdate){
        this.email = emailToUpdate;
        return "email updated with " + emailToUpdate; 
    }
}