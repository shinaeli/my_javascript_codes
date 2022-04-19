console.log('---- GLOBAL SCOPE ----')
//Outside of any function or block
//Variables declared in global scope are accessible everywhere
const me = 'Shina';
const job = 'developer';
const year = 2022;

console.log('---- FUNCTION SCOPE ----')
//Variables are accesssible only inside function NOT outside
//Also called local scope
function calcAge(birthYear) {
  const now = 2022;
  const age = now - birthYear;
  return age;
}
console.log(age);  //ReferenceError
console.log(now);  //ReferenceError

console.log('---- BLOCK SCOPE (ES6) ----')
//Variables are accessible only inside block (block scoped)
//However this ONLY applies to 'let' and 'cost' variables
//Functions are also block scoped i.e. a function declared inside a block is only accessible and called inside the block
if(year >= 1981 && year <= 1996) {
  const millenial = true;
  const food = 'Avocado Toast'
}
console.log(millenial)  //ReferenceError
console.log(food)  //ReferenceError

const myName = 'Shina';  //global scope

function first() {
  const age = 30;  //local scope

  if(age >= 30) {
    const decade = 3; //block scope
    var millenial = true;  //function/local scope
  }

  function second() {  //the second function is block scoped so it can access the variables declared in its parent function 'first'
    const job = 'teacher' //local scope

    console.log(`${myName} is a ${age}years old ${job}`);
  }

  second(); //Jonas is a 30years old teacher
}

first()