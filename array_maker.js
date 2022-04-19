console.log('---Creating an array and traversing through it  O(n)---');
var size = prompt('Enter the length of your desired array: ');
let arr = [];
for(let i = 0; i < size; i++) {
  if(arr.length <= size) {
    let input = prompt('Enter any array element of your choice: ');
    arr[i] = input;
  } else {
    alert('The maximum size of the array which you created has been exceeded!');
  }
}
console.log(arr);
alert(arr);


console.log('---Inserting an element into an array(in the middle, front or end)  O(n)---');
var nameOfStudents = ['Femi', 'Lola', 'Joshua', 'Victoria', 'Pelumi'];
var newElem = prompt('Enter an element to be inserted: ');
var newPosition = prompt('Enter the position at which the element should be inserted: ');
let realIndex = newPosition - 1;
for(let i = nameOfStudents.length - 1; i >= realIndex; i--) {
  nameOfStudents[i+1] = nameOfStudents[i]
  if(i == realIndex) {
    nameOfStudents[realIndex+1] = nameOfStudents[realIndex];
    nameOfStudents[realIndex] = newElem;
  }
}
// nameOfStudents.length++;
console.log(nameOfStudents); 
alert(`Your array now contains ${nameOfStudents.length} elements.`);


console.log('---Deleting an array element---');
var nameOfCars = ['Toyota', 'Ford', 'Lexus', 'Mercedez', 'Honda', 'BMW', 'Hyundai', 'KIA', 'Nissan', 'Jaguar', 'Ferrari', 'Peugeot'];
alert(nameOfCars);
var elem = prompt(`Enter the car brand position which you don't like in the list above: `);
var delIndex = elem - 1;
for(let i = delIndex; i < nameOfCars.length - 1; i++) {
  nameOfCars[i] = nameOfCars[i+1];
}
nameOfCars.length--;
console.log(nameOfCars);


console.log('---Creating an array of only 20 elements---');
//Declaring an array and inserting an element into it at any position(as an unsorted array)
//The time complexity of inserting a element into an array is determined by if the array is sorted or unsorted
//If the array is unsorted, its time complexity is O(1) aka 'Constant Time'
//If the array is sorted, its time complexity is O(n) because we have to iterate through each element of the array
var size = Number(prompt(`Declare the array size of your choice(not more than 20 elements): `)); //User enters the number of elements which he or she wants
var trueArr = []; //Creates an empty array in the background
var trueArrLength = 20; 
trueArr.length = trueArrLength; //The length of the empty array in the background is set to 20
if(size <= trueArrLength) { //If the number of elements prescribed by  user is less than the length of the array in the background
  for(let i=0; i<size; i++) { //Iterating through the array based on the number of elements which the user prescribed
    let elemRequest = prompt('Enter an array element of your choice: '); //User enters any array element in every loop or iteration
    trueArr[i] = elemRequest; //Each element entered is assigned to a position in the User's array(follows an index)
  }
  console.log(trueArr); //The user filled-array(with the empty elements yet to be filled) is displayed after the iteration is completed
  alert(trueArr);


  let insElem = prompt('Insert any element of your choice: '); //User enters any array element
  let elemPosition = Number(prompt('Indicate the position of the incoming element: '));  //Indicates the position at which the elemennt should be inserted
  if(elemPosition > size) { //If the position entered is outside the current array's size
    alert(`Invalid Input`);
  } else {
    let realIndex = elemPosition - 1; //Subtract 1 from the position provided to get an array index for the incoming element
    for(let k=size-1; k>=realIndex; k--) {
      trueArr[k+1] = trueArr[k];
      if(k == realIndex) {
      trueArr[realIndex+1] = trueArr[realIndex];
      trueArr[realIndex] = insElem;
    }
  }
  size++;
  console.log(trueArr);
  alert(trueArr);
  }
  

  let delPosition = Number(prompt('Enter the position of the element that you want to delete: '));
  // let delIndex = delPosition - 1;
  for(let m = delPosition; m<size; m++) {
    trueArr[m-1] = trueArr[m];
  }
  size--;
  console.log(trueArr);
  alert(trueArr);


} else {
  alert(`Invalid Input. Try again!`);
}


console.log('---How to Create Multi-Dimensional Array in JavaScript---');
var sizeRow = Number(prompt('Enter the size of row: '));
var sizeCol = Number(prompt('Enter the size of column: '));
var arr = []; //Create a parent array
// arr.length = sizeRow * sizeCol;
for(let i=0; i<sizeRow; i++) { //Looping through the parent array
  let inArr = [];
  arr[i] = inArr;
  for(let j=0; j<sizeCol; j++) { //Looping through the child array
    var elem = prompt(`Enter an element of your choice: `);
    inArr[j] = elem;
  }
}
console.log(arr);
alert(arr);

// var arr = [];
// for(let i=0; i<2; i++) {
//   let inArr = [];
//   arr[i] = inArr;
//   for(let k=0; k<3; k++) {
//     let elem = prompt('Element: ');
//     inArr[k] = elem;
//   }
// }
// console.log(arr);
// console.log(arr[i][k]);



console.log('---Finding two elements in an array that adds up to a number---');
function guessIndex() {
  let inputArr = [];
  let size = prompt('Declare array size: ');
  inputArr.length = size;

  for(let m=0; m<size; m++) {
    let elem = Number(prompt('Enter an element: '));
    inputArr[m] = elem;
  }
  console.log(inputArr);

  let input = Number(prompt('Enter the probing number: '));
  for(let i=0; i<inputArr.length; i++) {
    for(let k=i+1; k<inputArr.length; k++) {
      if(inputArr[i] + inputArr[k] == input) {
        return [i, k];
      }
    }
  }
  return -1;
}
guessIndex();


console.log('---Implement the array.slice method from scratch---');
var arr = [12, 9, 26, 33, 5, 10, 14, 8, 16, 19, 55, 35, 7, 38, 18];
var copiedArr = [];
var startIndex = Number(prompt('Enter the starting index: '));
var endIndex = Number(prompt('Enter the stopping index: '));
var size = endIndex - startIndex;
if(size) {
  for(let i=startIndex; i<endIndex; i++) {
    // for(let k=0; k<size; k++) {
      copiedArr.push(arr[i]);
    // }
  }
  console.log(copiedArr);
} else {
  console.log(arr);
}

console.log('---Find the median of a sorted array---');
var arr = [5, 8, 10, 13, 12, 19];
if(arr.length % 2 != 0) {
  let index = Math.floor(arr.length / 2);
  let output = arr[index];
  console.log(output);
} else {
  let realIndex = arr.length / 2, preIndex = realIndex - 1;
  let output = (arr[realIndex] + arr[preIndex]) / 2;
  console.log(output);
}


console.log('---Create a 4x5 matrix starting from 1 to 20---');
let arr = [], input = 1;
for(let i=0; i<4; i++) {
  let inArr = [];
  arr[i] = inArr;
  for(let k=0; k<5; k++) {
    inArr[k] = input;
    input++;
  }
}
console.log(arr);


let arr = [], input = 20;
for(let i=0; i<4; i++) {
  let inArr = [];
  arr[i] = inArr;
  for(let k=0; k<5; k++) {
    inArr[k] = input;
    input--;
  }
}
console.log(arr);

let arr = [[1,2,3,4,5], [6,7,8,9,10], [11,12,13,14,15], [16,17,18,19,20]];
for(let i=0; i<arr.length; i++) {
  let x = arr[i];
  for(let k=0; k<x.length; k++) {
    console.log(x[k]);
  }
}


connsole.log('----Create a grades object that stores a set of student grades in an object. Provide a function for adding a grade and a function for displaying the student’s grade average.----');
let studentsGrades = {
  Titi: [80, 54, 90, 67, 50],
  Kolade: [90, 83, 42, 71, 54],
  George: [72, 52, 85, 80, 91]
}

function sumAndAverageGrades(arr) {
  let sum = 0;
  for(let i=0; i<arr.length; i++) {
    sum+=arr[i];
  }
  let averageGrade = Math.ceil(sum/(arr.length));
  return sum, averageGrade;
}
sumAndAverageGrades(studentsGrades.Titi);
sumAndAverageGrades(studentsGrades.Kolade);
sumAndAverageGrades(studentsGrades.George);
console.log('--- OR ---');
for(let item in studentsGrades) {
  sumAndAverageGrades(studentsGrades[item]);
}


console.log('----Store a set of words in an array and display the contents both forward and backward.----');
let words = ['Kemi', 'Femi', 'Lola', 'Eyitayo', 'Titilope', 'Adegoke', 'Pelumi'];
for(let i=0; i<words.length; i++) {
  console.log(words[i]);
}
for(let m = words.length - 1; m>-1; m--) {
  console.log(words[m]);
}


console.log('----Create an object that stores individual letters in an array and has a function for displaying the letters as a single word.----');
let letters = {
  first: 'p', second: 'h', third: 'o', fourth: 't', fifth: 'o', sixth: 's', seventh: 'y', eight: 'n', ninth: 't', tenth: 'h', eleventh: 'e', twelvth: 's', thirteenth: 'i', fourteenth: 's'
}

function formWord(arr) {
  let word = '';
  for(let i=0; i<arr.length; i++) {
    word+=arr[i];
  }
  return word;
}

let i=0, sampleArr = [];  //Dynamic Array
for(let item in letters) {
  sampleArr[i] = letters[item];
  i++;
}

formWord(sampleArr);  //'photosynthesis'


console.log('----FIND COMMON ELEMENTS IN K-SORTED ARRAYS----');
var arr1 = [4, 5, 7, 10, 19, 28, 45];
var arr2 = [5, 6, 10, 17, 20, 28, 36, 45, 49, 55, 80];
var arr3 = [5, 10, 17, 28, 30, 45, 77, 95];
let arr = [];
for(let i=0; i<arr3.length; i++) {
  let x = arr3[i];
  for(let k=0; k<arr2.length; k++) {
    let y = arr2[k];
    for(let m=0; m<arr1.length; m++) {
      if((y == arr1[m]) && (x == arr1[m])) {
          arr.push(arr1[m]);
      }
    }
  }
}
console.log(arr);