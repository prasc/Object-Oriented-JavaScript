let number = 10;

function increase(number) {
    number++;
}

increase(number);
console.log(number);


// vs

let obj = { value: 10 };

function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj)

// difference is, the second example is calling teh object by reference, not creating a new copy, so obj.value will be 11. In the first example, number will be 10 because it does not get increased outside of the function.