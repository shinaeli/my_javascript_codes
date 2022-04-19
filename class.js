// Classes prior to ES6
function Person(name) {   //Creating a 'Person' constructor functionwith a property amen called 'name'
  this.name = name;
}

Person.prototype.getName = function () { //The 'getName' function is assigned to the prototype so that it can be shared by all instances of the 'Person' type
  return this.name;
}

var john = new Person("John Doe");  //The 'john' object, hence, is an instance of the 'Person' and 'Object' through prototypical inheritance
console.log(john.getName());

console.log (john instanceof Person);
console.log (john instanceof Object);


//ES6 Class Declaration
let john = new Person('John Doe'); //Uncaught ReferenceError: Person is not defined
class Person {
  constructor(name) {  //The 'constructor()' is where you initialize the properties of an instance
    this.name = name;
  }
  getName() {  //The 'getName()' function is a method of the 'Person' class
    return this.name;
  }
}
let john = new Person('John Doe');  //JavaScript automatically call the 'constructor()' of the 'Person' class
let john = Person('John Doe');  //  Uncaught TypeError: Class constructor Person cannot be invoked without 'new'
console.log(john.getName());
console.log(typeof Person);  //This is to verify that classes are special functions
console.log(john instanceof Person);
console.log(john instanceof Object);

//NOTES:
// 1. classes are not hoisted like function declarartions.
// 2. All codes inside a class automatically operates in 'strict' mode.
// 3. Calling the class constructor without the 'new' operator will result in an error.

const trial = new Map();
trial.set('school', 'OSCCO');
trial.set('hadAs', 5);
console.log(trial);
const casters = trial.values();
for(let looper of casters) {
    console.log(looper);
}
let keyers = trial.keys();
for(let keyes of keyers) {
  console.log(keyes);
}
console.log(trial.size);  //2
console.log(trial.get('hadAs'));  //5

const dig = new Map([['cold', true], ['stateOrigin', 'Arizona'], ['population', 1562075]]);
console.log(dig);
dig.set(184, 'Kampari Wine');
console.log(dig);
for(let keyes of dig.keys()) {
  console.log(keyes);
}
for(let valuers of dig.values()) {
  console.log(valuers);
}

class Title {
  constructor(title) {  //Initialising the 'title' parameter by using the 'constructor'
    this.say = title;
  }
  sayTitle() {  //Initialising the 'sayTitle' as a method of the class 'Title'
    return this.say;
  }
}
let caller = new Title('Mr. Wasiu Jones');  //Creating 'caller' as an instance of the 'Title' class
console.log(caller.sayTitle());

class WelcomeGuests {
  constructor(guest) {
    let display = `Welcome to the party ${guest}.`
    this.greet = alert(display);
  }
  greetGuests() {
    return guest;
  }
}
let firstGuests = new WelcomeGuests('Mr. and Mrs. Adewuyi');
firstGuests.greetGuests();


class Rapper {
  constructor(stageName, birthName, city_of_origin, birthYear, numberOfAlbums, fans)  {
    this.rapper = stageName;
    this.birthName = birthName;
    this.origin = city_of_origin;
    this.birthYear = birthYear;
    this.albums = numberOfAlbums;
    this.lovers = fans;
  }

  age = function () {
    return 2021 - this.birthYear;
  }
}
Rapper.prototype.grammyAwards = function (grammyViewers) {
  return (this.albums * this.lovers) / grammyViewers;
}

const nas = new Rapper('Nas', 'Nasir bin Oludara Jones', 'Queens, New York', 1973, 14, 6528109);
const game = new Rapper('The Game', 'Jayceon Taylor', 'Compton, Los Angeles, California', 1979, 10, 4938100);
const jay_z = new Rapper('Jay-Z', 'Shawn Corey Carter', 'Brooklyn, New York', 1969, 14, 8622905);
const tip = new Rapper('T.I.', 'Clifford Harris Graham', 'Atlanta, Georgia', 1980, 8, 6037891);

console.log(nas, game, jay_z, tip);
nas.age(), game.age(), jay_z.age(), tip.age();
nas.grammyAwards(151020299);
// game.grammyAwards(151020299), jay_z.grammyAwards(151020299), tip.grammyAwards(151020299);
// console.log(jay_z.__proto__ == Rapper.prototype);

class Human {
  constructor(firstName, lastName, nationality, birthYear, monthlySalary, tax) {  //Always declare methods and inside the class block
    this.firstName = firstName;
    this.lastName = lastName;
    this.nationality = nationality;
    this.birthYear = birthYear;
    this.monthlySalary = monthlySalary;
    this.tax = tax
  }

  fullName () {
    return `The fullname is: ${this.firstName} ${this.lastName}.`;
  }

  age () {
    return `${this.firstName} ${this.lastName} is ${2022 - this.birthYear}years old.`;
  }

  grossSalary () {
    return 12*(this.monthlySalary - this.tax);
  }
}

let person1 = new Human('Tayo', 'Adeoye', 'American', 1974, 150000, 15893), person2 = new Human('Feyikemi', 'Oluwanisola', 'British', 1986, 250385, 20467), person3 = new Human('Ganiyu', 'Coker', 'Nigerian', 1990, 80365, 5930);
// console.log(person1, person2, person3);
// person1.fullName(), person2.fullName(), person3.fullName();
// person1.age(), person2.age(), person3.age();
// person1.grossSalary(), person2.grossSalary(), person3.grossSalary();
let testedObjectArray = [person1, person2, person3];
// console.log(testedObjectArray);
let sumTotalSalary = 0;
for(dude of testedObjectArray) {
  console.log(dude)
  for(pals in dude) {
    console.log(`${pals}: ${dude[pals]}`);
  }
}

for(let i=0; i<testedObjectArray.length; i++) {
  sumTotalSalary+=testedObjectArray[i].monthlySalary;
}
console.log(sumTotalSalary);  //480750 O(n)

// Classes of Interview and Interviewer
let Interview = class {
  constructor (nameOfApplicant, role, companyName, timeOfArrival, modeOfDressing, offeredRole) {
    this.nameOfApplicant = nameOfApplicant,
    this.role = role,
    this.companyName = companyName,
    this.timeOfArrival = timeOfArrival,
    this.modeOfDressing = modeOfDressing,
    this.offeredRole = offeredRole
  }

  static nameOfFirm() {
    return `${this.nameOfApplicant} applied for the position of ${this.role} at ${this.companyName}.`
  }

  dressedWell() {
     return (this.modeOfDressing !== 'corporate') ? `No, ${this.nameOfApplicant} didn't dress well to the interview.` : `Yes, ${this.nameOfApplicant} dressed well to the interview.`
    }
    
    get applicantName() {
      return this.nameOfApplicant;
    }

    set offerAccepted(newRole) {
    let appliedRole = this.role;
    return (this.offeredRole === true) ? `Congratulations! ${this.nameOfApplicant} on your new position as ${appliedRole} at ${this.companyName}. Your next position will be ${this.role}.` : `Please, re-apply for the role of ${appliedRole} before you can get promoted to the ${this.role} position. Thank you.`
    }
}

class Interviewer extends Interview {
  constructor (nameOfApplicant, role, companyName, timeOfArrival, modeOfDressing, offeredRole, fullName, complexion, entryYear) {
    super(nameOfApplicant, role, companyName, timeOfArrival, modeOfDressing, offeredRole)
    this.fullName = fullName;
    this.complexion = complexion;
    this.entryYear = entryYear;
  }

  calcWorkYears() {
    return 2022 - this.entryYear;
  }

  description() {
    return `${this.fullName} is a staff of ${this.companyName}; working for ${this.calcWorkYears()} years.`;
  }
}

let interviwer1 = new Interviewer('Aduke Omobiyi', 'Receptionist', 'Cledoral View Hotels', '9:42am', 'non-corporate', false, 'Fred Idowu', 'dark', 2012);
console.log(interviwer1);
interviwer1.calcWorkYears();
interviwer1.description();
// Interview.nameOfFirm();
// applicant1.nameOfFirm();
// applicant1.dressedWell();
// applicant1.applicantName;
// applicant1.offerAccepted = 'Manager';

// Classes of Student and LawStudent
class Student {
  constructor(fName, lName, department, birthYear) {
    this.fName = fName,
    this.lName = lName,
    this.department = department,
    this.birthYear = birthYear
  }

  age() {
    return 2022 - this.birthYear;
  }

  set changebirthYear(newbirthYear) {
    return this.birthYear = newbirthYear;
  }

  set changeCourse(newCourse) {
    return this.department = newCourse;
  }
}

class LawStudent extends Student {
  constructor(fName, lName, department, birthYear, level, sex) {
    super(fName, lName, department, birthYear)
    this.sex = sex,
    this.level = level
  }

  walk() {
    return `${this.fName} ${this.lName} is a ${this.sex} ${this.level}level ${this.department} student who treks to lectures everyday.`;
  }
}

let student1 = new Student('Grace', 'Davies', 'Law', 1998);
console.log(student1);
let seriousStudent = new LawStudent('Grace', 'Davies', 'Law', 1998, 200, 'female');
console.log(seriousStudent);
seriousStudent.walk();
seriousStudent.age();
seriousStudent.changeCourse = 'Physics', seriousStudent.changebirthYear = 1996;
console.log(seriousStudent);
seriousStudent.walk();
