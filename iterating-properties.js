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

// doesn't matter when you modify the prototype, you can modify the protoype before you create the object or after.

// the draw method will still be available to the c1 object
// because we are dealing with a reference type (an object)

// how to iterate over instance properties and prototype properties


// Returns instance members
console.log(Object.keys(c1));

// Returns all members (instance + prototype)
for (let key in c1) {
    console.log(key);
}

// instance is also called 'own' property so you can do
c1.hasOwnProperty('draw');
// to check if draw is an instance property or a prototype property