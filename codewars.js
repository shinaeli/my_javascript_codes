// Write a function that multiplies each array element by the length of the array in decreasing order
function reverseMultiply(arrOfNumbers) {
    let output = [], timesArr = [];
    let times = arrOfNumbers.length;
    while (times >= 1) {
        timesArr.push(times);
        times--;
    }
    for(let i=0; i<arrOfNumbers.length; i++) {
        output.push(arrOfNumbers[i] * timesArr[i]);
    }
    return output;
}

console.log(reverseMultiply([1,2,3,4,5])); //[5, 8, 9, 8, 5]



// Write a function that moves all the '0' elements of the array to the end
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
    let zeroArr = [], others = [];
    for(let i=0; i<arr.length; i++) {
        if(arr[i] === 0) {
            zeroArr.push(arr[i]);
        }
        else {
            others.push(arr[i]);
        }
    }
    for(let k=0; k<zeroArr.length; k++) {
        others.push(zeroArr[k]);
    }
    return others;
}

// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
// For example, take 153 (3 digits), which is narcisstic:
function isNarcissistic(value) {
    let strNum = String(value), base = strNum.length, total = 0
    for(let i=0; i<strNum.length; i++) {
        total += (Number(strNum[i]) **  base);
    }
    return value == total;
}
isNarcissistic(153, 3); //true
isNarcissistic(1652, 4); //false

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
function duplicationCount(text){
    return text.toLowerCase().split('').filter((val, i, arr) => {
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
  }

//  Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.
function getCount(str) {
    let lowerStr = str.toLowerCase(), samples = ['a', 'e', 'i', 'o', 'u'], counter = 0;
    for(let i=0; i<lowerStr.length; i++) {
        if(samples.includes(lowerStr[i])) {
            counter += 1;
        } else {
            continue;
        }
    }
    return counter;
}
getCount('bottle'); //2
getCount('abracadabra'); //5

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.


// Find the unique number
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

function findUniq(arr) {
    for(let i=0; i<arr.length; i++) {
        for(let k=i+1; k<arr.length-1; k++) {
            if(arr[k] === arr[i]) {
                continue;
            } else {
                return arr[k];
            }
        }
    }
    return 'None';
}
findUniq([ 1, 1, 1, 2, 1, 1 ]); //2
findUniq([ 1, 1, 1, 1, 1, 1 ]); //'None'
findUniq([ 0, 0, 0.55, 0, 0 ]); //0.55

function findUniq(arr) {
    arr.sort((a,b)=>a-b);
    return arr[0]==arr[1]?arr.pop():arr[0]
}
findUniq([ 1, 1, 1, 2, 1, 1 ]); //2
findUniq([ 1, 1, 1, 1, 1, 1 ]); //'None'
findUniq([ 0, 0, 0.55, 0, 0 ]); //0.55

// The goal of this exercise is to convert a string to a new string where each character in the new string is
//  "(" if that character appears only once in the original string, or ")" if that character appears more than once in the 
//  original string. Ignore capitalization when determining if a character is a duplicate.
// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
function duplicateEncode(word){
let lowerStr = word.toLowerCase(), output = '';
for(let i=0; i<lowerStr.length; i++) {
    if((lowerStr.split(lowerStr[i]).length - 1) > 1) {
        output += ')';
    } else if((lowerStr.split(lowerStr[i]).length - 1) === 1) {
        output += '(';
    }
}
return output;
}
duplicateEncode('din'); //'((('
duplicateEncode('recede'); //'()()()'
duplicateEncode('Success'); //')())())'
duplicateEncode("(( @"); //'))(('

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters is an isogram. 
// Assume the empty string is an isogram. Ignore letter case.
// Example: (Input --> Output)
// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

function isIsogram(str){
    let lowerStr = str.toLowerCase(), outputArr = [], total = 0;
    for(let i=0; i<lowerStr.length; i++) {
        outputArr.push(lowerStr.split(lowerStr[i]).length - 1);
    }
    for(let k=0; k<outputArr.length; k++) {
        total += outputArr[k];
    }
    return total === lowerStr.length;
}
isIsogram("Dermatoglyphics"); //true
isIsogram("moose"); //false
isIsogram("aba"); //false
isIsogram('slate'); //true
isIsogram('democracy'); //false

// Given a string, your task is to count the number and length of arrow symbols in that string and return an int using the following rules:
// The string will only contain the characters ., -, =, <, >.
// An arrow must start with either < or >.
// Arrows are scored based on their length and direction, for example:
// (Left-facing arrows are scored as negative, while Right-facing arrows are positive)
// > is scored as 1
// -> is scored as 2
// < is scored as -1
// <- is scored as -2
// An arrow's tail (if it has one) must be entirely made up of either - or =. You cannot mix.
// So, --> would be a valid arrow of length 3, but =-> would only count -> as a part of the arrow.
// Additionally, arrows with a tail of = are scored twice as high as arrows with a tail of -, for example:
// --> is scored as 3
// ==> is scored as 6
// <= is scored as -4
// Double-sided arrows, like <-> or <===> are counted as 0.
// . is an empty character and cannot be the tail of an arrow.
// Examples
//     arrow_search('>.') # 1
//     arrow_search('<--..') # -3
//     arrow_search('><=><--') # -2
//     arrow_search('>===>->') # 11
