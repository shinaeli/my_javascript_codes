var k = function cart(x,y) { return (x*x)+(y*y);} 
undefined
k(3,6);
45
var m = Math.sqrt(k);
undefined
var m = Math.sqrt(k(3,6));
undefined
var k = function cart(x,y) {(x*x)+(y*y);} 
undefined
var k = function cart(x,y) {
	(x*x)+(y*y); 
	return Math.sqrt((x*x)+(y*y));
} 
undefined
k(3,6);
6.708203932499369
var k = function cart(x,y) { 
	return Math.sqrt((x*x)+(y*y));
} 
undefined
k(6,3);
6.708203932499369
k(10.6, 2.1);
10.806016842481785


function checkAge(age) {
	if (age > 18) {
	return true;
	} else {
	return confirm('Do you have your parents permission to access this page?');
	}
	}

function checkAge(age) {
	return age > 18 ? true : confirm("Do you have your parents permission to access this page?");
}
checkAge(20);


var min = function(a,b) {
	return Math.min(a, b);
}
alert(min(2, 5));
alert(min(3, -1));
alert(min(1, 1));


var x = prompt("Enter any integer of your choice:");
var n = prompt("Provide a power not less than 1:");
function pow(x, n) {
	if(n < 1) {
		alert("Your input is incorrect.");
	} else {
		alert(x**n);
	}
};
pow(x, n);


let ask = (question, yes, no) => {
	if(confirm(question)) {
		yes();
	} else {
		no();
	}
	return;
};

ask(
	"Do you agree?",
	function() { alert("You agreed."); },
	function() { alert("You canceled the execution."); }
	);


