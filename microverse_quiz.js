console.log('---Sales Match---');
function findPair(n, ar) {
  let compareFunc = (a, b) => a-b, outputArr = [], i=0, int;
  ar.sort(compareFunc);
  while(i<n) {
    if(ar[i] == ar[i+1]) {
      outputArr.push(ar[i]);
      i+=2;
    } else {
      i+=1;
    }
  }
  console.log(outputArr);
  int = outputArr.length;
  return int;
}
findPair(9, [10,20,20,10,10,30,50,10,20]); //3
findPair(7, [1,2,1,2,1,3,2]); //2


let arr = [2,5,1,7,9,26,8];
let compareFunc = (a,b) => {
  if(a > b) {
    return 1;
} else if(b > a) {
  return -1;
} else {
  return 0;
}
}
console.log(arr.sort(compareFunc));

let arr = [2,5,1,7,9,26,8];
let compareFunc = (a,b) => b - a;
console.log(arr.sort(compareFunc));


console.log('---Grading Students---');
function roundGrade(grade) {
  let multis=[], scores=[];
  for(let i=38; i<101; i++) {
     scores.push(i);
     if((i>38) && (i%5 == 0)) {
       multis.push(i);
     }
  }
  if(scores.includes(grade) == false) {
    return grade;
  } else if((scores.includes(grade)) && (multis.includes(grade+1))) {
    return grade+1;
  } else if((scores.includes(grade)) && (multis.includes(grade+2))) {
    return grade+2;
  } else {
    return grade;
  }
}
roundGrade(29);


console.log('---Using The Naive Approach---');
function same(arr1, arr2) {
  let correctIndex;
  if(arr1.length != arr2.length) {
    return false;
  } else {
    for(let i=0; i<arr1.length; i++) {
      correctIndex = arr2.indexOf(arr1[i]**2);
      if(correctIndex < 0) {
        return false;
      }
      console.log(arr2);
      arr2.splice(correctIndex, 1);
    }
    return true;
  }
}
same([1,2,3,6], [4,36,1,9]); //true
same([1,2,3,5], [4,1,9]); //false
same([1,2,1], [4,4,1]); //false


function isUnique(arr) {
  if(arr.length == 0) {
    return 0;
  } else {
   for(let i=0; i<arr.length; i++) {
     if(arr[i]==arr[i+1]) {
       arr.splice(i+1, 1);
     }
   }
   return arr.length;
  }
}
isUnique([-2,-1,-1,0,1]); //4


function isUnique(arr) {
  if(arr.length === 0) return 0;
  else {
    let i=0;
    for(let j=1; j<arr.length; j++) {
      if(arr[i] !== arr[j]) {
        i++;
        arr[i] = arr[j];
      }
    }
    console.log(arr);
    console.log(`There are ${i+1} unique elements in ${arr}`);
    return i+1;
  }
}
isUnique([1,2,3,4,4,4,7,7,12,12,13]); //7
isUnique([-2,-1,-1,0,1]); //4


console.log('---Finding Unique Elements In An Array Using The Set Method---');
let outSet = new Set([-2,-1,-1,0,1]), uniqueSet = Array.from(outSet);
console.log(uniqueSet);
// OR
let newSet = new Set([1,2,3,4,4,4,7,7,12,12,13]), outputArr = [...newSet];
console.log(outputArr);


function maxSubArraySum(arr, num) {
  if(num > arr.length) {
    return 'Invalid Input';
  } else if (num === 1) {
    return Math.max(...arr);
  } else {
    let maxSum = -Infinity; //Let 'maxSum' be negative infinity assuming that all array elements are negative values
    for(let i=0; i<=arr.length-3; i++) {
      let tempSum = arr[i]; //Assume that 'tempSum' is the value of the current index
      for(let k=i+1; k<i+num; k++) {//Looping through the next two elements that are next to the current 'i' index
        tempSum += arr[k];
      }
    if(tempSum > maxSum) {
      maxSum = tempSum;
    }
}
    return maxSum;
  }
}
maxSubArraySum([2,6,9,2,1,8,5,6,3],3); //19
maxSubArraySum([1,2,5,2,8,1,5],4); //17
maxSubArraySum([4,2,1,6],1); //6
maxSubArraySum([4,2,1,6,2],4); //13
maxSubArraySum([],4); //'Invalid Input'


function sameFrequency(num1, num2) {
  let str1 = String(num1), str2 = String(num2), obj1 = {}, obj2 = {};
  if(str1.length !== str2.length) {
    return false;
  }
  for(let char of str1) {
    obj1[char] = (obj1[char] || 0) + 1;
  }
  for(let char of str2) {
    obj2[char] = (obj2[char] || 0) + 1;
  }
  console.log(obj1, obj2);
  for(let key in obj1) {
    if(!(key in obj2)) {
      return false;
    } else if(obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}
sameFrequency(34, 14); //false
sameFrequency(182, 281); //true
sameFrequency(22, 222); //false
sameFrequency(3589578, 5879385); //true


function areThereDuplicates(...arr) {
if(arr.length === 0 || !arr) {
  return null;
}
let obj = {};
for(let val of arr) {
  obj[val] = (obj[val] || 0) + 1;
}
console.log(obj);
for(let key in obj) {
  if(obj[key] > 1) {
    return true;
  }
}
return false;
}
areThereDuplicates('a','b','c','a'); //true
areThereDuplicates(1,2,3); //false
areThereDuplicates(1,2,2); //true


function averagePair(arr, target) {
  if(!target || !arr) {
    return null;
  }
  let leftIndex = 0, rightIndex = arr.length-1;
  while(leftIndex < rightIndex) {
    let average = (arr[leftIndex]+arr[rightIndex]) / 2;
    if(average === target) {
      console.log([arr[leftIndex], arr[rightIndex]]);
      return true;
    } else if(average > target) {
      rightIndex--;
    } else {
      leftIndex++;
    }
  }
  return false;
}
averagePair([1,2,3], 2.5); //true
averagePair([1,3,3,5,6,7,10,12,19], 8); //true
averagePair([-1,0,3,4,5,6], 4.1); //false
averagePair([], 4); //false


function isSubsequence(str1, str2) {
  if(str1.length > str2.length) {
    return null;
  } else if(!str2.includes(str1)) {
    return false;
  }
    for(let i=0; i<str2.length; i++) {
      for(let j=0; j<str1.length; j++) {
        if((str2[i]==str1[j]) || (str2.includes(str1[j]) && (i>=j))) continue;
      }
    }
    return true;
}
isSubsequence('hello', 'hello  world'); //true
isSubsequence('abc', 'acb'); //false
isSubsequence('abc', 'abracadabra'); //true
isSubsequence('sing', 'sting'); //true



function areOdd(arr){
  let outputArr = [];

  function findOdd(inputArr) {
    if(inputArr.length === 0) {
      return;
    }
    if(inputArr[0] % 2 !== 0) {
      outputArr.push(inputArr[0]);
    }
    return findOdd(inputArr.splice(1));
  }
  findOdd(arr);

  return outputArr;
}
areOdd([1,2,3,4,5,6,7,8,9]); //[1, 3, 5, 7, 9]


console.log('---Exponential Using Recursion---');
function pow(base, expo) {
  if(expo == 0) {
    return 1;
  } else if(expo == 1) {
    return base;
  } else {
    return base * pow(base, expo - 1);
  }
}
pow(2,3);//8
pow(2,4);//16
pow(2,0);//1
pow(3,16);//43046721


console.log('---Factorial Using Recursion---');
function factorial(num) {
  if(num === 0) {
    return 1;
  } else {
    return num * factorial(num-1);
  }
}
factorial(4); //24
factorial(0); //1
factorial(7); //5040


console.log('---Product of Array Using Recursion---');
function productOfArray(arr) {
  if(!arr || arr.length==0) {
    return;
  } else if(arr.length == 1) {
    return arr[0];
  } else {
    return arr[0] * productOfArray(arr.splice(1));
  }
}
productOfArray([1,2,3]);//6
productOfArray([1,2,3,10]);//60


function recursiveRange(num) {
  if(!num) {
    return;
  } else if(num==0) {
    return 0;
  } else if(num==1) {
    return 1;
  } else {
    return num + recursiveRange(num-1);
  }
}
recursiveRange(6); //21
recursiveRange(10); //55


console.log('---Finding The Maximum Sub-Array Sum in an Array Using the Sliding Window Pattern---');
function maxSubArraySum(arr, num) {
  if(num > arr.length) {
    return null;
  }
  let maxSum = 0, tempSum = 0;
  for(let i=0; i<num; i++) {
    tempSum+=arr[i];
  }
  maxSum = tempSum;
  for(let k=num; k<arr.length; k++) {
    tempSum = tempSum-arr[k-num]+arr[k];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
maxSubArraySum([100,200,300,400], 2); //700
maxSubArraySum([1,4,2,10,23,3,1,0,20], 4); //39
maxSubArraySum([2,3,1,2,4,3], 2); //7



function minSubArrayLen(arr, num) {
  let maxSum = 0, tempSum = 0;
  for(let i=0; i<2; i++) {
    tempSum+=arr[i];
  }
  maxSum = tempSum;
  for(let i=2; i<arr.length; i++) {
    tempSum = tempSum-arr[i-2]+arr[i];
    maxSum = Math.max(maxSum, tempSum);
    if(maxSum >= num) {
      return ([arr[maxSum-arr[i]], arr[i]]).length;
    }
  }
  return 0;
}
// minSubArrayLen([2,3,1,2,4,3], 7); //2
minSubArrayLen([1,4,16,22,5,7,8,9,10], 55); //0


function findLongestSubstring(str) {
  let tempSum = 0, maxSum = 0;
  if(!str) {
    return;
  } else if(str.length == 0) {
    return 0;
  }
}


console.log('---Reversing A String---');
function reverse(str) {
  if(str.length == 1) {
    return str;
  } else {
    return reverse(str.slice(1)) + str[0] ;
  }
}
reverse('awesome'); //emosewa

console.log('---Reversing A String---');
function reverse(str) {
  if(typeof str != 'string') {
    return;
  } else if(str.length == 0) {
    return '';
  } else {
    let out='';
    for(let i=str.length-1; i>=0; i--) {
      out+=str[i];
    }
    return out;
  }
}
reverse('rithmschool');//'loohcsmhtir'
reverse(245);//undefined

console.log('---Searching for an Item in an Array Using the Linear Search Algorithm---');
function linearSearch(arr, val) {//This searching algorithm works on both sorted and unsorted array
  for(let i=0; i<arr.length; i++) {
    if(arr[i] === val) {
      return i;
    }
  }
  return -1;
}
linearSearch([3,13,10,2,9,16,5,7,22,1], 5); //6
linearSearch([3,13,10,2,9,16,5,7,22,1], 18); //-1

console.log('---Searching for an Item in an Array Using the Binary Search Algorithm---');
function biSearch(arr, val) {
  let leftPointer = 0, rightPointer = arr.length-1;
  while(leftPointer < rightPointer) {
    let midPointer = Math.floor((leftPointer + rightPointer) / 2); //Find the average of the current left ad right pointers
    if(arr[midPointer] === val) { //Checks if the value at the current middle pointer is equal to the value being searched for
       //  console.log(`${val} is located at ${midPointer+1} position`);
      return midPointer;
    } else if(arr[midPointer] > val) { //Checks if the value at the current middle pointer is greater than the value being searched for
      rightPointer = midPointer - 1;
    } else { //Checks if the value at the current middle pointer is lesser than the value being searched for
      leftPointer = midPointer + 1;
    }
  }
  return -1; //Return '-1' if the value doesn't exist in the array
}
biSearch([1,3,4,5,7,8,9,15,23], 9); //6
biSearch([1,3,4,5,7,8,15,23], 13); //-1


function naivesearch(long, short) {
  let count = 0;
  for(let i=0; i<long.length; i++) {
    for(let j=0; j<short.length; j++) {
      console.log(short[j], long[i+j]);
      if(short[j] !== long[i+j]) {
        console.log('BREAK!');
        break;
      }
      if(j === short.length-1) {
        console.log('FOUND ONE!');
        count++;
      }
    }
  }
  return count;
}
naivesearch('lorie loled', 'lo'); //2
naivesearch('lorie loled', 'lol'); //1
naivesearch('lorie loled', 'pop'); //0


console.log('---Sorting An Array of Strings Based on The String Length---');
function sorted(str1, str2) {
  return str1.length - str2.length;
}
let arr = ['Drey', 'Goose', 'Flows', 'Infinitely', 'Victorious'];
console.log(arr.sort(sorted()));

console.log('---Finding the Number of Occurence of a String in Another---')
function findMatch(str1, str2) {
  let count = 0;
  for(let i=0; i<str1.length; i++) {//Loop the first and longer string
    for(let k=0; k<str2.length; k++) {//Loop the second and shorter string
      if(str2[k] === str1[i+k]) continue; //Use the current index in the shorter string to check the next string in the longer string during the current iteration
      // in the longer string is maintained. If the condition remains true, the inner loop continue
      if(str1[i+k] == str2[str2.length-1]) { //If the last character in the shorter string is found in the longer string during the current iteration in the longer string the count is increased
        count++;
      }
    }
  }
  return count;
}
findMatch('lorie loled', 'lol'); //1
lorie loled
lol   lol



const callBack = x => x%2 !== 0;
function someRecursive(arr, callBack) {
  if(!arr || !callBack) {
    return;
  } else if(arr.length == 1 && callBack) {
    return callBack(arr[0]);
  }
}
someRecursive([3], callBack); //true
someRecursive([4], callBack); //false




const details = {
  lastName: "Omotosho",
  firstName: "Oluwasina",
  birthYear: 1995,
  course: "Civil Engineering",
  higherInstitution: "University of Ibadan",
  age: function() {
    return `${this.firstName} is ${2022 - this.birthYear}years old.`
  },
  higherEducation: function() {
    return `${this.firstName} ${this.lastName} studied ${this.course} at the ${this.higherInstitution}`
  }
}
details.age(); //'Oluwasina is 27years old.'
details.higherEducation();  //Oluwasina Omotosho studied Civil Engineering at the University of Ibadan'
for(let key in details) {
  console.log(`${key}: ${details[key]}`);
}

const obj1 = {
  fullName: "Adewale James",
  age: 23,
  sex: 'Male',
  email: "james_23@gmail.com"
}
const {fullName, sex, school} = obj1;
console.log(fullName, sex, school); //Adewale James Male undefined
obj1.age = 25;
console.log(obj1); //{fullName: 'Adewale James', age: 25, sex: 'Male', email: 'james_23@gmail.com'}
obj1.school = 'Kalakuta University';
console.log(obj1); //{fullName: 'Adewale James', age: 25, sex: 'Male', email: 'james_23@gmail.com', school: 'Kalakuta University'}


console.log('---Working with JavaScript ES6 Class---');
class Human {
  constructor(head, hands, legs) {
        this.head = head;
        this.hands = hands;
        this.legs = legs;
  }

  walks() {
    return `The human walks with his ${this.legs} legs`;
  }

  eats() {
    return `The human eats and chops food with his mouth`;
  }
}
let human1 = new Human(1, 2, 2);
human1.walks(); //'The human walks with his 2 legs'
human1.eats(); //'The human eats and chops food with his mouth'

class Ade extends Human {
  constructor(head, hands, legs, firstName, lastName, siblings, occupation, firm, age) {

    super(head, hands, legs) //Always declare the 'super' keyword before declaring the 'this.propertyNames' below or after it

    this.firstName = firstName;
    this.lastName = lastName;
    this.siblings = siblings;
    this.occupation = occupation;
    this.firm = firm;
    this.age = age;

  }

  isEmployed() {
    if(this.occupation == "" || typeof this.occupation !== 'string') {
      return `${this.firstName} is currently unemployed.`;
    } else {
      return `${this.firstName} is currently employed as a ${this.occupation} at ${this.firm}`
    }
  }
}

let ade1 = new Ade(1, 2, 2,'Adeolu', 'Samuels', 3, '', 'KPMG Globals', 26), ade2 = new Ade(1, 1, 2,'Adeoye', 'Owoyemi', 2, 'Chartered Accountant', 'Rotterdam Financial and Management Consultants', 23);
console.log(ade1); //{head: 1, hands: 2, legs: 2, firstName: 'Adeolu', lastName: 'Samuels', …}
ade1.isEmployed(); //'Adeolu is currently unemployed.'
console.log(ade2); //{head: 1, hands: 1, legs: 2, firstName: 'Adeoye', lastName: 'Owoyemi', …}
ade2.isEmployed(); //'Adeoye is currently employed as a Chartered Accountant at Rotterdam Financial and Management Consultants'
ade1.walks(); //'The human walks with his 2 legs'
ade2.eats(); //'The human eats and chops food with his mouth'


function stringifyNumber(obj) {
  for(let key in obj) {
    if(typeof obj[key] === 'number') {
       String(obj[key]);
    }
  }
  return obj;
}
let test = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      ransom: 66
    }
  }
}
stringifyNumber(test);


function capitalizeWords(arr) {
  let outArr = [];
  if(arr.length <= 1) {
    outArr.push(arr[0].toUpperCase());
    return outArr;
  } else {
    let newArr = arr.splice(1), disp = [];
    return disp.concat(capitalizeWords(newArr));
  }
}
let words = ['i', 'am', 'learning', 'recursion'];
capitalizeWords(words);
//OR
function capitalizeWords(arr) {
  if(typeof arr != 'object') {
    return;
  } else {
    let outArr = [];
    for(let val of arr) {
      outArr.push(val.toUpperCase());
    }
    return outArr;
  }
}
capitalizeWords(5); //undefined
let words = ['i', 'am', 'learning', 'recursion']; //['I', 'AM', 'LEARNING', 'RECURSION']
capitalizeWords(words);
capitalizeWords(['good', 'luck', 'to', 'you']); //['GOOD', 'LUCK', 'TO', 'YOU']

function isPalindrome(str) {
  if(typeof str != 'string') {
    return;
  } else {
    let outStr = '';
    for(let i=str.length-1; i>=0; i--) { //Time complexity is O(n)
        outStr+=str[i]; //Space complexity is O(n)
    }
    if(str === outStr) return true;
    else return false;
  }
}
isPalindrome('tacocat'); //true
isPalindrome('awesome'); //false;
isPalindrome('foobar'); //false
isPalindrome('amanaplanacanalpanama'); //true

const capitalizeFirst = arr => {
  let outArr = [];
  for(val of arr) { //Time complexity is O(n)
    outArr.push(val[0].toUpperCase() + val.slice(1, val.length)); //Space complexity is O(n)
  }
  return outArr;
}
capitalizeFirst(['car', 'taco', 'banana']); //['Car', 'Taco', 'Banana']

function flatten(arr) {
  let counter = 0;
  for(let i=0; i<arr.length; i++) {
    if(typeof arr[i] == 'object') counter++;
  }
  return arr.flat(counter);
  // return counter;
}
// flatten([1, [2], [3,4], [[5]]]); //[1, 2, 3, 4, 5]
flatten([1, [2, [3, 4], [[5]]]]);


function flatten(arr) {
  let counter = 0;
  for(let i=0; i<arr.length; i++) {
    if(typeof arr[i] == typeof arr) counter++;
  }
  return counter;
}
flatten([1, [2, [3, 4], [[5]]]]);

function flatten(arr) {
  let outArr = [];
  for(let i=0; i<arr.length; i++) {
    if(typeof arr[i] != 'object') {
      outArr.push(arr[i]);
    } else {
      outArr.concat(arr[i]);
    }
  }
  return outArr;
}
flatten([1, [2, [3, 4], [[5]]]]);
