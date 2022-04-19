const Student = function (firstName, lastName, birthYear) {
  this.firstName = firstName, this.surname = lastName, this.birthYear = birthYear;
}
// new Student;
//The 'new' keyword does the following:
//1. Creates an empty '{}' object AKA an instance
//2. Creates a 'this' keyword for the empty '{}' object
//3. Links the empty object to its prototype
//4. Calls the constructor function
const firstStudent = new Student('Adeola', 'Douglas', 1973);
const secondStudent = new Student('Tayo', 'Kolawole', 1992);
const thirdStudent = new Student('Desmond', 'Tejuoso', 2000);
// console.log(firstStudent, secondStudent, thirdStudent);
Student.prototype.age = function() {
  return 2021 - this.birthYear;
};
// console.log(firstStudent.age(), secondStudent.age(), thirdStudent.age());
console.log(Student.prototype);
console.log(firstStudent.__proto__);
console.log(firstStudent.__proto__.age.length);  //0
console.log(firstStudent.__proto__  === Student.prototype);  //true
console.log(firstStudent.__proto__.isPrototypeOf(Student));  //false
console.log(thirdStudent.hasOwnProperty('age')); //false
console.log(secondStudent.hasOwnProperty('surname'));  //true...This checks if the property is not a prototypal property
console.log(firstStudent.hasOwnProperty('firstName')); //true
Student.prototype.class = 'JSS3';
console.log(secondStudent.class); //JSS3
console.log(thirdStudent.hasOwnProperty('class')); //false
console.log(Student.prototype.__proto__);
console.log(Student.prototype.__proto__ === Object.prototype);  //true
console.log(Object.__proto__);  //This is the root prototype of the javascript built-in Object
console.log(Object.__proto__.prototype); //undefined



const Person = function (firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods, family) {
  this.firstName = firstName, this.lastName = lastName, this.favoriteColor = favoriteColor, this.favoriteNumber = favoriteNumber, this.favoriteFoods = favoriteFoods, this.familyName = family;
}
Person.prototype.fullName = function () {
  return this.firstName+' '+this.lastName;
}
Person.prototype.addToFamily = function () {
  return this.familyName.push(this);
}
const elisha = new Person('Oluwasina', 'Omotosho', 'yellow', '26', ['Rice', 'Pounded Yam with Vegetable', 'Egg with Beans'], []);
// console.log(elisha);
elisha.fullName();
elisha.addToFamily();
elisha.familyName.length;
elisha.familyName;



const Triangle = function (a, b, c) {
  this.firstSide = a, this.secondSide = b, this.thirdSide = c;
}
Triangle.prototype.shape = function () {
  return 'triangle';
}
Triangle.prototype.getPerimeter = function () {
  return this.firstSide+this.secondSide+this.thirdSide;
}
const shape1 = new Triangle(1,2,3);
console.log(shape1);
shape1.shape();
shape1.getPerimeter();
console.log(shape1.__proto__);
console.log(shape1.__proto__.__proto__);
console.log(shape1.__proto__.constructor);
console.log(shape1.constructor === Triangle); //true
// console.log(shape.isPrototypeOf(shape1));  //true
for (let input of Object.values(shape1)) {  //Displays the values that are located in the 'shape1' array of keys
  console.log(input);
}
for(let keys of Object.keys(shape1)) {    //Displays the keys that are located in the 'shape1' array of keys
  console.log(keys);
}
for(let letters of Object.entries(shape1)) {    //Displays the entries that are located in the 'shape1' array of entries
  console.log(letters);
}
for(let entry of Object.entries(shape1.__proto__)) {  //Displays the entires that are located in the 'shape1' prototype
  console.log(entry);
}

//Jonas Schedtmann Constructor Function Coding Challenge
const Car = function (maker, speed) {
  this.maker = maker, this.speed = speed;
}
Car.prototype.accelerate = function () {
  return `${this.maker} is going at ${this.speed + 10}km/h`;
}
Car.prototype.brake = function () {
  return `${this.maker} is going at ${this.speed - 5}km/h`;
}
const car1 = new Car('BMW', 120), car2 = new Car('Mercedes', 95); 
let car1AccSpeed = car1.accelerate(), car2AccSpeed = car2.accelerate();
let car1DecSpeed = car1.brake(), car2DecSpeed = car2.brake();
console.log(car1, car2, car1AccSpeed, car2AccSpeed, car1DecSpeed, car2DecSpeed);
console.log(car1.__proto__);
console.log(car1.__proto__.__proto__);
console.log(car1.__proto__.__proto__.__proto__); //null
