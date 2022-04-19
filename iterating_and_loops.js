// Iterating through an Array
var kids = ["Tayo", "George", "Hannah", "Unai", "Joshua", "David", "Wemimo", "Sunday", "Femi", "Aremu"];
for(let i = 0; i < kids.length; i++) {
  var k = 1;
  var m = k+i;
  console.log(m+" "+kids[i]);
}
console.log(`This list consists of ${kids.length} names.`);
// OR
function display(value, valueIndex, wholeArray) {
  console.log(value);
}
kids.forEach(display);
console.log(`This list consists of ${kids.length} names.`);


// Iterating through an object using the "for" loop
var obj = {
  firstName: "Oluwasina",
  lastName: "Omotosho",
  "place of birth": "Osogbo",
  hobbies: ["Playing computer games", "Rhyming", "Listening to music specifically rap/hip-hop", "Coding"],
  age: 26,
  "marital status": "Single",
  "in a relationship": false,
  friendly: function() {
    console.log(this.firstName+" "+this.lastName+" is friendly to an extent.");
    console.log(`${this.firstName} ${this.lastName} is friendly to an extent.`);
  }
};
for(let value in obj) {
  console.log(obj[value]);
}
obj.friendly();

// Iterating using a "while" loop
var arr = ["deadly", false, true, 20, undefined, null, NaN, 0.65];
let i = 0;
while(i < arr.length) {
  console.log(arr[i]);
  i++;
}
console.log("This array consists of "+arr.length+" elements.");

// Using a "do...while" loop
var arr = ["deadly", false, true, 20, undefined, null, NaN, 0.65];
let i = 0;
do {
  console.log(arr[i]);
  i++;
} while (i < arr.length);