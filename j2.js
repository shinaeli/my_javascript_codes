/*const MILKY = 3;
console.log(MILKY);

const MILKY = 6;*/

function logscope() {
	var ice = 23;

	if(ice) {
		let ice = 14;
		console.log("ice: ", ice);
	}
	
	console.log("ice: ", ice);
}

function question() {
	console.log("Who are you?");
}

question();

var outcome = function multiplyFive(x) {
	var result;
	result = x*5;
	return result;
}
console.log(outcome);
document.body.innerHTML = "<h2>"+"The product of 5 and the provided number is "+outcome(x)+"."+"</h2>";

var test = function arrayLength(k) {
	var result;
	result = k.length;
	return result;
}
console.log(test);
document.body.innerHTML = "<h2>"+"The string contains "+test(k)+" characters."+"</h2>";

var x;
var y;
var hypotenuse = function longest(x,y) {
	var result;
	result = ((x*x)+(y*y))**0.5;
	return result;
}
console.log(hypotenuse);
document.body.innerHTML = "<h2>"+"The hypotenuse of the given triangle is: "+hypotenuse(x,y)+"."+"</h2>";

var first = function firstElement(y) {
	var result;
	result = y[0];
	return result;
}
console.log(first(y));

function School(name,location,type,rank) {
	this.name = name;
	this.location = location;
	this.type = type;
	this.rank = rank;
	this.newRank = function() {
		return ++this.rank;
	}
}
clip = [
	new School("Love and Faith","Dada Estate","Mixed",153)
]

console.log(clip);
console.log(clip[0].newRank());

var x1 = 13;
var x2 = 36;
var y1 = 27;
var y2 = 84;

var gradient = (function (x1,x2,y1,y2) {
	var result;
	result = (y2-y1)/(x2-x1);
	return result;
})(x1,x2,y1,y2);

console.log(gradient);
document.body.innerHTML = "<h2>"+"The gradient is: "+gradient+"."+"<h2>";

function cube() {
	var x = 12;

	function comf() {
		let x = 37;
		console.log(x);
	}
	console.log(x);
} 

document.querySelector(".masthead");
<header class=​"masthead clear">​<div class=​"site-header centered">​…​</div>​<!-- .centered --></header>​
document.querySelectorAll("a")
NodeList(50) [a.skip-link.screen-reader-text, a, a, a, a, a, a, a, a, a.reserve, a, a, a.content-button, a, a.content-button, a, a.content-button, a, a.content-button, a, a.content-button, a, a.content-button, a, a.content-button, a, a.content-button, a.content-button, a.content-button, a.content-button, a.content-button, a.content-button, a.flex-active, a, a, a, a.flex-prev, a.flex-next, a, a, a, a, a, a, a, a.icon-linkedin, a.icon-twitter, a.icon-facebook, a.icon-instagram, a.icon-youtube]
document.querySelector(".menu .has-children a")
<a href=​"#">​…​</a>​"Your Stay"<button class=​"dropdown-toggle" aria-expanded=​"false">​…​</button>​<span class=​"screen-reader-text">​Expand child menu​</span>​::after​</button>​</a>​
document.querySelectorAll(".social-nav a[href*='linkedin.com']")
NodeList [a.icon-linkedin]
document.querySelectorAll(".menu li a, .social-nav li a")
NodeList(13) [a, a, a, a, a, a, a, a.reserve, a.icon-linkedin, a.icon-twitter, a.icon-facebook, a.icon-instagram, a.icon-youtube]
document.querySelector(".main-title").innerHTML
"Welcome to Moonwalk Manor"
document.querySelector(".main-title").outerHTML
"<h2 class="main-title">Welcome to Moonwalk Manor</h2>"
document.querySelector(".main-title").innerHTML = "All your headings belong to us!"
"All your headings belong to us!"
document.querySelector("#showcase").id = "slideshow"
"slideshow"
document.querySelector(".masthead")
<header class=​"masthead clear">​…​</header>​
document.querySelector(".masthead").className
"masthead clear"
document.querySelector(".masthead").classList
DOMTokenList(2) ["masthead", "clear", value: "masthead clear"]0: "masthead"1: "clear"length: 2value: "masthead clear"__proto__: DOMTokenList
document.querySelector(".masthead").classList[1]
"clear"

document.querySelector(".masthead")
<header class=​"masthead clear">​…​</header>​
document.querySelector(".masthead").classList
DOMTokenList(2) ["masthead", "clear", value: "masthead clear"]
document.querySelector(".masthead").classList.add("new-class");
undefined
document.querySelector(".masthead").classList
DOMTokenList(3) ["masthead", "clear", "new-class", value: "masthead clear new-class"]0: "masthead"1: "clear"2: "new-class"length: 3value: "masthead clear new-class"__proto__: DOMTokenList
document.querySelector(".masthead").classList.remove("clear")
undefined
document.querySelector(".masthead").classList
DOMTokenList(2) ["masthead", "new-class", value: "masthead new-class"]0: "masthead"1: "new-class"length: 2value: "masthead new-class"__proto__: DOMTokenList
document.querySelector(".masthead").classList[1]
"new-class"
document.querySelector(".new-class").classList.toggle("masthead")
false
document.querySelector(".new-class").classList.toggle("masthead")
true
document.querySelector(".new-class").classList.contains("masthead")
true
document.querySelector(".new-class").classList.toggle("masthead")

false
document.querySelector(".new-class").classList.contains("masthead")
false

// Calculator
// Addition
function add(num1, num2) {
	return num1 + num2;
}
// Subtraction
function subtract(num1, num2) {
	return num1 - num2;
}
// Multiplication
function multiply(num1, num2) {
	return num1 * num2;
}
// Division
function divide(num1, num2) {
	return num1 / num2;
}
// Exponential
function power(num1, num2) {
	return num1 ** num2;
}
function calculate(num1, num2, operator) {
	if (operator === "add") {
		add();
	} else if (operator === "subtract") {
		subtract();
	} else if (operator === "multiply") {
		multiply();
	} else if (operator === "divide") {
		divide();
	} else if (operator === "power") {
		power();
	} else {
		alert("Provide a proper operator.");
	}
	return;
}
calculate(3, 4, "add");
calculate(3, 4, "subtract");
calculate(3, 4, "multiply");
calculate(3, 4, "divide");
calculate(3, 4, "power");