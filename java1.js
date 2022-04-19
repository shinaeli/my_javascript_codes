let num = "#";
while (num < 8) {
	console.log(num);
	num += "#";
}

let x = 0;
while (x <= 100) {
	x = x + 1;
	if ((x % 3 == 0) && (x % 5 != 0)) {
		console.log("Fizz");
	} else if ((x % 5 == 0) && (x % 3 != 0)) {
		console.log("Buzz");
	} else if ((x % 3 == 0) && (x % 5 == 0)) {
		console.log("FizzBuzz");
	} else {
		console.log(x);
	}
}

function minimum() {
	return Math.min;
}

function cost(quantity, price) {
	alert("The cost of your purchase is #"+(quantity * price)+".");
	return;
}
cost(5, 1.85);
cost(3, 9);
cost(37, 4500);


// ask for input
var firstName = prompt("What is your first name?");
// remove the first character from the inputed string
var isolated = firstName.slice(0,1);
// change the isolated character into an uppercase form
var upperCased = isolated.toUpperCase();
// change the left-over characters into lowercase form
var leftOvers = firstName.slice(1, firstName.length);
var leftOversLowerCased = leftOvers.toLowerCase();
// concatenate both parties back together
var output1 = upperCased + leftOversLowerCased;
var middleName = prompt("What is your middle name?");
var isolated = middleName.slice(0,1);
var upperCased = isolated.toUpperCase();
var leftOvers = middleName.slice(1, middleName.length);
var leftOversLowerCased = leftOvers.toLowerCase();
var output2 = upperCased + leftOversLowerCased;
var lastName = prompt("What is your last name?");
var isolated = lastName.slice(0,1);
var upperCased = isolated.toUpperCase();
var leftOvers = lastName.slice(1, lastName.length);
var leftOversLowerCased = leftOvers.toLowerCase();
var output3 = upperCased + leftOversLowerCased;
alert("Your full name is: "+output3+" "+output2+" "+output1+".");

var odd = 10373.378738;
alert(odd.toLocaleString());
alert(Math.ceil(odd));
alert(isNaN(odd));

var name = "David Alake Richard";
alert(name.slice(6,11));
alert(name.lastIndexOf("a"));
alert(name.indexOf("h"));
alert(name.charAt(11));
alert(name.charAt(13));
alert(name.trim());
// alert(concat("Adeleke", "Mary"));
// alert(concat("Togo", "South Africa"));
alert(name.startsWith("D"));
alert(name.endsWith(" "));
