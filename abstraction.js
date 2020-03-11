function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 };

    let computerOptimumLocation = function () {
        console.log('optimum location');
    }

    this.draw = function () {
        computerOptimumLocation();
        console.log('draw');
    };
}

const circle = new Circle(10);

// Abstraction
// Hide the details
// Show the essentials