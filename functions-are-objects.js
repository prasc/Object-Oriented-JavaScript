function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const otherCircle = new Function('radius', `
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
`);

// both equal same thing.

const circle = new Circle(1);
const otherCirc = new otherCircle(1);