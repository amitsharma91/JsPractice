//1) Factory Function used to create objects
function createCircle(radius){
    return {
        radius,
        drwaw(){
            console.log("draw")
        }
    };
}

const circleObject = createCircle(5);
console.log(circleObject);
/////////////////////////////////////
//2) Constructor used to create Object

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("draw circle");
    }
}

const circleObject2 = new Circle(6);