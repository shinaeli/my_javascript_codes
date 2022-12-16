var firstName = "Timothy";
var lastName = "Akintoye";
var middleName = " Wande ";
console.log(firstName+middleName+lastName);
alert(lastName.slice(4,8));
alert(firstName.length);
console.log(middleName.indexOf("d"));
middleName.replace(" Wande ", " 'Rico_Strong' ");

var quote = '"This is the land of the free."';
alert(quote);
// 'toUpperCase()' is used to change all the characters of a string to upper case(capital letter)
alert(firstName.toUpperCase());


let greet = 'You are welcome.';
// 'length' is used to determine the total number of characters present in a string
console.log(greet.length); //16
// '[index]' is used to find the character located at the index provided in the square bracket
console.log(greet[7]); //' '
// 'charAt(index)' is used to find the character located at the index provided in parenthesis
console.log(greet.charAt(10)); //'l'
// 'indexOf' is used to determine the index of the first occurence of the character passed to it
console.log(greet.indexOf('e')); //6
// 'lastIndexOf' is used to determine the index of the last occurence of the character passed to it
console.log(greet.lastIndexOf('o')); //12
let cutString = greet.slice(2, 11);
// 'slice' is used to create copy of the whole or a part of a string
console.log(cutString); //'u are wel'
// 'replace' is used to change a section of a string
let cutString2 = greet.replace('welcome', 'valuable to us');
console.log(cutString2); //'You are valuable to us.'
greet.toUpperCase(); //'YOU ARE WELCOME.'
// 'toLowerCase()' is used to change all the characters of a string to lower case(small letter)
greet.toLowerCase(); //'you are welcome.'
let fullName = new String('Fredrick Oluwasegun Adeoye');
console.log(fullName); //{'Fredrick Oluwasegun Adeoye'}
console.log(typeof greet); //string
console.log(typeof fullName); //object
console.log(greet[16]); //undefined
console.log(greet.indexOf('f')); //-1
let splittedStr = greet.split(' ');
// 'split' accepts a character and uses it to split the string object and returns the result as an array
console.log(splittedStr); //['You', 'are', 'welcome.']