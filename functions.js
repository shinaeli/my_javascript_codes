function greet(user) {
    return `Hello! ${user}. You are highly welcome.`;
}
const user1 = greet('Drake'), user2 = greet('Michael');
console.log(user1);
console.log(user2);
// Hello! Drake. You are highly welcome.
//  Hello! Michael. You are highly welcome.

const greet = user => `Hello! ${user}. You are highly welcome.`;
const user1 = greet('Drake'), user2 = greet('Michael');
console.log(user1);
console.log(user2);
// Hello! Drake. You are highly welcome.
// Hello! Michael. You are highly welcome.


// Creating an Immediately Invoked Function Expression(IIFE)
let caller = function(x, y, power) {
    return (x+y) ** power;
}(2, 3, 6);
console.log(caller); //15625

// Creating an Immediately Invoked Function Expression(IIFE) using an arrow function syntax
let caller = ((x, y, power) => (x+y) ** power)(2, 3, 6);
console.log(caller); //15625

// Using an arrow function to create and return an object
const createUser = (userName, email) => ({user: `${userName}`, email: `${email}`});
console.log(createUser('ThuggerSlugger', 'slugger305@gmail.com')); //{user: 'ThuggerSlugger', email: 'slugger305@gmail.com'}

// Using the 'Function' constructor to initailize an instace of a function called 'sample'
const sample = new Function('x', 'y', 'z', 'return x+y+z');
console.log(sample(2, 4, 6)); //12

const agePager = new Function('userName', 'age', 'return `${userName} is ${age}years old.`');
console.log(agePager('George Wall', 24)); //George Wall is 24years old.

const showRest = new Function('firstItem', 'secondItem', 'thirdItem', '...otherItems', 'return otherItems');
console.log(showRest('Davido', 'Wizkid', 180, 'TuFace', 'Jay-Z', 'Nas', 7, 'Asake', 'Terminator', 'Rock', 'Olamide', 'Trabaye'));
//  ['TuFace', 'Jay-Z', 'Nas', 7, 'Asake', 'Terminator', 'Rock', 'Olamide', 'Trabaye']


