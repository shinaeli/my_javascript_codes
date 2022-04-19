const namesOfStudents = ['Edward', 'Jim', 'Victoria', 'Olamilekan', 'Afolashade', 'Oluwaseyi', 'Wemimo', 'Gregory', 'Gina'];
let counterFunc = function (element) {
  return element.length;
}
console.log(namesOfStudents.map(counterFunc));

function capitalize(str) {
  // let splitted = str.split('');
  let magic = x => x.toUpperCase();
  return str.map(magic);
}
capitalize(['dogger', 'dele', 'james']);

function doubleNumbers(arr) {
  let multiplier = x => x*2;
  return arr.map(multiplier);
}
doubleNumbers([2, 9, 17, 46]);

function capitalizeNames(arr) {
  return arr.map(str => str.slice(0, 1).toUpperCase() + str.slice(1, str.length).toLowerCase()) //Using ES6 arrow function syntax
  // return arr.map(function (str) {
  //   let output = str.slice(0, 1).toUpperCase() + str.slice(1, str.length).toLowerCase();
  //   return output;
  // })
}
capitalizeNames(['john', 'JAMES', 'deLILAh', 'qudiRAt']);  //['John', 'James', 'Delilah', 'Qudirat']

function namesOnly(arr) {
  let extractor = elem => elem.name;
  // let extractor = function (elem) {
  //   return elem.name;
  // }
  return arr.map(extractor);
}
namesOnly([{name: 'Angelina Jolie', age: 80}, {name: 'Eric Jones', age: 2}, {name: 'Paris Hilton', age: 5}, {name: 'Kanye West', age: 16}, {name: 'Bob Ziroll', age: 100}])   //['Angelina Jolie', 'Eric Jones', 'Paris Hilton', 'Kanye West', 'Bob Ziroll']

function makeStrings(arr) {
  let ageDetector = function (elem) {
    if(elem.age >= 18) {
      return `${elem.name} can go to The Matrix`;
    } else return `${elem.name} is under age!!`;
  }
  return arr.map(ageDetector);
}
makeStrings([{name: 'Angelina Jolie', age: 80}, {name: 'Eric Jones', age: 2}, {name: 'Paris Hilton', age: 5}, {name: 'Kanye West', age: 16}, {name: 'Bob Ziroll', age: 100}])  //['Angelina Jolie can go to The Matrix', 'Eric Jones is under age!!', 'Paris Hilton is under age!!', 'Kanye West is under age!!', 'Bob Ziroll can go to The Matrix']

function readyToPutInTheDOM(arr) {
  let createDOM = function (elem) {
    return `<h1>${elem.name}</h1><h2>${elem.age}</h2>`;
  }
  return arr.map(createDOM);
}
readyToPutInTheDOM([{name: 'Angelina Jolie', age: 80}, {name: 'Eric Jones', age: 2}, {name: 'Paris Hilton', age: 5}, {name: 'Kanye West', age: 16}, {name: 'Bob Ziroll', age: 100}])   //['<h1>Angelina Jolie</h1><h2>80</h2>', '<h1>Eric Jones</h1><h2>2</h2>', '<h1>Paris Hilton</h1><h2>5</h2>', '<h1>Kanye West</h1><h2>16</h2>', '<h1>Bob Ziroll</h1><h2>100</h2>']

function cleanNames(arr) {
  return arr.map(elem => elem.trim());  //The 'trim' method erases all spaces that are existing in the string
}
cleanNames([" avengers", " captain_america", "ironman   ", " black panther     "]);  //['avengers', 'captain_america', 'ironman', 'black panther']

function mileConverterAndTotalDistanceInKilometres(arr) {
  let output1 = arr.map(elem => 1.609*elem);
  console.log(output1);
  let totalDistanceInKilometres = (accumulator, elem2) => accumulator + elem2;
  return output1.reduce(totalDistanceInKilometres, 0);
}
mileConverterAndTotalDistanceInKilometres([1, 2, 3, 4, 5, 6]);

function squareSumAndSumAverage(arr) {
  const square = arr.map(x => x*x);
  console.log(square);
  return (square.reduce(((accumulator, y) => accumulator + y), 0)) / square.length;
}
squareSumAndSumAverage([25, 45, 55, 77, 88, 99]);

function nameHeros(arr) {
  const result = x => {
    let index = arr.indexOf(x), heroName = x.name;
    return {id: index, hero: heroName};
  }
  return arr.map(result);
}
let heros = [{name: 'Spider-Man'}, {name: 'Thor'}, {name: 'Black Panther'}, {name: 'Captain Marvel'}, {name: 'Silver Surfer'}];
nameHeros(heros);

const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"]
function eraseWords(arr) {
  const eraser = word => word.length > 5;
  return arr.filter(eraser);
}
eraseWords(inputWords);

const numbers = [1,2, 3, 4, 5, 6, 7, 8, 9, 10];
function executeAll(arr) {
  const odd = x => x % 2 != 0;
  let output1 =  arr.filter(odd);
  console.log(output1);  //[1, 3, 5, 7, 9]

  const divisible = y => (y % 2 == 0) || (y % 5 == 0);
  let output2 = arr.filter(divisible);
  console.log(output2);  //[2, 4, 5, 6, 8, 10]

  const divisibleBy3 = k => k % 3 == 0;
  let output3 = arr.filter(divisibleBy3);
  const squareDivisiblesBy3 = m => m**2;
  console.log(output3.map(squareDivisiblesBy3));  //[9, 36, 81]

  const divisiblesBy5 = q => q % 5 == 0;
  let output4 = arr.filter(divisiblesBy5);
  const squareDivisiblesBy5 = v => v*v;
  let output5 = output4.map(squareDivisiblesBy5);
  const adder = (accumulator, elem) => accumulator + elem;
  let output6 = output5.reduce(adder, 0);
  console.log(output6);   //125
}
executeAll(numbers);

function sumPositiveElem(arr) {
  let output1 = arr.filter(x => x > 0);
  let output2 = output1.reduce((accumulator, elem) => accumulator + elem, 0);
  return output2;
}
let input = [1, -4, 12, 0, -3, 29, -150];
sumPositiveElem(input);

const input = 'George Raymond Richard Martin';  //GRRM
function getInitials(arr) {
  let splits = arr.split(' ');
  const slicer = str => str.slice(0, 1).toUpperCase();
  let output1 = splits.map(slicer);
  let output2 = output1.join('');
  return output2;
}
getInitials(input);


const input = [{name: 'John', age: 13}, {name: 'Mark', age: 56}, {name: 'Rachel', age: 45}, {name: 'Nate', age: 67}, {name: 'Jennifer', age: 65}];
function solveAges(arr) {
  let ageArray = [], output = [];
  const ageDetector = x => {
    ageArray.push(x.age)
  };
  arr.map(ageDetector);
  // console.log(ageArray);  [13, 56, 45, 67, 65]
  let minAge = Math.min(...ageArray);
  output.push(minAge);
  let maxAge = Math.max(...ageArray);
  output.push(maxAge);
  let ageDifference = maxAge - minAge;
  output.push(ageDifference);
  return output;  //[13, 67, 54]
}
solveAges(input);

const input = 'Every developer likes to mix kubernetes and javascript';
function abbrevator(arr) {
  let splittedArr = arr.split(' ');  //Seprerates the passed string into a comma-seperated array
  const abbr = str => {
    if(str.length < 4) { //Checks if string passed contains less than 4 characters
      return str;  //The passed string will be retured if it contains less than 4 characters
    } else {
      // let splitted = str.split('');
      // console.log(splitted);
      let inStrings = str.slice(1, str.length - 1).length;  //Extracts and counts the nummber of characters existing the first and last characters of the passed string
      let result = str[0]+inStrings+str[str.length - 1];  //Concatenation of the first and last characters of the paseed string with the length of the characters between them
      return result;
    }
  }
  return splittedArr.map(abbr).join(' ');
}
abbrevator('To terminate the node process on unhandled promise rejection');  //'To t7e the n2e p5s on u7d p5e r7n'
abbrevator(input);  //'E3y d7r l3s to mix k8s and j8t'

function abbr(str) {
  if(str.length < 4) {
    return str;
  } else {
    // let splitted = str.split('');
    // console.log(splitted);
    let inStrings = str.slice(1, str.length - 1).length;
    let result = str[0]+inStrings+str[str.length - 1];
    return result;
  }
}
abbr("every");
// abbr("day");

function factorial(num) {
  let arr = [];  //Create an empty array
  for(let i=0; num > 0; i++) {  //create a 'for' loop
    arr.push(num); //Push the number into the array created in each iteration
    num = num - 1; //Decrease the number before the next iteration
  }
  return arr.reduce(((accumulator, elem) => accumulator * elem), 1); //Apply the reduce method on the array by using the accumulator as 1.
}
factorial(6);  //720
factorial(1986);  //Infinity or 2.12e+5689


const input = [['a', 'b', 'c'], ['c', 'd', 'f'], ['d', 'f', 'g']];
input.flat().reduce((accumulator, currentValue) => {
  if(accumulator[currentValue]) {
    accumulator[currentValue] += 1;
  } else {
    accumulator[currentValue] = 1;
  }
  return accumulator;
}, {});


const square = x => x**2;
const squared = (arr, square) => arr.map(square);
let arr = [2,4,6,8,10];
squared(arr, square);  //[4, 16, 36, 64, 100]

function intersection (arr1, arr2) {
 let outputArr = [];
 if(arr1.length > arr2.length) {
  for(let i=0; i<arr2.length; i++) {
    if(arr1.includes(arr2[i])) {
      outputArr.push(arr2[i]);
    }
  }
  return outputArr;
 } else {
  for(let i=0; i<arr1.length; i++) {
    if(arr2.includes(arr1[i])) {
      outputArr.push(arr1[i]);
    }
  }
  return outputArr;
 }
}
let input1 = [12, 7, 8, 26, 20, 4, 18, 3];
let input2 = [7, 20, 8, 8, 5, 11, 3, 19, 38, 12, 3, 2];
intersection(input2, input1);  //[12, 7, 8, 20, 3]

function objOfMatches(array1, array2, callback) {
  return array2.reduce((res, value, index) => {
    if (value === callback(array1[index])) {
      res[array1[index]] = value;
    }
    return res;
  }, Object.create(null));
}
objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function (str) {
  return str.toUpperCase();
})
