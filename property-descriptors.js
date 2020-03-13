let person = { name: "PC" };
let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');



console.log(descriptor);

// descriptor is known as the property descriptor
// 'configurable' is true, which means we can delete this member if we want to
// 'enumerable' is false, which is why when we iterate over the person object, we cannot see the toString method
// 'writable' is true, which means we can overright this method.


