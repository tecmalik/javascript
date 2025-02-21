const Shape = require('./classWorkShape')

class Rectangle extends Shape{

    side1
    side2

    constructor(name, side1, side2){
        super(name);
        this.side1 = side1
        this.side2 = side2
    }

    getArea(){
        return this.side1*this.side2
    }
    isSquare(){
        return this.side1 == this.side2
    } 

}


let firstWall = new Rectangle("window",23,23)

console.log(firstWall.getArea)

module.exports = (Rectangle)