function Circle(radius) {
    // Instance member
    this.radius = radius;
    this.move = function() {
        console.log("move");
    }
}

// Prototype member
Circle.prototype.draw = function() {
    this.move();
    console.log('draw');
}


const c1 = new Circle(1);
const c2 = new Circle(2);

// Basically by using the prototype member instead of the instance member you can save memory.