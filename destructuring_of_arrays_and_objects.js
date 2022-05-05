const restaurant = {
  name: 'Yakoyo Food Canteen',
  locations: [{state: 'Osun', number_of_outlets: 10}, {state: 'Oyo', number_of_outlets: 8}, {state: 'Lagos', number_of_outlets: 6}, {state: 'Rivers', number_of_outlets: 8}, {state: 'Ondo', number_of_outlets: 4}, {state: 'Imo', number_of_outlets: 7}],
  working_days: {
    weekday: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    duration: '8:00am - 21:00pm',
    weekend_duration: '8:00am - 19:00pm'
  },
  delicacies: [
    {meals: ['Iyan', 'White Rice', 'Amala', 'Eba', 'Semo', 'Fried Plantain', 'Yam', 'Beans', 'Porridge', 'Fried Rice', 'Jollof Rice', 'Coconut Rice'], 
  soups: ['Efo Riro', 'Ewedu', 'Oha', 'Okro', 'Banga', 'Egusi', 'Edika-ikong', 'Afang'],
others: ['Fish', 'Catfish', 'Goat Meat', 'Bush Meat', 'Ponmo', 'Cow Meat']}
  ],
  years_of_existence: 15,
  revenue: '15000000Naira',
  networth: '35000000Naira'
}

//Object Destructuring
const {weekday: getWeekdays, duration: getDuration} = restaurant['working_days'];  
// console.log(getWeekdays); //['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// console.log(getDuration); //8:00am - 21:00pm

// Array Destructuring
const [getMeals = 'poundo', getSoups = 'egusi', ] = restaurant.delicacies[0].meals;
const [getMeals2, , , , ,getSoups2, , ] = restaurant.delicacies[0].soups;
const [getSoups3, ,getMeals3, , , ] = restaurant.delicacies[0].others;
console.log(getMeals2, getSoups2); //Efo Riro Egusi
console.log(getMeals, getSoups); //Iyan White Rice
console.log(`Sir. You ordered for ${getMeals} and ${getMeals2} with ${getMeals3} while your woman ordered for ${getSoups} and ${getSoups2} with ${getSoups3}.`);
alert(`Sir. You ordered for ${getMeals} and ${getMeals2} with ${getMeals3} while your woman ordered for ${getSoups} and ${getSoups2} with ${getSoups3}.`);
// Sir. You ordered for Iyan and Efo Riro with Goat Meat while your woman ordered for White Rice and Egusi with Fish.

function getNames(obj) {
  const {obj1, obj2} = obj;
  console.log(obj1.firstName, obj2.lastName);
  return;
}
let input = {firstName: 'Kemi', lastName: 'Arowolo'};
getNames(input);

let concater = (accumulator, x) => accumulator + x;
function stringConcat(arr) {
  return arr.reduce(concater,'');
}
stringConcat([12, 90, 5, 306]);  //12905306

const detectVote = x => x.voted == true;
function totalVotes(arr) {
  return `The total number of voters are ${arr.filter(detectVote).length}`;
};
var voters = [
  {name: 'Bob', age: 30, voted: true},
  {name: 'Jake', age: 32, voted: true},
  {name: 'Kate', age: 25, voted: false},
  {name: 'Sam', age: 20, voted: false},
  {name: 'Phil', age: 21, voted: true},
  {name: 'Ed', age: 55, voted: true},
  {name: 'Tami', age: 54, voted: true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
];
totalVotes(voters);  //'The total number of voters are 7'

let colors = ['white', 'blue', 'yellow', 'black', 'red', 'green'];
const [firstColor, secondColor, ...otherColors] = colors;
console.log(firstColor, secondColor, otherColors);

const classes = {
  firstHour: "Ethics",
  secondHour: "Programming",
  thirdHour: "Biology"
}
const goToSecondClass = ({ firstHour, secondHour, thirdHour } = classes) => `Time to go to ${secondHour} class!`;
goToSecondClass();  //'Time to go to Programming class!'


const classes = {
  firstHour: "Ethics",
  secondHour: "Programming",
  thirdHour: "Biology"
}
const goToThirdClass = ({ thirdHour: third } = classes) => `Time to go to ${third} class!`;
goToThirdClass();  //'Time to go to Biology class!'

// Exhibiting a destructuring of an object
const detail = {
  firstName: 'David Williams',
  age: 24,
  spouse: 'Joy Oliver',
  family: {
    father: 'Mr. Femi Williams',
    mother: 'Mrs. Toriola Dennis Williams',
    siblings: 6
  }
}
// Destructuring the nested object gives me the whole nested object and its contents
const { family, family: { father, mother, siblings } } = detail;
console.log(family); //{father: 'Mr. Femi Williams', mother: 'Mrs. Toriola Dennis Williams', siblings: 6}
const { firstName, age: currentAge, spouse: girlfriend_name, family: { siblings } } = detail;
console.log(`${firstName} is ${currentAge}years old. His girlfriend is ${girlfriend_name}. He has ${siblings} siblings.`); //David Williams is 24years old. His girlfriend is Joy Oliver. He has 6 siblings.

// Using object destructing to find the length of a string
const { length } = 'Michael';
console.log(length); //7

// Exhibiting a destructuring of an array
const monthlyIncome = [15000, 17400, 18000, 11050, 20010];
const [, getIncome, , getInome2, ] = monthlyIncome;
console.log(getIncome, getInome2); //17400 11050

