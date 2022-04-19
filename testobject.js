var school = [
school1 = {
	junior_School: 3,
	js1: 45,
	js2: 57,
	js3: 62,
	students: ["troublesome", "stubborn", "respectful", "hardworking"],
	theme: function motto() {
		return "Welcome to Junior Secondary School. We are "+this.students[2]+".";
	}
}, school2 = {
	senior_School: 2,
	ss1: [12, "disobedient", "silly", "annoying", "dumb", "lazy"],
	ss2: ["funny", 9, "respectful", "lazy"],
	theme: function greeting() {
		return "Welcome to Senior Secondary School. We are "+this.ss2[3]+".";
	}
}
]
school[1].theme();
delete school[1].senior_School;
school[1].unshift(senior_School: 2);
Object.keys(school2);
Object.keys(school1);


var vehicle = {
	owersName: "John Smith",
	chasis_No: "451265-458",
	engine_No: "6565-5656-98",
	makeName: "Stealth",
	registrationDate: "1 July 2019",
	vehiclePrice: 145000,
	color: "Burgundy",
	yearOfManufacture: "2018", 
}

delete vehicle.yearOfManufacture;
console.log(vehicle);

var x = prompt("Enter the number: ");
var k = prompt("Enter the starting multiplier: ");
var m = prompt("Enter the final multiplier: ");
function times(x,k,m) {
	if (x>=0) {
		let i=k;
		while (i<=m) {
			console.log(x*i);
			i+=1;
		}
	}
	else {
		alert("Enter a valid number.")
	}
}

function cm2inch(x) {
	y = x*0.394;
	k = Math.round(y);
	return k + "";
}

var college = ["Dayo",12,"Moji","Aduke","Real198","Captain","Class Rep"]
for (i=0; i<college.length; i++) {
	console.log(i, college[i]);
}

var x;
function countBs(x) {
	return x.length;
}

var company = [];
company[0] = [];
company[0][0] = "Shina";
company[0][1] = 25;
company[0][2] = "Osogbo";
company[1] = [];
company[1][0] = "Shewa";
company[1][1] = 22;
company[1][2] = "Agege";
company[2] = [];
company[2][0] = "David";
company[2][1] = 27;
company[2][2] = "Mowe";

console.log(company);


//Question 1 Solution
var centigrade;
centigrade = prompt("Enter a centigrade value: ", 0);
var degCent;
degCent = parseFloat(centigrade);
var degFahren;
degFahren = 9 / 5 * degCent + 32;
console.log("Your fahrenheit value is "+degFahren+"F.");


// Question 2 Solution
var firstNumber = parseFloat(prompt("Enter the first number",""));
var secondNumber = parseFloat(prompt("Enter the second number",""));
//The code failed initially because the firstNumber and secondNumber variables were not parsed into a float or integer value.
var theTotal = firstNumber + secondNumber;
document.write(firstNumber + " added to " + secondNumber +
" equals " + theTotal);

var game = ["race", "soccer", "pes", "fifa", "nfs"]; 
undefined
game.length;
5
game.reverse();
(5) ["nfs", "fifa", "pes", "soccer", "race"]
game.pop();
"race"
game;
(4) ["nfs", "fifa", "pes", "soccer"]
game.push("race");
5
game;
(5) ["nfs", "fifa", "pes", "soccer", "race"]
game.reverse();
(5) ["race", "soccer", "pes", "fifa", "nfs"]
game;
(5) ["race", "soccer", "pes", "fifa", "nfs"]
game.unshift("call of duty");
6
game;
(6) ["call of duty", "race", "soccer", "pes", "fifa", "nfs"]
game.shift();
"call of duty"
game;
(5) ["race", "soccer", "pes", "fifa", "nfs"]
game.unshift("call of duty");
6
game;
(6) ["call of duty", "race", "soccer", "pes", "fifa", "nfs"]
game.splice(1, 1);
["race"]
game;
(5) ["call of duty", "soccer", "pes", "fifa", "nfs"]
game.slice(2, 1);
[]
var new = game.slice();
VM826:1 Uncaught SyntaxError: Unexpected token 'new'
var cal game.slice();
VM885:1 Uncaught SyntaxError: Unexpected identifier
var cal = game.slice();
undefined
cal;
(5) ["call of duty", "soccer", "pes", "fifa", "nfs"]
console.log("Cal :" cal);
VM1017:1 Uncaught SyntaxError: missing ) after argument list
console.log("Cal :", cal);
VM1095:1 Cal : (5) ["call of duty", "soccer", "pes", "fifa", "nfs"]
undefined
console.log("Cal :"+cal);
VM1179:1 Cal :call of duty,soccer,pes,fifa,nfs
undefined
console.log("Cal :" +cal);
VM1256:1 Cal :call of duty,soccer,pes,fifa,nfs
undefined
console.log("Cal :"+ cal);
VM1335:1 Cal :call of duty,soccer,pes,fifa,nfs
undefined
game.indexOf("race");
-1
game.indexOf("call of duty");
0
game.indexOf("nfs")
4
game.indexOf("pes");
2
game.indexOf("soccer");
1
game.indexOf("fifa");
3
document.body.innerHTML = "<h1>"+game.indexOf("soccer")+"</h1>";
"<h1>1</h1>"
document.body.innerHTML = "<h1>"+"The index of nfs is :"+game.indexOf("soccer")+"</h1>";
"<h1>The index of nfs is :1</h1>"
var complete = game.join(" | ");
undefined
console.log(complete);
VM1939:1 call of duty | soccer | pes | fifa | nfs
undefined
document.body.innerHTML = "<h3>"+"The new display is :"+complete+"</h3>";
"<h3>The new display is :call of duty | soccer | pes | fifa | nfs</h3>"
document.body.innerHTML = "<h2>"+"The new display is :"+" "+complete+"</h2>";
"<h2>The new display is : call of duty | soccer | pes | fifa | nfs</h2>"

var month = ["January", "February", "March", "April", "August", "November"];
undefined
month.indexOf("August");
4
month.indexOf("July");
-1
month.push("December");
7
month;
(7) ["January", "February", "March", "April", "August", "November", "December"]
month.length;
7
month.splice(2,1);
["March"]
month
(6) ["January", "February", "April", "August", "November", "December"]
month[6] = "March";
"March"
month;
(7) ["January", "February", "April", "August", "November", "December", "March"]
month[7] = "May";
"May"
month
(8) ["January", "February", "April", "August", "November", "December", "March", "May"]
month[8] = "September";
"September"
month
(9) ["January", "February", "April", "August", "November", "December", "March", "May", "September"]
month[9] = "July";
"July"
month;
(10) ["January", "February", "April", "August", "November", "December", "March", "May", "September", "July"]
month[10] = "June";
"June"
month;
(11) ["January", "February", "April", "August", "November", "December", "March", "May", "September", "July", "June"]
month[11] = "October";
"October"
month
(12) ["January", "February", "April", "August", "November", "December", "March", "May", "September", "July", "June", "October"]
var silo = month.join( || );
VM1066:1 Uncaught SyntaxError: Unexpected token '||'
var silo = month.join(" || ");
undefined
document.body.innerHTML = "<h2>"+"The new display is :"+" "+silo+"</h2>";
"<h2>The new display is : January || February || April || August || November || December || March || May || September || July || June || October</h2>"
var step = month.reverse();
undefined
document.body.innerHTML = "<h1>"+"This is the reversal of the month array: "+step+"</h1>";
"<h1>This is the reversal of the month array: October,June,July,September,May,March,December,November,August,April,February,January</h1>"

var times = function multiplication (a,b) {var result; result = a*b; return result;}
undefined
console.log(multiplication(3,12));
VM1166:1 36
undefined
multiplicat

ion(4,13);
52
document.body.innerHTMl = "<h2>"+"The product of 3 and 14 is: "+times(3,14)+"."+"</h2>";
"<h2>The product of 3 and 14 is: 42.</h2>"
document.body.innerHTML = "<h2>"+"The product of 3 and 14 is: "+times(3,14)+"."+"</h2>";
"<h2>The product of 3 and 14 is: 42.</h2>"
var x1 = 5;
undefined

var school = new Object();

school.name = "Love and Faith Model College";
school.location = "Dada Estate";
school.city = "Osogbo";
school.studentsPopulation = 451;
school.numberOfTutors = 15;
school.greeting = function(newStudent) {
	console.log("You are welcome. "+newStudent+".");
}

school.greeting = function(newStudent) {
	var result;
	result = "You are welcome. "+newStudent+"."+" Congratulations on your newly secured admission into this great citadel. God bless you.";
	return result;

	document.body.innerHTML = "<h2>"+school.greeting(newStudent)+"</h2>";
};

var school = new Object();

school.name = "Love and Faith Model College";
school.location = "Dada Estate";
school.city = "Osogbo";
school.studentsPopulation = 451;
school.numberOfTutors = 15;
school.greeting = function(newStudent) {
	console.log("You are welcome. "+newStudent+".");
}
ƒ (newStudent) {
	console.log("You are welcome. "+newStudent+".");
}
school
{name: "Love and Faith Model College", location: "Dada Estate", city: "Osogbo", studentsPopulation: 451, numberOfTutors: 15, …}city: "Osogbo"greeting: ƒ (newStudent)location: "Dada Estate"name: "Love and Faith Model College"numberOfTutors: 15studentsPopulation: 451__proto__: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()arguments: (...)caller: (...)length: 1name: "hasOwnProperty"__proto__: ƒ ()[[Scopes]]: Scopes[0]isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
school.hasOwnProperty("studentsPopulation");
true
school.hasOwnProperty("greeting");
true
school.numberOfTutors = 22;
22
school;
{name: "Love and Faith Model College", location: "Dada Estate", city: "Osogbo", studentsPopulation: 451, numberOfTutors: 22, …}
school.greeting("Adeolu Olayemi");
VM103:9 You are welcome. Adeolu Olayemi.
undefined
school.greeting = function() {"You are welcome. "+newStudent+"."+" Congratulations on your newly secured admission into this great citadel. God bless you."};
ƒ () {"You are welcome. "+newStudent+"."+" Congratulations on your newly secured admission into this great citadel. God bless you."}
school
{name: "Love and Faith Model College", location: "Dada Estate", city: "Osogbo", studentsPopulation: 451, numberOfTutors: 22, …}
school.greeting("Adeolu Olayemi");
VM652:1 Uncaught ReferenceError: newStudent is not defined
    at Object.school.greeting (<anonymous>:1:51)
    at <anonymous>:1:8
school.greeting @ VM652:1
(anonymous) @ VM683:1
school.greeting = function(newStudent) {"You are welcome. "+newStudent+"."+" Congratulations on your newly secured admission into this great citadel. God bless you."};
ƒ (newStudent) {"You are welcome. "+newStudent+"."+" Congratulations on your newly secured admission into this great citadel. God bless you."}
school
{name: "Love and Faith Model College", location: "Dada Estate", city: "Osogbo", studentsPopulation: 451, numberOfTutors: 22, …}
school.greeting("Adeolu Olayemi");
undefined
school.greeting = function(newStudent) {console.log("You are welcome. "+newStudent+"."+" Congratulations on your newly secured admission into this great citadel. God bless you.")};
ƒ (newStudent) {console.log("You are welcome. "+newStudent+"."+" Congratulations on your newly secured admission into this great citadel. God bless you.")}
school
{name: "Love and Faith Model College", location: "Dada Estate", city: "Osogbo", studentsPopulation: 451, numberOfTutors: 22, …}
school.greeting("Adeolu Olayemi");
VM780:1 You are welcome. Adeolu Olayemi. Congratulations on your newly secured admission into this great citadel. God bless you.
undefined