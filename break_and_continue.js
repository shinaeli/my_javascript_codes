const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037-1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  true
};

const types = [];
const jonasArray = ['Jonas', 'Schmedtmann', 2037-1991, 'teacher', ['Michael', 'Peter', 'Steven']];
for(let i=0; i<jonasArray.length; i++) {
  console.log(jonasArray[i], typeof jonasArray[i]);
    //Filling the 'types' array
    // types[i] = typeof jonasArray[i];
  types.push(typeof jonasArray[i]);
}
console.log(types);

const years = [1999, 2007, 2010, 1983, 1853, 1673, 2020];
const ages = [];
for(let i=0; i<years.length; i++) {
  ages.push(2022-years[i]);
}
console.log(ages);

// Continue and break
// 'continue' is used to exit the current iteration and move to the next one while 'break' is used to terminate the whole loop 
console.log('----- ONLY STRINGS -----');
const types = [];
const jonasArray = ['Jonas', 'Schmedtmann', 2037-1991, 'teacher', ['Michael', 'Peter', 'Steven']];
for(let i=0; i<jonasArray.length; i++) {
  if(typeof jonasArray[i] !== 'string') continue;
  console.log(jonasArray[i], typeof jonasArray[i]);
    //Filling the 'types' array
    // types[i] = typeof jonasArray[i];
  types.push(typeof jonasArray[i]);
}
console.log(types);

console.log('----- BREAKS AFTER A NUMBER-TYPE IS FOUND -----');
const types = [];
const jonasArray = ['Jonas', 'Schmedtmann', 2037-1991, 'teacher', ['Michael', 'Peter', 'Steven']];
for(let i=0; i<jonasArray.length; i++) {
  if(typeof jonasArray[i] === 'number') break;  //After '46' is found, nothing else is printed and the loop is terminated
  console.log(jonasArray[i], typeof jonasArray[i]);
    //Filling the 'types' array
    // types[i] = typeof jonasArray[i];
  types.push(typeof jonasArray[i]);
}
console.log(types);

let k = 2;  //Global scoped
for(let x=0; x<101; x++) {
k+=2;
if(k % 5 == 0) continue
console.log(k);
if(k >= 150) break
}