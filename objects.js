// Creating an object with from a computed property
// A computed property is assigned to an object by using the 'square' bracket 
let store = {}, firstName = 'first name';
// 'firstName' is a variable which holds a string value of 'first name'
store.lastName = 'Kolawole';
store[firstName] = 'Olaoluwa';
store.greet = function() {
    return `Hello, ${this[firstName]} ${this.lastName}!`;
};
// console.log(store);
// {
//     lastName: 'Kolawole', 
//     'first name': 'Olaoluwa', 
//     greet: function() {
//         return `Hello, ${this.firstName} ${this.lastName}!`;
//     }
// }
console.log(store.greet()); //Hello, Olaoluwa Kolawole!


// Creating an ordinary object by using an arrow function
// If an arrow function must return an object, make sure that the object to be returned is wrapped in parenthesis
// Otherwise Javascript will regard it as a block of code
const store = (firstName, lastName) => ({firstName, lastName});
console.log(store('Olaoluwa', 'Kolawole')); //{firstName: 'Olaoluwa', lastName: 'Kolawole'}


// Creating an ordinary object by using an Immediately Invoked Function Expression(IIFE)
const detail = function(user, age, location) {
    return {
        user,
        age,
        location
    }
}('Obi Cubana', 42, 'Abuja');
console.log(detail); //{user: 'Obi Cubana', age: 42, location: 'Abuja'}


// Overwriting the existing value of an object's property with a newly introduced value
const tester = {
    title: 'Pharaoh',
    country: 'Cairo',
    religion: 'Islam',
    country: 'Egypt'
};
// 'Egypt' overwrites 'Cairo' as the value of 'country' property
console.log(tester); //{title: 'Pharaoh', country: 'Egypt', religion: 'Islam'}


console.log(Object.is(NaN, NaN)); //true
console.log(Object.is(10, '10')); //false
console.log(Object.is(+0, -0)); //false
const tester = {
    title: 'Pharaoh',
    country: 'Cairo',
    religion: 'Islam'
};
const tester1 = {
    title: 'Pharaoh',
    country: 'Egypt',
    religion: 'Islam'
};
// 'Object.is()' method is used to check and confirm the equvalence of two objects
// It returns a boolean value
// It returns 'true' if both object are equal in terms of value and type
console.log(Object.is(tester, tester1)); //false


const receiver = {};
const test = {title: 'Pharaoh', country: 'Cairo', religion: 'Islam'};
const others = {age: 72, spouse: 'Queenie Kay'};
// 'Object.assign()' method is used to create a new object
// Its accepts an empty object called 'receiver' and a indefinite number of objects called 'supplier'
Object.assign(receiver, test, others);
console.log(receiver); //{title: 'Pharaoh', country: 'Cairo', religion: 'Islam', age: 72, spouse: 'Queenie Kay'}


const receiver = {};
const test = {title: 'Pharaoh', country: 'Cairo', religion: 'Islam'};
const others = {age: 72, spouse:'Queenie Kay'};
const children = {princes: 3, princesses: 5, religion: 'Christian'};
// 'Object.assign()' method can also be used to overwrite the value of an existing object's property
Object.assign(receiver, test, others, children);
console.log(receiver); //{title: 'Pharaoh', country: 'Cairo', religion: 'Christian', age: 72, spouse: 'Queenie Kay', princes: 3, princesses: 5}
// 'Object.getOwnPropertyNames()' method returns an array of a object's property names
// It accepts an object as its argument.
console.log(Object.getOwnPropertyNames(receiver)); //['title', 'country', 'religion', 'age', 'spouse', 'princes', 'princesses']

const kiddo = {
    a: 2,
    3: 'lol',
    h: 'dear',
    1: 'ok',
    8: 234,
    d: 'cars',
    e: 'forever',
    5: '007',
    0: 'cutter',
    9: 'weed',
    i: 'Hi'
}
console.log(Object.getOwnPropertyNames(kiddo)); //['0', '1', '3','5', '8', '9', 'a', 'h', 'd', 'e', 'i']