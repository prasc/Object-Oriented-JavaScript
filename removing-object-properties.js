function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle = new Circle(10);

circle.location = { x: 1 };

// if you want to delete an object property

delete circle.location;