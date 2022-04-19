var input = [5, 8, 3, 19, 26, 6, 10];
console.log(input.some(function (value, valueIndex, wholeArray) {
  return value >= 2;
})); //true
console.log(input.every(function (value, valueIndex, wholeArray) {
  return value < 2;
})) //false
console.log(input.filter(function (value, valueIndex, wholeArray) {
  return value % 2 == 0;
})) //[8, 26, 6, 10]
console.log(input.filter(function (value, valueIndex, wholeArray) {
  return (value % 2 == 0) && (value % 5 == 0);
})); //[10]
// some, every, filter, indexOf, lastIndexOf, map, reduce, reduceRight, forEach, get, set, Array.isArray, trim
input.forEach(function (value, valueIndex, wholeArray) {
  var modulus = value % 3;
  console.log(modulus ** 2);
  return;
});

var names = ["Deji", "Wemimo", "Shade", "Kemi", "Rita", "Seun", "Kemi", "Alake", "Shade", "Kemi", "Seye", "Tomiwa", "Shade"];
console.log(names.indexOf("Shade")); //2   Shade occured first at the index position of 2
console.log(names.indexOf("Deji")); //0
console.log(names.indexOf("Seye")); //10
console.log(names.indexOf("Alake")); //7
console.log(names.indexOf("Wemimo")); //1
console.log(names.indexOf("Tomiwa")); //11
console.log(names.lastIndexOf("Shade")); //12 Shade occured last at the index position of 12
console.log(names.lastIndexOf("Deji")); //0
console.log(names.lastIndexOf("Seye")); //10
console.log(names.lastIndexOf("Alake")); //7
console.log(names.lastIndexOf("Wemimo")); //1
console.log(names.lastIndexOf("Tomiwa")); //11

var names = ["Deji", "Wemimo", "Shade", "Kemi", "Rita", "Seun", "Alake", "Seye", "Tomiwa"];

function namesLength(value, valueIndex, wholeArray) {
  return value.length;
}
console.log(names.map(namesLength));
//OR
console.log(names.map(function namesLength(value, valueIndex, wholeArray) {
  return value.length;
})); //[4, 6, 5, 4, 4, 4, 5, 4, 6]

var ages = [12, 3, 25, 8, 18, 20];
console.log(ages.reduce(function (accumulator, value, valueIndex, wholeArray) {
  return accumulator + value;
})); //86

// Primitive and Referece Data Types
var cool = {
  status: "no"
};
var dope = {
  status: "no"
};
typeof cool;
"object"
typeof dope;
"object"
cool == dope;
false
cool.status == dope.status;
true
cool.status = "free";
cool {
  status: "free"
}
dope {
  status: "no"
}
dope.status = cool.status;
dope {
  status: "free"
}
var age = 15;
age = 16;
16
age
16
var newAge = age;
newAge
16



function range(start, end) {
  let output = [];
  for (let i = 0; i < end - start + 1; i++) {
    output.push(start);
    start += 1;
  }
  return output;
}
range(6, 8);

function range(start, end) {
  let output = [];
  while (start <= end) {
    output.push(start);
    start += 1;
  }
  return output;
}
range(1, 10);


function sum(arr) {
  let add = 0;
  for (let i = 0; i < arr.length; i++) {
    add += arr[i];
  }
  // console.log(add);
  return add;
}
let agg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //55
sum(agg);
sum(range(1, 10));


function range(start, end, inc) {
  let output = [];
  if (!inc) {
    while (start <= end) {
      output.push(start);
      start += 1;
    }
  } else {
    while (start <= end) {
      output.push(start);
      start += inc;
    }
  }
  return output;
}
// range(1,10);
range(1, 10, 2);

//Write a JavaScript function that reverse a number
function reverseNum(x) {
  let str = x.toString(); //coverts the number into a string
  let spl = str.split(""); //splits the strig into an array
  let revr = spl.reverse(); //reverses the elements of the array
  let output = revr.join(""); //joins the reversed array elements into a single string
  return output;
}
reverseNum(800236); //"632008"
//OR
function reverseNum(x) {
  return x.toString().split("").reverse().join("");
}
reverseNum(800236); //"632008"


//Write a JavaScript function that returns a passed string with letters in alphabetical
function sortAlphabets(x) {
  let spl = x.split(""); //splits string into an array
  let srt = spl.sort(); //sorts the array in a alphabetical order
  let output = srt.join(""); //joins the sorted array to form a string
  return output;
}
sortAlphabets("rejections"); //"ceeijnorst"
//OR
function sortAlphabets(x) {
  return x.split("").sort().join("");
}
sortAlphabets("rejections"); //"ceeijnorst"
sortAlphabets("DAY"); //"ADY"


//Write a JavaScript function that generates all combinations of a string 
function subStrings(str1) {
  var array1 = [];
  for (var x = 0, y = 1; x < str1.length; x++, y++) {
    array1[x] = str1.substring(x, y);
  }
  var combi = [];
  var temp = "";
  var slent = Math.pow(2, array1.length);
  for (var i = 0; i < slent; i++) {
    temp = "";
    for (var j = 0; j < array1.length; j++) {
      if ((i & Math.pow(2, j))) {
        temp += array1[j];
      }
    }
    if (temp != "") {
      combi.push(temp);
    }
  }
  console.log(combi.join("\n"));
}
subStrings("dog");
subStrings("catch");


//write a JavaScript function that accepts a string as a parameter and coverts the first letter of each word of the string in upper case
function changeToUpper(str) {
  var splitedArray = str.split("");
  var output = [];
  for (let i = 0; i < splitedArray.length; i++) {
    output.push(splitedArray[i].charAt(0).toUpperCase() + splitedArray[i].slice(1));
  }
  return output.join("");
}
changeToUpper("the is the beast"); //This Is The Beast

//Write a JavaScript function that accepts a string as a parameter and find the longest word within the string
function find_longest_word(str) {
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];
  for (var x = 1; x < array1.length; x++) {
    if (result.length < array1[x].length) {
      result = array1[x];
    }
  }
  return result;
}
find_longest_word("this is web development"); //development

//Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string
function vowelCount(str) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count += 1;
    }
  }
  return count;
}
vowelCount("the REALest"); //4
vowelCount("submit coursera assingment"); //9

//Write a JavaScript function that accepts a number as a parameter and checks the number is prime or not
function prime(k) {
  if (k === 1) {
    return false;
  } else if (k === 2) {
    return true;
  } else {
    for (let i = 2; i < k; i++) {
      if (k % i === 0) {
        return false;
      }
    }
    return true;
  }
}
prime(45);
prime(17);
prime(1);
prime(2);

//Write a function which accepts an argument and returns the type
function giveType(x) {
  return typeof (x);
}
giveType("Today");
giveType(3);
giveType([3, "Wed", true]);
giveType(false);
giveType(null);
giveType({
  age: 34,
  "drug limit": 15,
  name: "Aduke"
});
giveType(undefined);
giveType(NaN);

//Write a JavaScript function which returns the n rows by n columns identity matrix
function matrix(m) {
  let i, j;
  for (i = 0; i < m; i++) {
    for (j = 0; j < m; j++) {
      if (i === j) {
        console.log("1");
      } else {
        console.log("0");
      }
      // console.log('-------');
    }
  }
  return;
}
matrix(4);

//Write a JavaScript function which says whether a number is perfect
function isPerfect(num) {
  let count = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      count += i;
    }
  }
  if (count === num && count !== 0) {
    return `${num} is perfect.`;
  } else {
    return `${num} isn't perfect.`;
  }
}
isPerfect(6);
isPerfect(15);

//Flattening an array of array into a single array
let arrays = [
  [1, 2, 3],
  [4, 5],
  [6]
];
console.log(arrays.reduce((flat, current) => flat.concat(current), []));

//5.2 Your Own Loop
function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}
loop(3, n => n > 0, n => n - 1, console.log);


[12, 5, 8].every(function (value, valueIndex, wholeArray) {
  return value % 2;
});


function every(array, predicate) {
  for (let element of array) {
    if (!predicate(element)) return false;
  }
  return true;
}

function every(array, predicate) {
  return !array.some(element => !predicate(element));
}

console.log(every([1, 3, 5], n => n < 10));

//Destructuring of Object
var kids = {
  names: ['Tade', 'Frida', 'Sope', 'Grealish', 'Wemimo', 'Dj Black', 'Ridwan'],
  school: 'Oloyin Grammar School',
  class: 'JSS3',
  average_age: 14,
  total_number_of_students: 7
}
console.log(kids.average_age);
console.log(kids.total_number_of_students);
console.log(kids.names[3]);

var {
  school,
  average_age,
  names
} = kids;
console.log(school);
console.log(average_age);
console.log(names);

//Destructuring of Array
var outfit = ['Adidas', 'Puma', 'Nike', 'New Balance', 'Fubu'];
var [, , , display] = outfit;
console.log(display);


function curry(prim, fun) {
  if(typeof fun != "function") return;
  var ret = function() {
    return fun(prim);
  }
  return ret;
}
var fun = function(val) {return val+50};
var curry1 = curry(99, fun);
console.log(curry1());
