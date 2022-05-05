// The spread operator '...' is used to unpack all the items in an array, a set and an object(property and value)
var names = ['Harry', "James", "Gbenga", "Olatunde"];
var newcomers = ["Victoria", "Dayo", "George", "Laitan", "Kenneth", "Pelumi"];
var results = [...names, ...newcomers];  //Shallow copying to produce a new array
console.log(results);
console.log(...newcomers);

console.log('---Using Destructuring To Write My Full Name---');
let abbr = ['Omotosho', 'E.'];
const outputArr = [...abbr, 'Oluwasina'];
// Initialize a variable 'fullName' to be an empty string
let fullName = '';
// Loop through the newly created array 'outputArr'
for(let i=0; i<outputArr.length; i++) {
    // If the current index is the last index of the array
    if(i == outputArr.length - 1) {
        // Add only the value in that index to the string 'fullName'
        fullName += outputArr[i];
    } else {
        // Add the value in the current index to the string 'fullName'
        fullName += outputArr[i];
        // Add a space after the value has been added to the string 'fullName'
        fullName += ' ';
    }
}
console.log(`My full name is: ${fullName}.`); //My full name is: Omotosho E. Oluwasina.

let str = "Fredrick Lord Lugard";
console.log([...str].length); //20

const user = {
    id: 'dave_224',
    email: 'davidgee@gmail.com',
    phone: '08153822019'
}, userAge = {
    age: 26
};
const updatedUserDetail = {...user, ...userAge};
console.log(updatedUserDetail); //{id: 'dave_224', email: 'davidgee@gmail.com', phone: '08153822019', age: 26}
console.log(user); //{id: 'dave_224', email: 'davidgee@gmail.com', phone: '08153822019'}
console.log(userAge); //{age: 26}

// Using the spread operator in a function
let arr = [3,6,8];
const grandProduct = (a, m, c) => a*m*c;
grandProduct(...arr); //144

// Using the spread operator on a set
let listOfNames = new Set();
listOfNames.add('Jumoke');
listOfNames.add('Toyese');
listOfNames.add('James');
listOfNames.add('Jumoke');
listOfNames.add('David');
listOfNames.add('Sola');
let arrayOfNames = [...listOfNames];
console.log(arrayOfNames); //['Jumoke', 'Toyese', 'James', 'David', 'Sola']