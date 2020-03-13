function Shape() {

}

Shape.prototype.duplicate = function () {
    console.log("duplicate");
}

function Circle(radius) {
    this.radius = radius;
}


// Object.create takes an argument which will be the prototype for the object you are creating.
Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.draw = function () {
    console.log('draw');
}

const s = new Shape();