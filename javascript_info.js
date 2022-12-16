console.log('--- WORKING WITH ARRAYS ---');
//An array is an ordered collection of keyed values i.e. key-value pairs of which the index is the keys(properties)
// An array is not another type of data in javascript, it is simply an object
let dataArr = ['Deji', 28, 'loveth', false];
console.log(dataArr.length);
dataArr[dataArr.length - 1] = true;
// Since 'alert' function returns a string, the array is concatenated into a string
alert(dataArr); //Deji,28,loveth,true
dataArr.push(function() {
    return 'How are you?';
});
dataArr.push({});
dataArr.push('fatimah');
// The length of ana rray isn't the total number of elements present in the array, it is simply the sum of its highest index and 1
console.log(dataArr.length); //7
console.log(dataArr); //['Deji', 28, 'loveth', true, ƒ, {…}, 'fatimah']
console.log(dataArr[dataArr.length - 3]()); //How are you?
Object.assign(dataArr[dataArr.length - 2], {user: 'korede', age: 22});
console.log(dataArr);
// 0: "Deji"
// 1: 28
// 2: "loveth"
// 3: true
// 4: ƒ ()
// 5: {user: 'korede', age: 22}
// 6: "fatimah"
console.log(dataArr.pop()); //fatimah
dataArr.unshift(['david', 17, 'Chelsea FC']);
console.log(dataArr); //[Array(3), 'Deji', 28, 'loveth', true, ƒ, {…}]
dataArr[3] = 'BECKY';
dataArr[1] = dataArr[1].toUpperCase();
dataArr[3] = dataArr[3].toLowerCase();
console.log(dataArr); //[Array(3), 'DEJI', 28, 'becky', true, ƒ, {…}]
console.log(dataArr[0].shift()); //david
console.log(dataArr[0].length); //2
console.log(dataArr); //[Array(2), 'DEJI', 28, 'becky', true, ƒ, {…}]
// Aside 'for' loop, the 'for..of' loop is also used to iterate over the contents of an array
for(item of dataArr) {
    console.log(item);
}
// (2) [17, 'Chelsea FC']
// DEJI
// 28
// becky
// true
// ƒ () {
//     return 'How are you?';
// }
// {user: 'korede', age: 22}
// When carrying-out an addition operation on an array, the array is treated as a string, thereby, concatenation takes place
// An empty array is translated to an empty string
console.log(['friday', true] + 3); //friday,true3
console.log([]+5+8); //58
console.log(['Today']+' is a good day!'); //Today is a good day!
console.log(['Today']+[' ']+['is Thursday.']); //Today is Thursday.
// You can empty-out an entire array by simply assigning its length to zero
dataArr.length = 0;
console.log(dataArr); //[]
// The length of an array is writable i.e. it can be changed manually
let arr = ['shoes', 2, false, 'jude', 'LEXY'];
// The length of 'arr' is initially 5 but now it has been truncated to 3 i.e. the remaining two elements has been erased from memory
arr.length = 3;
console.log(arr[2]); //false
let arr1 = ['Yetunde', 'Wale', 90], arr2 = [false, 'money'], arr3 = ['baller', 'fat joe', 'Van Dyjk'];
let arr4 = arr1.concat(arr3, arr2);
console.log(arr4); //['Yetunde', 'Wale', 90, 'baller', 'fat joe', 'Van Dyjk', false, 'money']
console.log(arr4.concat(60, 'the GAME')); //['Yetunde', 'Wale', 90, 'baller', 'fat joe', 'Van Dyjk', false, 'money', 60, 'the GAME']
let arr1 = ['Yetunde', 'Wale', 90];
arr1.splice(1, 0, 'handsome', true, 419, function greet(){return 'Hello world!'});
console.log(arr1); //['Yetunde', 'handsome', true, 419, ƒ, 'Wale', 90]
arr1.splice(2, 1);
console.log(arr1); //['Yetunde', 'handsome', 419, ƒ, 'Wale', 90]
let arrDivs = ['jesus', 'christ', 'of', 'nazareth', 2022];
let subArrDivs = arrDivs.slice(-2);
console.log(subArrDivs); //['nazareth', 2022]
let subArDivs2 = arrDivs.slice(0, 4);
console.log(subArDivs2); //['jesus', 'christ', 'of', 'nazareth']
let numArr = [25, 10, 6, 73, 48];
let outputArr = numArr.map(x => (x * 2) - 5);
console.log(outputArr); //[45, 15, 7, 141, 91]
console.log(numArr.find(x => x % 2 == 0)); //10
console.log(numArr.findIndex(x => x % 3 == 0)); //2
function compare(a, b) {
    if(a > b) {
        return 1;
    } else if(a == b) {
        return 0;
    } else if(a < b) {
        return -1;
    }
}
console.log(outputArr.sort(compare)); //[7, 15, 45, 91, 141]


console.log('---WORKING WITH STRINGS---');
let str = 'today is thursday.';
console.log(str.length); //18
console.log(str.split('y').length - 1); //2
console.log(str[3]); //a
console.log(str.charAt(12)); //r
alert(str.toUpperCase()); //TODAY IS THURSDAY.
console.log('JOSEPH'.toLowerCase()); //joseph
for(letter of str) {
    alert(letter);
}
console.log(str.indexOf('u', 3)); //11
console.log(str.indexOf('k', 3)); //-1
console.log(str.indexOf('m')); //-1
console.log(str.lastIndexOf('a')); //15
console.log(str.slice(9, 17)); //thursday
console.log(str.endsWith('.')); //true
console.log(str.endsWith('k')) //false
console.log(str.startsWith('T')); //false
console.log(str.startsWith('t')); //true
let str2 = str;
console.log((str2+='hurray') == str); //false
console.log(str2.toUpperCase() == str); //false
console.log(str2 === str); //false
console.log(Object.is(str2, str)); //false
let sampleStr = 'tomorrow is Saturday';
let sample1 = sampleStr.split('');
console.log(sample1); //['t', 'o', 'm', 'o', 'r', 'r', 'o', 'w', ' ', 'i', 's', ' ', 'S', 'a', 't', 'u', 'r', 'd', 'a', 'y']
let sample = sampleStr.split('').join('-');
console.log(sample); //t-o-m-o-r-r-o-w- -i-s- -S-a-t-u-r-d-a-y
console.log(sampleStr.substr(0, 8)); //tomorrow
// let editedStr = sampleStr.splice(9, 2, 'was');
// console.log(editedStr);
console.log(sampleStr.includes('day')); //true
console.log(sampleStr.includes(sampleStr.slice(12).toUpperCase())); //false

console.log('---working with numbers---'.toUpperCase());
let age = 14;
console.log(isNaN(age)); //false
console.log(isFinite(age)); //true
console.log(isNaN('two'**2)); //true
console.log(isFinite(Infinity / 2)); //false
// 'parseInt' function checks for the first occurence of an integer in a string. It returns the found integer.
console.log(parseInt('2.894females')); //2
console.log(parseInt('little40.5')); //NaN
// 'parseFloat' function checks for the first occurence of an floating-point number in a string. It returns the found floating-point number.
console.log(parseFloat('40.83boys')); //40.83
console.log(parseFloat('boys13.6')); //NaN
// 'toString()' method converts a numkber into a string. Its parameter is the base which the number is to be converted into.
// base '2' returns a binary while base '16' is used to generate hex colour codes from the number
console.log((1500).toString(2)); //10111011100
let color1 = 125, color2 = 200, color3 = 255;
const hexColor = '#'+(color1.toString(16)+color2.toString(16)+color3.toString(16));
console.log(hexColor); //#7dc8ff
console.log(Math.ceil(12.4983)); //13
console.log(Math.floor(3.815)); //3
console.log(Math.round(45.7361)); //46
console.log((0.16250482).toFixed(3)) //0.163
console.log(Math.trunc(803.145276715272627835478167)); //803
let allNames = ['kola', 'david', 'moyosore', 'oluwafunmilola', 'segun', 'james', 'hannah', 'daniel', 'george', 'kingston'];
function getRandomItem(arr) {
    const getIndex = Math.floor(Math.random() * allNames.length);
    console.log(arr[getIndex].toUpperCase());
}
getRandomItem(allNames); //KINGSTON
getRandomItem(allNames); //MOYOSORE
getRandomItem(allNames); //OLUWAFUNMILOLA
getRandomItem(allNames); //OLUWAFUNMILOLA
getRandomItem(allNames); //KOLA


console.log('---working with set---'.toUpperCase());
let ages = [12, 34, 87, 9, 12, 12, 33, 9, 87, 100, 34, 87, 29, 33, 64, 12, 58, 64, 87, 5, 34, 80];
let ageSet = new Set(ages)
console.log(ageSet); {12, 34, 87, 9, 33, 100, 29, 64, 58, 5, 80}
ageSet.add(15);
ageSet.add(10)
ageSet.add(10)
ageSet.delete(9);
console.log(ageSet); //{12, 34, 87, 9, 33, 100, 29, 64, 58, 5, 80, 15, 10}
console.log(ageSet.size); //12
console.log(ageSet.has(11)); //false
console.log(ageSet.has(15)); //true
console.log(ageSet.has(9)); //true
console.log(ageSet.entries()); //SetIterator {12 => 12, 34 => 34, 87 => 87, 33 => 33, 100 => 100, …}
// '.values()' method on a set returns an iterable which contains all the elements of the set
console.log(ageSet.values()); //SetIterator {12, 34, 87, 33, 100, …}
const aged = ageSet.values();
[...aged].forEach(x => console.log(x**2));
// 144
// 1156
// 7569
// 1089
// 10000
// 841
// 4096
// 3364
// 25
// 6400
// 225
// 100

console.log('---working with map---'.toUpperCase());
const mapped = new Map([['kate',  14], ['james', 21], [{name: 'Joseph Alabi', age: 15}, function() {alert('Hello World!')}]])
console.log(mapped); //{'kate' => 14, 'james' => 21, {…} => ƒ}
console.log(mapped.size); //3
mapped.set(1995, 'birth year');
mapped.set('place of birth', 'Osogbo');
console.log(mapped.size); //5
console.log(mapped); //{'kate' => 14, 'james' => 21, {…} => ƒ, 1995 => 'birth year', 'place of birth' => 'Osogbo'}
console.log(mapped.get('james')); //21
console.log(mapped.has('kate')); //true
mapped.set(true, 'male');
console.log(mapped.size); //6
mapped.delete('james');
console.log(mapped.size); //5
console.log(mapped); //{"kate" => 14, "james" => 21, Object => function() {alert('Hello World!')}, 1995 => "birth year", "place of birth" => "Osogbo", true => "male"}

console.log('---destructuring.toUpperCase()---');
let user = {name: 'John', years: 30}
const { name, isAdmin = false, years } = user;
console.log(name, years, isAdmin); //John 30 false

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
function topSalary(wages) {
    let salariesEnt = Object.entries(wages);
    let maxWage = 0, maxName;
    for(let [name, salary] of salariesEnt) {
        if(maxWage < salary) {
            maxWage = salary;
            maxName = name;
        }
    }
    return maxName;
}
console.log(topSalary(salaries));

function unique(arr) {
    /* your code */
    let output = new Set(arr);
    return output;
}
let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
console.log(unique(values)); // Hare, Krishna, :-O

let arr1 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
function aclean(arr) {
    let mappedStr = new Map();
    for(let letter of arr) {
        let sortedStr = letter.split('').sort().join('');
        mappedStr.set(letter, sortedStr);
    }
    let newArr = new Set(Array.from(mappedStr.values()));
    return [...newArr];
}
console.log(aclean(arr1)); //['anp', 'aceehrst', 'ANP', 'aer']

let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
keys.push('more');
console.log(keys); //['name', 'more']

// Create a day
let theDay = new Date(2012, 1, 20, 3, 12, 0);
console.log(theDay); //Mon Feb 20 2012 03:12:00 GMT+0100 (West Africa Standard Time)

// Show a weekday
function getWeekDay(date) {
    const arr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    return arr[date.getDay()];
}
console.log(getWeekDay(new Date(2012, 0, 3))); //TUE
console.log(getWeekDay(new Date(2022, 11, 7))); //WED
console.log(getWeekDay(new Date(2003, 5, 26))); //THU
console.log(getWeekDay(new Date(2001, 6, 15))); //SUN
console.log(getWeekDay(new Date(2009, 8, 4))); //FRI

// European weekday
function getLocalDay(date) {
    const arr = ['', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    let dayGetter = date.getDay();
    if(1 <= dayGetter <= 6) {
        return arr[dayGetter + 1];
    } else {
        return arr[7];
    }
}
console.log(getLocalDay(new Date(2012, 0, 3))); //WED

// Which day of month was many days ago?
function getDateAgo(date, days) {
    return date.setDate(date.getDate() - days);
}
let date = new Date(2015, 0, 2);
console.log(getDateAgo(date, 1)); 
console.log(getDateAgo(date, 2)); 
console.log(getDateAgo(date, 365)); 

