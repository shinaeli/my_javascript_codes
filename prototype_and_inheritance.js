//Every javascript object has an inner property called 'prototype'. It contains all the properties and methods of an object
const johnDetail = {
    firstName: 'John',
    lastName: 'Omokayode',
    age: 28,
    contact: '08062248619',
    mail: 'jon_619@gmail.com'
}
console.log(Object.getPrototypeOf(johnDetail)); //{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
//The same principle applies to an array as well because an array is an object just like javascript's in-built date object
let schoolClasses = ['JSS1', 'JSS2', 'JSS3', 'SSS1', 'SSS2', 'SSS3'];
console.log(Object.getPrototypeOf(schoolClasses)); //[constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
//A constructor function is a function used to create an object but the object created is called an 'instance'
function Car(brandName, country) {
    this.brandName = brandName; //The 'this' keyword refers to the 'object instance' that is created by the constructor function
    this.country = country;
}

let car1 = new Car('Ford', 'United States of America');
let car2 = new Car('Honda', 'Japan'), car3 = new Car('Volvo', 'Germany');
console.log(car1, car2, car3);
console.log(Object.getPrototypeOf(car1)); //{constructor: ƒ}
console.log(Car.prototype); //{constructor: ƒ}
Car.prototype.description = function() { //A method is created by assigning the property to the constructor function's prototype
    return `I'm ${this.brandName}; made in ${this.country}.`;
}
console.log(car1.description()); //I'm Range Rover; made in United States of America.
console.log(car2.description()); //I'm Honda; made in Japan.
console.log(car3.description()); //I'm Volvo; made in Germany.

function RangeModel(brandName, country, model, max_speed, gear) {
    Car.call(this, brandName, country)
    this.model = model;
    this.max_speed = max_speed;
    this.gear = gear;
}

function HondaModel(brandName, country, model, max_speed, seats) {
    Car.call(this, brandName, country)
    this.model = model;
    this.max_speed = max_speed;
    this.seats = seats;
}
HondaModel.prototype.highlight = function() {
    return `I'm ${this.brandName}; made in ${this.country}. My current model is ${this.model} having ${this.seats} plus a maximum speed of ${this.max_speed}.`;
}

function VolvoModel(brandName, country, model, max_speed, airConditioning) {
    Car.call(this, brandName, country)
    this.model = model;
    this.max_speed = max_speed;
    this.airConditioning = airConditioning;
}

let range = new RangeModel('Range Rover', 'United States of America', 'Rover2RGR', '300miles/hr');
console.log(range); //RangeModel {brandName: 'Range Rover', country: 'United States of America', model: 'Rover', max_speed: '300miles/hr'}
let honda = new HondaModel('Honda', 'Japan', 'HondaH39', '220miles/hr', '4 leathered seats');
console.log(honda); //HondaModel {brandName: 'Honda', country: 'Japan', model: 'HondaH39', max_speed: '220miles/hr', seats: '4 leathered seats'}
let volvo = new VolvoModel('Volvo', 'Germany', 'VLV107', '200miles/hr', 'automated');
console.log(volvo); //VolvoModel {brandName: 'Volvo', country: 'Germany', model: 'VLV107', max_speed: '200miles/hr', airConditioning: 'automated'}
// console.log(range.description()); //Error because the 'call' method doesn't copy all the properties and methods
Object.setPrototypeOf(RangeModel.prototype, Car.prototype);
console.log(range.description()); //I'm Range Rover; made in United States of America.
Object.setPrototypeOf(HondaModel.prototype, Car.prototype);
console.log(honda.description()); //I'm Honda; made in Japan.
Object.setPrototypeOf(VolvoModel.prototype, Car.prototype);
console.log(volvo.description()); //I'm Volvo; made in Germany.
console.log(honda.highlight()); //I'm Honda; made in Japan. My current model is HondaH39 having 4 leathered seats plus a maximum speed of 220miles/hr.


