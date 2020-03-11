// iterating = enumerating

// for in loop

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle = new Circle(10);

for (let key in circle) {

    if (typeof circle[key] !== 'function') {
        console.log(circle[key]);
    }

    console.log(key);
}


const keys = Object.keys(circle);
console.log(keys);
