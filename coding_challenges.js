console.log('---Calculate the sum of numbers from 1 to 10---');
let sum = 0;
for (let i = 1; i < 11; i++) {
  sum += i;
}
console.log(sum); //55
//OR
function sumAll(num) {
  if (num == 0) { //Base Case
    return 0;
  } else { //Recursive Case
    let newNum = num - 1;
    return num + sumAll(newNum)
  }
}
sumAll(10); //55

console.log('---Calculate 10!---');

function factorial(num) {
  if (num == 0) { //Base Case
    return 1;
  } else { //Recursive Case
    let newNum = num - 1;
    return num * factorial(newNum);
  }
}
factorial(10);
//OR
function factorial(x) {
  let base = 1;
  if (x == 0) {
    return 1;
  } else {
    for (let i = x; x > 0; x--) {
      base *= x;
    }
    return base;
  }
}
factorial(10);

console.log('---Calculate the sum of even numbers greater than 10 and less than 30---');
let sum = 0;
for (let i = 12; i < 30; i += 2) {
  sum += i;
}
console.log(sum); //180
//OR
class Stack {
  constructor() {
    this.datastore = []; //This empty array serves as a uderlyig data structure of the stack
    this.top = 0; //This idicates the top of the stack ad determies the positio i the uderlyig array i which a ew elemet will e placed or stored
  }

  push(data) {
    this.datastore[this.top] = data; //Places the data ito the curret top positio
    this.top++; //This ssigs a ew top positio
  }

  pop() {
    return this.datastore[--this.top];
  }

  peek() {
    return this.datastore[this.top - 1];
  }

  length() {
    return this.top;
  }

  clear() {
    this.top = 0;
  }

  empty() {
    return this.top == 0;
  }

}
let stack = new Stack();

function sumEven(low, top) {
  for (let i = low + 2; i < top; i += 2) {
    stack.push(i);
  }
  let output = 0;
  while (stack.length() > 0) {
    output += stack.pop();
  }
  return output;
}
sumEven(10, 30); //180


console.log('---Calculate the sum of numbers in an array of numbers---');

function sumArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
sumArray([12, 73, 8, 51, 90, 44, 67, 1973]); //2318
//OR
function sumArray(arr) {
  if (arr.length == 1) {
    return arr[0];
  } else {
    let arrLength = arr.length;
    let newArrayIndex = arrLength - 2;
    return arr[arrLength - 1] + sumArray(newArrayIndex);
  }
}
sumArray([12, 73, 8, 51, 90, 44, 67, 1973]);
//OR
class Stack {
  constructor() {
    this.datastore = []; //This empty array serves as an underlying data structure of the stack
    this.top = 0; //This indicates the top of the stack and determines the position in the underlying array in which a new element will be placed or stored
  }

  push(data) {
    this.datastore[this.top] = data; //Places the data into the current top position
    this.top++; //This assigns a new top position
  }

  pop() {
    return this.datastore[--this.top];
  }

  peek() {
    return this.datastore[this.top - 1];
  }

  length() {
    return this.top;
  }

  clear() {
    this.top = 0;
  }

  empty() {
    return this.top == 0;
  }

}
let stack = new Stack();

function sumArray(arr) {
  let arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    stack.push(arr[i]);
  }
  let output = 0;
  while (stack.length() > 0) {
    output += stack.pop();
  }
  return output;
}
sumArray([12, 73, 8, 51, 90, 44, 67, 1973]); //2318

console.log('---Calculate the average of the numbers in an array of numbers---');
function calcAverage(arr) {
  let total = 0, average;
  for(let i=0; i<arr.length; i++) {
    total += arr[i];
  }
  average = total/(arr.length);
  return average;
}
calcAverage([12, 73, 8, 51, 90, 44, 67, 1973]); //289.75

console.log('---Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers---');
function onlyPositives(arr) {
  let outputArr = [];
  for(let i=0; i<arr.length; i++) {
    if(arr[i] > 0) {
      outputArr.push(arr[i]);
    }
  }
  return outputArr;
}
onlyPositives([-10,26,-0.6,37,-298,-345,967,0.642]); //[26, 37, 967, 0.642]

console.log('---Find the maximum number in an array of numbers---');
function findMax(arr) {
  let maxIndex = 0;
  for(let i=1; i<arr.length; i++) {
    if(arr[i] > arr[maxIndex]) {
      maxIndex = i;
    }
  }
  return arr[maxIndex];
}
findMax([12, 73, 8, 51, 90, 44, 67]); //90

console.log('---Create a function that will merge two arrays and return the result as a new array---');
function mergeArray(arr1, arr2) {
  return arr1.concat(arr2);
}
mergeArray([12, 73, 8, 51, 90, 44, 67], [-10,26,-0.6,37,-298,-345,967,0.642]);  //[12, 73, 8, 51, 90, 44, 67, -10, 26, -0.6, 37, -298, -345, 967, 0.642]
//OR
function mergeArray(arr1, arr2) {
  let set1 = new Set(arr1), set2 = new Set(arr2), union;
  union = [...set1, ...set2];
  return union;
}
mergeArray([12, 73, 8, 51, 90, 44, 67], [-10,26,-0.6,37,-298,-345,967,0.642]); // [12, 73, 8, 51, 90, 44, 67, -10, 26, -0.6, 37, -298, -345, 967, 0.642]

console.log('---Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both---');
function symmetricDifference(arr1, arr2) {
  let set1 = new Set(arr1), set2 = new Set(arr2), intersection, union, output;
  if(arr1.length > arr2.length) {
    intersection = new Set(arr1.filter(x => set2.has(x)));
  } else if(arr1.length < arr2.length) {
    intersection = new Set(arr2.filter(x => set1.has(x)));
  } else {
    intersection = new Set(arr1.filter(x => set2.has(x)));
  }
  union = new Set([...arr1, ...arr2]);
  output = [...union].filter(k => !intersection.has(k));
  return output;
}
symmetricDifference([2,4,10,5,3,9], [8,3,7,17,10,48,14,9,26]); // [2, 4, 5, 8, 7, 17, 48, 14, 26]

console.log('---Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second---');
function difference(arr1, arr2) {
  let set1 = new Set(arr1), set2 = new Set(arr2), output;
  output = arr1.filter(x => !set2.has(x));
  return output;
}
difference([2,4,10,5,3,9], [8,3,13,26,9]); //[2, 4, 10, 5]

console.log('---Reverse an array---');
function reverseArray(arr) {
  let outputArr = [];
  if(arr.length < 2) {
    return arr;
  } else {
    for(let i=arr.length-1; i>-1; i--) {
      outputArr.push(arr[i]);
    }
    return outputArr;
  }
}
reverseArray([1,3,4,7]); //[7, 4, 3, 1]

console.log('---Reverse a string---');
function rotateString(str) {
  let outputString = '';
  if(str.length < 2) {
    return str;
  } else {
    for(let i=str.length-1; i>-1; i--) {
      outputString += str[i];
    }
    return outputString;
  }
}
rotateString('DAYO'); //'OYAD'

console.log('---Calculate the sum of digits of a positive integer number---');
function sumOfDigits(num) {
  let stringified = String(num), total = 0;
  if(stringified.length < 2) {
    return num;
  } else {
    for(let k=0; k<stringified.length; k++) {
      total += Number(stringified[k]);
    }
    return total;
  }
}
sumOfDigits(6); //6
sumOfDigits(246); //12

console.log('---Print the first 100 prime numbers---');
for(let num=2; num<101; num++) {
  
}


console.log('---Determine if a number is prime or not---');
function isPrime(num) {
  if(num <= 1) {
    return false;
  } else {
    for(let i=2; i<num-1; i++) {
      if(num % i == 0) return false;
    }
    return true;
  }
}
isPrime(11);