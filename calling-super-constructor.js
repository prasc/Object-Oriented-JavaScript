function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function () {
    console.log("duplicate");
}

function Circle(radius) {
    this.radius = radius;
}


// Object.create takes an argument which will be the prototype for the object you are creating.
Circle.prototype = Object.create(Shape.prototype);
// this is to reset the constructor, because without this line, there would be no constructor
Circle.prototype.constructor = Circle;
Circle.prototype.draw = function () {
    console.log('draw');
}

const s = new Shape();



// in terms of intiailzes a new object, these two lines are the same thing:

new Circle.prototype.constructor(1);
new Circle(1);

