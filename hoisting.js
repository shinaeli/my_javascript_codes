const myName = 'Jonas';

if(myName === 'Jonas') {
  console.log(`Jonas is a ${job}`);  //ReferenceError: Cannot access 'job' before initialization
  const age = 2037-1989;
  console.log(age);   //TEMPORAL DEAD ZONE FOR 'job' variable
  const job = 'teacher';
  console.log(x);   //ReferenceError: x is not defined i.e. x is undefied(uninitialized) in the TDZ but when the execution gets to the environment where the variable is declared, it becomes initialized
}


// Hoisting with Variables
console.log(me);  //undefined
console.log(job);   //ReferenceError: Cannot access 'job' before initialization
console.log(year);   //ReferenceError: Cannot access 'year' before initialization

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Hoisting with Functions
console.log(addDecl(2,3));   //5 i.e. the function is initialized as the function itself
console.log(addExpr(2,3));   //ReferenceError: Cannot access 'addExpr' before initialization
console.log(addArrow(2,3));   //ReferenceError: Cannot access 'addArrow' before initialization

function addDecl(a, b) {
  return a+b;
}

const addExpr = function (a, b) {
  return a+b;
}

const addArrow = (a, b) => a+b;

console.log(addDecl(2,3));   //5
console.log(addExpr(2,3));   //TypeError: 'addExpr' is not a function i.e. same as console.log(undefined(2,3))
console.log(addArrow(2,3));   //TypeError: 'addArrow' is not a function i.e. same as console.log(undefined(2,3))

function addDecl(a, b) {
  return a+b;
}

var addExpr = function (a, b) {
  return a+b;
}

var addArrow = (a, b) => a+b;

// Example
if(!numProducts) deleteShoppingCart();  //At this point, the value of 'numProducts' is set to 'undefined'

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

// Example 2
var x = 1;  //The 'var' keyword declaration makes 'x' a property pf the global 'window' object
let y = 2;
const z = 3;

console.log( x === window.x);  //true
console.log( y === window.y);  //false
console.log( z === window.z);  //false