let regex = /day/, word = 'Today was great';
console.log(regex.test(word));//true

let regex = /Day/, word = 'Today was great';
console.log(regex.test(word));//false

console.log('---Match A Literal String With Different Possibilities---');
//'|' represents 'OR'
let regex = /dog|cat|bird|fish/, testWord = 'John has a pet dog';
console.log(regex.test(testWord)); //true

let regex = /dog|cat|bird|fish/, testWord = 'Emma has a pet rock';
console.log(regex.test(testWord)); //false

let regex = /dog|cat|bird|fish/, testWord = 'Emma has a pet bird';
console.log(regex.test(testWord)); //true

let regex = /dog|cat|bird|fish/, testWord = 'Liz has a pet cat';
console.log(regex.test(testWord)); //true

let regex = /dog|cat|bird|fish/, testWord = 'Kara has a pet dolphin';
console.log(regex.test(testWord)); //false

let regex = /dog|cat|bird|fish/, testWord = 'Alice has a pet fish';
console.log(regex.test(testWord)); //true

let regex = /dog|cat|bird|fish/, testWord = 'Jimmy has a pet computer';
console.log(regex.test(testWord)); //false

console.log('---Ignore Case While Still Matching---');
//The 'i' flag changes all uppercase to lowercase
let fccRegex = /freecodecamp/i, testWord = 'freeCodeCamp';
console.log(fccRegex.test(testWord)); //true
let fccRegex = /freecodecamp/i, testWord = 'FreeCodeCamp';
console.log(fccRegex.test(testWord)); //true
let fccRegex = /freecodecamp/i, testWord = 'FreecodeCamp';
console.log(fccRegex.test(testWord)); //true
let fccRegex = /freecodecamp/i, testWord = 'FreeCodecamp';
console.log(fccRegex.test(testWord)); //true
let fccRegex = /freecodecamp/i, testWord = 'Free Code Camp';
console.log(fccRegex.test(testWord)); //false
let fccRegex = /freecodecamp/i, testWord = 'freeCOdeCamp';
console.log(fccRegex.test(testWord)); //true
let fccRegex = /freecodecamp/i, testWord = 'FCC';
console.log(fccRegex.test(testWord)); //false
let fccRegex = /freecodecamp/i, testWord = 'FrEeCoDeCamp';
console.log(fccRegex.test(testWord)); //true
let fccRegex = /freecodecamp/i, testWord = 'FrEeCodECamp';
console.log(fccRegex.test(testWord)); //true
let fccRegex = /freecodecamp/i, testWord = 'FReeCodeCAmp';
console.log(fccRegex.test(testWord)); //true

console.log('---Extract Matches---');
"Hello World!".match(/Hello/); //['Hello', index: 0, input: 'Hello World!', groups: undefined]
let ourStr = 'Regular expressions', ourRegex = /expressions/;
ourStr.match(ourRegex); //['expressions', index: 8, input: 'Regular expressions', groups: undefined]
let regex = /happy/, word = "Jide wasn't happier about travelling";
word.match(regex); //null
let regex = /happy/i, word = "Jide wasn't HAPPY about travelling";
word.match(regex); //['HAPPY', index: 12, input: "Jide wasn't HAPPY about travelling", groups: undefined]

console.log('---Find More Than The First Match---');
// The 'g' flag shows each match occurence
let testStr = "Repeat Repeat Repeat", ourRegex = /Repeat/;
testStr.match(ourRegex); //['Repeat', index: 0, input: 'Repeat Repeat Repeat', groups: undefined]
let repeatRegex = /Repeat/g, testStr = "Repeat Repeat Repeat";
testStr.match(repeatRegex); //['Repeat', 'Repeat', 'Repeat']
"Twinkle twinkle little star".match(/twinkle/ig); //['Twinkle', 'twinkle']

console.log('---Match Anything By Using The Wildcard Period---');
let testStr = 'Today is a good day to pay all our debts. Douglas says he prays to God on his way to Conway', testRegex = /ay./;
console.log(testStr.match(testRegex));
console.log(testRegex.test(testStr)); //true
//'test' method returns a boolean while 'match' returns an array
let unRegex = /un./, testStr = "Let us go on a run";
console.log(unRegex.test(testStr)); //false
let unRegex = /un./, testStr = "The sun is out today";
console.log(unRegex.test(testStr)); //true
let unRegex = /un./, testStr = "Coding is a lot of fun";
console.log(unRegex.test(testStr)); //false
let unRegex = /un./, testStr = "Seven days without a pun makes one weak";
console.log(unRegex.test(testStr));//true
let unRegex = /un./, testStr = "One takes avow to be a nun";
console.log(unRegex.test(testStr));//false
let unRegex = /un./, testStr = "She got fired from the hot dog stand for putting her hair in the bun";
console.log(unRegex.test(testStr));//false
let unRegex = /un./, testStr = "There is a bug in my code";
console.log(unRegex.test(testStr)); //false
let unRegex = /un./, testStr = "Catch me if you can";
console.log(unRegex.test(testStr)); //false

console.log('---Match Single Character with Multiple Possibilities---');
let bigStr = 'big', bagStr = 'bag', bugStr = 'bug', bogStr = 'bog', bgRegex = /b[aiu]g/; //'[aiu]' are called character classes or sets
console.log(bigStr.match(bgRegex)); //['big', index: 0, input: 'big', groups: undefined]
console.log(bagStr.match(bgRegex)); //['bag', index: 0, input: 'big', groups: undefined]
console.log(bugStr.match(bgRegex)); //['bug', index: 0, input: 'big', groups: undefined]
console.log(bogStr.match(bgRegex)); //null
let vowelRegex = /[aeiou]/ig, quoteSample = 'A WORD is enough for the WISE';
console.log(quoteSample.match(vowelRegex)); //['A', 'O', 'i', 'e', 'o', 'u', 'o', 'e', 'I', 'E']

