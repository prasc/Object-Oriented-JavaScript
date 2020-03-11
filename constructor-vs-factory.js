// Factories

// If an object has one or more methods, we have that object has behaviour. 
// Creating objects with object literal syntax is only an issue if that object has more than one method, because it is redudunant

// Solution is to use a factory or constructor function

// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw')
        }
    }
}
const circle = createCircle(1);

// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw')
    }
}

const anotherCircle = new Circle(1);

// Factory Function vs Constructor Function
// If you return an object in the function, we refer to it as a factory function
// If we use the this keyword along with the new operator,  we refer to that function as a constructor function
