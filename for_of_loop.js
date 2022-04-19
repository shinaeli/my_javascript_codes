//The for-of loop works only on iterables such as arrays, maps, sets and strings
const names = ['Mary', 'Tajudeen', 'Khadijat', 'John', 'Dennis', 'Fredrick', 'Shade', 'Yetunde', 'Kimberly'];
for(let items of Object.entries(names)) {
  console.log(`Number ${Number(items[0])+1} name is ${items[1]} with an index number of ${Number(items[0])}.`);
  console.log(items);
}

const details = {
  name: 'Lovett Nkiruka',
  address: '4B, Ayodele Fanoiki Street, Magodo GRA Phase 1, Lagos.',
  age: 22,
  sex: 'female',
  possessesNysc: 'false',
  favourite_food: 'Rice and Vegetable'
}
for(let leak of details) {
  console.log(leak);  //Error: details is not iterable
}

let str = "Fredrick Lord Lugard";
for(let letter of Object.entries(str)) {
  console.log(letter);
}


const requests = ['Frida', 'Fred', 'Aliyah', 'Davido', 'Jonathan', 'Mariah'];
for(title of requests) {
  console.log(title);
}

const details = new Map([['fullName', 'Christopher Omoboriowo'], ['marital_status', 'single'], ['number_of_girlfriends', '6'], ['networth', '15000000'], ['schoolsAttended', ['Ojodu Nursery $ Primary School', 'Idumota Highschool', 'Yaba Polytechnic', 'University of Ife']], ['Occupation', 'Civil Engineering'], ['date_of_birth', '15th April, 1983']]);
console.log(details);
for(data of details) {
  console.log(data);  //Each ouput is an array
}
for(const [property, value] of details) {  //By using array destructuring
  console.log(`The value of the key: ${property} is : ${value}`);
}





const maxNumber = (a, b) => {
  if(a == b) {
    return alert(`Invalid inputs`)
  } else {
  return Math.max(a, b);
  }
}
maxNumber(13, 9);  //13
maxNumber(44, 87);  //87
maxNumber(8, 8);  //Invalid Inputs
//OR
const maxNumber = (a, b) => {
  if(a-b > 0) {
    return a
  } else if(b-a > 0) {
    return b
  } else {
    return alert(`Invalid inputs`)
  }
}
maxNumber(13, 9);  //13
maxNumber(44, 87);  //87
maxNumber(8, 8);  //Invalid Inputs

const findSign = (x,y,z) => {
  if(x*y*z < 0) {
    return '-';
  } else {
    return '+';
  }
}
findSign(3, -7, 2); //-

const comparer = (x, y) => y-x;  //It's a descending order so 'y' must e greater than 'x'
const sortNumber = arr => arr.sort(comparer)
sortNumber([0, -1, 4]); //[4, 0, -1]
let counts = [10, 28, -3, 6, 40, -2, -48, 5];
sortNumber(counts);  //[40, 28, 10, 6, 5, -2, -3, -48]

const comparer = (x, y) => x-y;  //It's an ascending order so 'y' must e greater than 'x'
const sortNumber = arr => arr.sort(comparer)
sortNumber([4, -1, 0]); //[-1, 0, 4]
let counts = [10, 28, -3, 6, 40, -2, -48, 5];
sortNumber(counts); //[-48, -3, -2, 5, 6, 10, 28, 40]



const findLargest = arr => {
  const comparer = (k, m) => {
    return k-m  //It's an ascending order so 'k' must be greater than 'm'
  }
  const output = arr.sort(comparer);
  return output[output.length - 1];
}
findLargest([-5, -2, -6, 0, 1]);  //1
let counts = [10, 28, -3, 6, 40, -2, -48, 5];
findLargest(counts);  //40
//OR
const findLargest = arr => Math.max(...arr);  //The '...' helps to spread the passed array as arguments into the function
let counts = [10, 28, -3, 6, 40, -2, -48, 5];
findLargest(counts)  //40
findLargest([10, 28, -3, 6, 40, -2, -48, 5])  //40

let x = 0;
for(let i=0; i<16; i++) {
  if(x % 2 == 0) {
    console.log(`${x} is even`)
  } else {
    console.log(`${x} is odd`)
  }
  x+=1;
}

const grader = obj => {
  const marks = Object.keys(obj);
  const sumTotal = (accumulator, x) => accumulator + x;
  const averageOutput = (marks.reduce(sumTotal, 0)) / marks.length;
  if(averageOutput < 60) {
    console.log(`The grade is F`)
  } else if(60 <= averageOutput < 70) {
    console.log(`The grade is D`)
  } else if(70 <= averageOutput < 80) {
    console.log(`The grade is C`)
  } else if(80 <= averageOutput < 90) {
    console.log(`The grade is B`)
  } else if(90 <= averageOutput <= 100) {
    console.log(`The grade is A`)
  }
}
const studentScores = {David: 80, Vinoth: 77, Divya: 88, Ishitha: 95, Thomas: 68};
grader(studentScores); //The grade is D


const sumMultiples = x => {
  let arr = [];
  for(let i=0; i<=1000; i++) {
    if((i % 3 == 0) && (i % 5 == 0)) {
      arr.push(i)
    }
  }
  const adder = (accumulator, elem) => accumulator + elem;
  const output = arr.reduce(adder, 0);
  return output;
}
sumMultiples(1000);


