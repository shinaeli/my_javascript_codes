let arr1 = [];
let arr2 = [];

function copy(arr1, arr2) {
  for(let i=0; i<100; i++) {
    arr1[i] = i+1;
    // arr1.push(i+1);
    for(let k=0; k<arr1.length; k++) {
      arr2[k] = arr1[k];
      // arr2.push(arr1[k]);
    }
  }
  console.log(arr1, arr2);
}
copy(arr1, arr2);


// Sorting a numerical array
function compare(num1, num2) {
  return num1 - num2;
}
const ages = [9, 2, 17, 11, 29, 65, 41, 78, 5, 31];
console.log(ages.reduce(function (accumulator, value, valueIndex, wholeArray) {
  return accumulator + value;
}, 10));
console.log(ages.sort(compare));

// Sorting an alphabetical array
let classNames = ["Goke", "Doyin", "Deji", "Foluke", "Anike", "Seye", "Ayo", "Kola", "Zainab", "Ola", "Yemi", "Bola", "Bukky", "Seyi"];
// console.log(classNames.sort());


let classNames = ["Goke", "Doyin", "Deji", "Foluke", "Anike", "Seye", "Ayo", "Kola", "Zainab", "Ola", "Yemi", "Bola", "Bukky", "Seyi"];

let outcome = [];

function firstLetter(words) {
  return words[0];
}

for(var i=0; i<classNames.length; i++) {
  outcome.push(firstLetter(classNames[i]));
}

console.log(outcome.join(""));

let scores = [[80,87,73], [83,89,94], [95,72,88]];
let total = 0;
for(let i=0; i<scores.length; i++) {
  for(let k=0; k<scores[i].length; k++) {
    // console.log(scores[i][k]);
    total += scores[i][k];
  }
  let average = total / scores[i].length;
  console.log(average.toFixed(2), total);
  total = 0;
  average = 0;
}

let score1 = [80,87,73];
let total = 0;
for(let i=0; i<score1.length; i++) {
  total += score1[i];
}
console.log(total);

// Filter method works on a 'true' condition
let ages = [12, 71, 9, 30, 74, 91, 66, 39, 50, 27, 17, 82, 35, 10, 44, 36];
function isEven(value, valueIndex, wholeArray) {
  return value % 2 == 0;
}
function isOdd(value, valueIndex, wholeArray) {
  return value % 2 != 0;
}
console.log(ages.filter(isEven));
console.log(ages.filter(isOdd));

let ages = [12, 71, 9, 30, 74, 91, 66, 39, 50, 27, 17, 82, 35, 10, 44, 36];
let areEven = [];
let areOdd = [];
let divisibleByMultiplesOfTwoAndThree = [];
let others = [];
for(let i=0; i<ages.length; i++) {
  if(ages[i] % 2 == 0) {
    areEven.push(ages[i]);
  } else if(ages[i] % 2 != 0) {
    areOdd.push(ages[i]);
  } else if((ages[i] % 2 == 0) && (ages[i] % 3 == 0)) {
    divisibleByMultiplesOfTwoAndThree.push(ages[i]);
  } else {
    others.push(ages[i]);
  }
}
console.log(areEven);
console.log(areOdd);
console.log(divisibleByMultiplesOfTwoAndThree);
console.log(others);


var grades = [[80,87,73], [83,89,94], [95,72,88]];
var total = 0;
var average = 0.0;
for (var row = 0; row < grades.length; ++row) {
for (var col = 0; col < grades[row].length; ++col) {
total += grades[row][col];
}
average = total / grades[row].length;
console.log("Student " + parseInt(row+1) + " average: " +
average.toFixed(2));
total = 0;
average = 0.0;
}

const power = function(base, exponent) {
  let result = 1;
  for(let count=0; count<exponent; count++) {
    result*=base;
  }
  return result;
}
console.log(power(2, 10));

let x = 10;
if(true) {
  let y = 20, z = 30;
  console.log(x+y+z);
}
// console.log(y);
console.log(x+z);

greet();
function greet() {
  console.log("How are you?");
}

const power = (base, exponent) => {
  let result = 1;
  for(let count = 0; count<exponent; count++) {
    result*=base;
  }
  return result;
}
power(3,5);


function isEven(x) {
  if(x==1) {
    return false;
  } else if(x==0) {
    return true;
  } else {
    return isEven(x-2);
  }
}
isEven(0);
isEven(1);
isEven(13);
isEven(18);
isEven(50);
isEven(75);


function countBs(x) {
  let stringLength = x.length, count = "";
  for(let i=0; i<stringLength; i++) {
    if(x[i]=="B") {
      count+="B";
    }
  }
  let result = count.length;
  return result;
  if(result==0) {
    return 0;
  }
}
countBs("BadBlood");
countBs("BaBy");
countBs("Days");


function min(a,b) {
  let base = 1;
  if(a-base > b-base) {
    return b;
  } else if(a-base < b-base) {
    return a;
  } else {
    console.log("Both values are equal.");
  }
}
min(-3,-10);
min(8,22);
min(7,7);
min(5,3);

let x = 1;
for(let i=0; x<100; i++) {
  if((x%3==0)&&(x%5!=0)) {
    console.log("Fizz");
  } else if((x%3!=0)&&(x%5==0)) {
    console.log("Buzz");
  } else {
    console.log(x);
  }
  x+=1;
}


let x = 1;
for(let i=0; x<100; i++) {
  if((x%3==0)&&(x%5!=0)) {
    console.log("Fizz");
  } else if((x%3!=0)&&(x%5==0)) {
    console.log("Buzz");
  } else if((x%3==0)&&(x%5==0)) {
    console.log("FizzBuzz");
  } else {
    console.log(x);
  }
  x+=1;
}


// let x = "#";
// for(let i=0; x.length<8; i++) {
//   console.log(x);
//   x+="#";
// }

let x = "#";
for(let i=0; i<7; i++) {
  console.log(x);
  x+="#";
}


let odd = " #", even = "# ", size = 1;
for(let i=0; i<8; i++) {
  if(size%2==0) {
    for(let m=0; m<3; m++) {
      even+="# ";
    }
    console.log(even);
  } else {
    for(let n=0; n<3; n++) {
      odd+=" #";
    }
    console.log(odd);
  }
  size+=1;
}

let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
// → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(". "));
// → Secretarybirds. specialize. in. stomping
console.log("LA".repeat(3));


let ask = "Who you be?";
let outlet = ask.split(",");
console.log(outlet);

console.log("la".repeat(4));

let lastWords = "Yesterday wasn't a good day.";
// let outcome = lastWords.trim();
// console.log(outcome);
console.log(lastWords.trim());


let kids = ["David", "Toye", "Eric", "Wemimo", "Frida", "Precious", "Seye", "Goke", "Amira", "Raymond"];
let adults = ["Kemi", "Mayowa", "Moyo", "Christopher", "Daniel", "Joseph"];
kids.concat(adults);
// console.log(kids.concat(adults));
// kids.splice(2,6);
// kids.slice(3,5);
// console.log(kids);


//Creating an object using an object constructor
function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.available = function() {
    return this.rooms - this.booked;
  };
}
var hotel1 = new Hotel("Leisure Spring", 456, 208);
hotel1;
console.log(hotel1.available());
alert(hotel1.name+" has "+hotel1.rooms+" rooms of which "+hotel1.booked+" rooms are already taken. Therefore "+hotel1.available()+" rooms are available currently. Thanks.")
var hotel2 = new Hotel("Royal Continental", 800, 468);
hotel2;
alert(hotel2.available());
alert(hotel2.name+" has "+hotel2.rooms+" rooms of which "+hotel2.booked+" rooms are already taken. Therefore "+hotel2.available()+" rooms are available currently. Thanks.");


//Creating an object using a literal
var hotel = {};
hotel.name = "Zara Guest House";
hotel.rooms = 430;
hotel.booked = 205;
hotel.available = function () {
  return this.rooms - this.booked;
}
console.log(hotel);
alert(hotel.available());
alert(hotel.name+" has "+hotel.rooms+" rooms of which "+hotel.booked+" rooms are already taken. Therefore "+hotel.available()+" rooms are available currently. Thanks.");
hotel.manager = "Adigun Alapomeji";
hotel.location = "Osogbo Southwest";
delete hotel.location;
console.log(hotel);

function showSize() {
  var width = this.innerWidth;   // the global "this" refers to the window object
  var height = this.innerHeight;
  return [width, height];
}
showSize();  // [824, 625]


var width = 405; //variales havig a gloal scope automatically becomes a property of the global window object
var height = 740;
function showSize() {
  return [this.width, this.height]; //the showSize function has become a method to the global window object
}
showSize();  // [405, 740]

var scale = {
  length: 305,
  breadth: 218,
  area: function() {
    return this.length * this.breadth;
  }
}
alert("The area of the rectangular floor with a width of "+scale.breadth+"m and a length of "+scale.length+"m is "+scale.area()+"square metre.");

//An array in an object
let cascades = {
  days: [12, "Friday", "Shade"],
  guage: true,
  gamer: function() {
    alert(this.days[2]+" is a winner!");
    return;
  }
}
cascades.gamer();
console.log(cascades.days[2]);


//A object in an array
let models = ["rocks", true, "leader", "Adeoye Ruka", {name: "David", meal: false, wage: 35000, greet: () => alert("You are welcome. "+models[4].name+".")}];
models[4].greet();

var today = new Date();
// alert(today);
// console.log(today.getHours());
// console.log(today.getMilliseconds());
(function displayDayOfTheWeek() {
  var today = new Date();
  today.getDay();
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  alert(`Today is ${days[today.getDay()]}.`);
  return;
}());
// console.log(today.getDay());
// console.log(today.getDate());

alert(new Date('1998 May 16'));
alert(new Date('1998 05 16'));

Math.floor(Math.random()*8) + 1; //Generating a random number from 1 to 8

let reader = "This is absolutely incredible.";
// alert(`The number of characters in this statement is ${reader.length}...including the spaces.`);
// alert(`The character at the 17th position is "${reader.charAt(17)}".`);
alert(`I can rewrite this as "${reader.replace("absolutely", "")}"`);
console.log(reader.substring(7, 18));
console.log(reader.substring(18, 29));
alert(`The character "a" first occured at position ${reader.indexOf("a")}.`);
alert(`The character "i" lastly occured at position ${reader.lastIndexOf("i")}.`);

(function birthdayGreetings() {  //An IIFE that asks for your birthday and greets you based o the date
  var askDate = prompt('Enter your birthdate using the format(YYYY-MM-DD): ');
  var birthday = new Date(askDate);
  var birthdayInMilliseconds = birthday.getTime();
  var todayInMilliseconds = new Date().getTime();
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  if(birthdayInMilliseconds > todayInMilliseconds) {
    alert(`Happy birthday in advance! I pray that ${days[birthday.getDay()]} will be a day full of fun for you.`);
    return;
  } else if (birthdayInMilliseconds < todayInMilliseconds) {
    alert(`Happy birthday in arrears! I believe you enjoyed that "${days[birthday.getDay()]}".`);
    return;
  } else {
    alert(`Happy birthday to you! Enjoy your day.`);
    return;
  }
}());

(function guessNumber() {//This is a simple depiction of a dice game
  var inputNumber = prompt('Enter a number from 1 to 6: ');
  var convertedInput = Number(inputNumber);
  var guessedNumber = Math.floor(Math.random() * 6) + 1;
  // alert(guessedNumber);
  if(convertedInput === guessedNumber) {
    alert(`Wow! You guessed right. The dice rolled ${guessedNumber}.`);
    return;
  } else {
    alert(`You are wrong. Your ${convertedInput} doesn't tally with ${guessedNumber} which the dice rolled. Try again.`);
    return;
  }
}());


(function sumAndTimes() {
  var ask = prompt('Provide a positive number greater than 0: ');
  var askOperation = prompt("Enter an operation either multiplication or addition: ");
  var input = Number(ask);
  let multiplicationResult = [];
  let additionResult = [];
  if((askOperation === "multiplication")||(askOperation === "Multiplication")||(askOperation === "MULTIPLICATION")||(askOperation === "*")) {
    for(let i=1; i<13; i++) {
      multiplicationResult.push(i*input);
    }
    alert(multiplicationResult);
    return;
  } else if((askOperation === "addition")||(askOperation === "Addition")||(askOperation === "ADDITION")||(askOperation === "+")) {
    for(let i=0; i<11; i++) {
      additionResult.push(i+input);
    }
    alert(additionResult);
    return;
  } else {
    alert("You provided the wrong operation.");
    return;
  }
}())


(function performOnArrayItems() {
  let arr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let upperCaseResult = [];
  let stringLengthResult = [];
  let sum = 0;
  for(let i=0; i<arr.length; i++) {
    upperCaseResult.push(arr[i].toUpperCase());
    stringLengthResult.push(arr[i].length);
  }
  alert(upperCaseResult);
  alert(stringLengthResult);
  for(let i=0; i<stringLengthResult.length; i++){
    sum += stringLengthResult[i];
  }
  alert(`The ${arr.length} months of the year consists of a total of ${sum} characters.`);
  return;
}())

{//TDZ starts
  function greet() {
    console.log(name);
  }

//Temporal Dead Zone

  let name = "Deji";  //TDZ ends
  greet();
}

let name = "Deji";
function greet() {
  console.log(name);
  }
  greet();

var world = "earth";
{
  let world = 'aye';
  console.log(world);  //aye
}
console.log(world);  //earth

for(var i=0; i<5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 3000);
}

for(let i=0; i<5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 3000);
}

const deals = [12, 7, 80, 45];
for(let deal of deals) {
  console.log(deal);  //12 7 80 45
}
for(const deal of deals) {
  console.log(deal);  //12 7 80 45
}

const you = "Joke";
you = "Korede";
console.log(you);  //TypeError

for(let i=0; i<5; i++) {
  console.log(i);  //0 1 2 3 4
}

for(const i=0; i<5; i++) {
  console.log(i);  //Output is 0 and TypeError because the constant value is immutable
}

const details = {name: 'Elisha'};
details.name = "Dayo";
console.log(details);  //{name: 'Dayo'}

const details = Object.freeze({name: 'Elisha'});  //The Object.freeze() method makes the immutable
details.name = "Dayo";
console.log(details);  //{name: 'Elisha'}

const dailies; //Uncaught Syntax Error

