// Create a function which returns the number of true values there are in an array.
function countTrue(arr) {
	let count = 0;
	if(arr.length == 0){
		return 0
	} else {
		for(let i=0; i<arr.length; i++){
			if(arr[i] === true) {
				count += 1
			} else {
				continue;
			}
		}
	}
	return count;
}

// Create a function that returns a base-2 (binary) representation of a base-10 (decimal) string number. 
// To convert is simple: ((2) means base-2 and (10) means base-10) 010101001(2) = 1 + 8 + 32 + 128.
// Going from right to left, the value of the most right bit is 1, now from that every bit to the left will be x2 the value, 
// value of an 8 bit binary numbers are (256, 128, 64, 32, 16, 8, 4, 2, 1).
function binary(decimal) {
	return decimal.toString(2);
}
// OR
function binary(decimal) {
	
}

// This challenge will help you interpret mathematical relationships both algebraically and geometrically.
// Matchstick Houses, Steps 1, 2 and 3
// Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. 
// See step 1, 2 and 3 in the image above.
function matchHouses(step) {
	return step == 0 ? 0 : (5 * step) + 1;
}

// The left shift operation is similar to multiplication by powers of two.
// Sample calculation using the left shift operator (<<):
// 10 << 3 = 10 * 2^3 = 10 * 8 = 80
// -32 << 2 = -32 * 2^2 = -32 * 4 = -128
// 5 << 2 = 5 * 2^2 = 5 * 4 = 20
// Write a function that mimics (without the use of <<) the left shift operator and returns the result from the two given integers
function shiftToLeft(x, y) {
	if(y<0) {
		return;
	} else if(y == 0) {
		return x;
	}
	else {
		let power = 1, base = 2;
		while(power < y) {
			base *= 2;
			power += 1;
		}
		return x * base;
	}
}
shiftToLeft(5, 2); //➞ 20
shiftToLeft(10, 3); //➞ 80
shiftToLeft(-32, 2); //-128
shiftToLeft(-6, 5); //-192
shiftToLeft(12, 4); //192
shiftToLeft(57, 0); //57
shiftToLeft(46, 6); //2944

// Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.
// To illustrate:
// largestSwap(27) ➞ false
// largestSwap(43) ➞ true
// If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27. 
// On the other hand, swapping 43 gives us 34, and 43 > 34.
function largestSwap(num) {
	let str = ('' + num).split('');
	let swapped = Number(str[str.length - 1] + str[0]);
  return num - swapped >= 0;
}
largestSwap(14); //false
largestSwap(53); //true
largestSwap(99); //true

// Create a function that will take a HEX number and returns the binary equivalent (as a string).
// Examples
// toBinary(0xFF) ➞ "11111111"
// toBinary(0xAA) ➞ "10101010"
// toBinary(0xFA) ➞ "11111010"
function toBinary(num) {
	return num.toString(2).toString(8);
}
toBinary(0xFF); //"11111111"
toBinary(0xAA); //"10101010"
toBinary(0xFA); //"11111010"

// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. 
// Otherwise, return "there is no 7 in the array".
// Examples
// sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// // 7 contains the number seven.
// sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// // None of the items contain 7 within them.
// sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// // 97 contains the number seven.
function sevenBoom(arr) {
	for(let i=0; i<arr.length; i++) {
		let str = String(arr[i]);
		if(str.includes('7')) {
			return 'Boom!';
		}
	}
	return "there is no 7 in the array";
}

// Create a function that calculates the number of different squares in an n * n square grid. Check the Resources tab.
// Examples
// numberSquares(2) ➞ 5
// numberSquares(4) ➞ 30
// numberSquares(5) ➞ 55
function numberSquares(n) {
	if(n == 0){
		return 0;
	} else if(n == 1){
		return (1**2) + 0;
	} else if(n > 1){
		return (n**2) + numberSquares(n-1);
	}
}
numberSquares(2); //5
numberSquares(4); //30
numberSquares(5); //55


// Create a function that takes a string as an argument. 
// The function must return a string containing 1s and 0s based on the string argument's words. 
// If any word in the argument is not equal to "zero" or "one" (case insensitive), you should ignore it. 
// The returned string's length should be a multiple of 8, if the string is not a multiple of 8 you should remove the numbers in excess.
// Examples
// textToNumberBinary("zero one zero one zero one zero one") ➞ "01010101"
// textToNumberBinary("Zero one zero ONE zero one zero one") ➞ "01010101"
// textToNumberBinary("zero one zero one zero one zero one one two") ➞ "01010101"
// textToNumberBinary("zero one zero one zero one zero three") ➞ ""
// textToNumberBinary("one one") ➞ ""
function textToNumberBinary(str) {
	let arr = str.split(' ');
	if(arr.length % 8 == arr.length) {
		return "";
	} else if(arr.length % 8 == 0 || arr.length > 8) {
		let newArr = [...arr.slice(0, 8)];
		let output = '';
		for(let i=0; i<newArr.length; i++) {
			if(newArr[i].toLowerCase() == 'zero') {
				output += 0;
			} else if(newArr[i].toLowerCase() == 'one') {
				output += 1;
			} else {
				return "";
			}
		}
		return output;
	}
}
textToNumberBinary("zero one zero one zero one zero one"); //'01010101'
textToNumberBinary("Zero one zero ONE zero one zero one"); //'01010101'
textToNumberBinary("zero one zero one zero one zero one one two"); //'01010101'
textToNumberBinary("zero one zero one zero one zero three"); //""
textToNumberBinary("one one"); //""


class Person {
	constructor(firstName, lastName, birthYear, origin, nationality) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.birthYear = birthYear;
		this.origin = origin;
		this.nationality = nationality;
	}

	introduce() {
		const vowels = ['A', 'E', 'I', 'O', "U"];
		let prepper;
		vowels.includes(this.nationality[0].toUpperCase()) ? prepper = 'an' : prepper = 'a';
		return `Hi. My name is ${this.firstName} ${this.lastName}. I'm ${prepper} ${this.nationality}. I'm from ${this.origin} and I'm ${2022 - this.birthYear}years old.`;
	}

}

let person1 = new Person('Morayo', 'Babtatunde', 1988, 'Ikire', 'Nigerian');
console.log(person1); //Person {firstName: 'Morayo', lastName: 'Babtatunde', birthYear: 1988, origin: 'Ikire', nationality: 'Nigerian'}
console.log(person1.introduce()); //Hi. My name is Morayo Babtatunde. I'm a Nigerian. I'm from Ikire and I'm 34years old.
let person2 = new Person('Bode', 'Johnson', 1971, 'Philadelphia', 'American');
console.log(person2.introduce()); //Hi. My name is Bode Johnson. I'm an American. I'm from Philadelphia and I'm 51years old.
console.log(person2); //Person {firstName: 'Bode', lastName: 'Johnson', birthYear: 1971, origin: 'Philadelphia', nationality: 'American'}


class Relative extends Person {
	constructor() {
		super()
	}
}

// A boomerang is a V-shaped sequence that is either upright or upside down. 
// Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.
// Some boomerang examples:
// [3, 7, 3], [1, -1, 1], [5, 6, 5]
// Create a function that returns the total number of boomerangs in an array.
// [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
function countBoomerangs(arr) {
	let i = 0, output = [];
	let diff1, diff2;
	while(i < arr.length) {
		let samples = [];
		diff1 = arr[i+1] - arr[i];
		diff2 = arr[i+1] - arr[i+2];
		if((diff1 == diff2) && (diff1 != 0 && diff2 != 0)) {
			samples.push(arr[i], arr[i+1], arr[i+2]);
			output.push(samples);
		}
		i+=1;
	}
	console.log(output);
	return output.length;
}
console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1])); //2
console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9])); //1
console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9])); //0

// Create a function that determines whether a number is Oddish or Evenish. 
// A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. 
// If a number is Oddish, return "Oddish". Otherwise, return "Evenish".
// For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", 
// since 4 + 1 = 5.
function oddishOrEvenish(num) {
	let strNum = String(num), total = 0;
	for(let i=0; i<strNum.length; i++) {
		total += Number(strNum[i]);
	}
	return total % 2 == 0 ? "Evenish" : "Oddish";
}
console.log(oddishOrEvenish(43)); //'Oddish'
console.log(oddishOrEvenish(373)); //'Oddish'
console.log(oddishOrEvenish(4433)); //"Evenish"

// Two players draw a pair of numbered cards so that both players can form a 2 digit number. 
// A winner can be decided if one player's number is larger than the other.
// However, there is a rule where a player can swap any one of their cards with any one of the other player's cards in a gamble to get a higher number! 
// Note that it is illegal to swap the order of your own cards. 
// That means if you draw a 1 then a 9, you cannot swap them to get 91.
// Numbered Cards
// Paul's strategy is to always swap his lowest number with the opponent's ten's digit. Return whether this results in Paul winning the round.
// n1 is Paul's number
// n2 is his opponent's number
// Worked Example
// swap_cards(41, 79) ➞ true
// // Paul's lowest number is 1
// // The opponent's ten's digit is 7
// // After the swap: 47 > 19
// // Paul wins the round
// Examples
// swapCards(41, 98) ➞ true

// swapCards(12, 28) ➞ true

// swapCards(67, 53) ➞ false

// swapCards(77, 54) ➞ true
// Notes
// If both of Paul's digits are the same, swap the ten's digit with the opponent's (paul likes to live riskily).
// The cards don't include the number 0.
function swapCards(n1, n2) {
	if(n1 % 10 == 0 || n2 % 10 == 0) {
		return 'Choose another card aside from zero';
	}
	let strNum1 = String(n1), tens = String(n2)[0], lowest = 0;
	if(Number(strNum1[0]) >= Number(strNum1[1])) {
		lowest = strNum1[1];
		return Number(strNum1[0] + tens) > Number(lowest + String(n2)[1])
	} else {
		lowest = strNum1[0];
		return Number(tens + strNum1[0]) > Number(lowest + String(n2)[1]);
	}
}
swapCards(50, 63); //'Choose another card aside from zero'
swapCards(41, 79); //true
swapCards(41, 98); //true
swapCards(12, 28); //true
swapCards(67, 53); //false
swapCards(77, 54); //true