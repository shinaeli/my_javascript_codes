const marks = {
  fullName: "Mark",
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    return this.mass/(this.height**2);
  }
}
marks.calcBMI();

const johns = {
  fullName: "John",
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    return this.mass/(this.height**2);
  }
}
johns.calcBMI();

if(johns.calcBMI() > marks.calcBMI()) {
  alert(`John's BMI (${johns.calcBMI()}) is higher than Mark's BMI (${marks.calcBMI()}).`);
} else {
  alert(`Mark's BMI (${marks.calcBMI()}) is higher than John's BMI (${johns.calcBMI()}).`);
}

console.log('---Working with Object Methods: Oject.create(), Object.assign(), Object.entries(), Object.values(), Object.keys(), Object.freeze(), Object.isFrozen()---')
const johnDetail = {
  firstName: 'John',
  lastName: 'Omokayode',
  age: 28,
  contact: '08062248619',
  mail: 'jon_619@gmail.com'
}
const davidDetail = Object.create(johnDetail);
davidDetail.firstName = 'David', davidDetail.lastName = 'Adeseye', davidDetail.age = 25, davidDetail.contact = '08141315092', davidDetail.mail = 'david_o@gmail.com';
console.log(davidDetail, johnDetail);


const super_hero = {
  heroName: 'Spiderman',
  realName: 'Peter Parker',
  lover: 'Mary Jane Doe',
  weapon: 'web',
  greet: function() {
    return `I'm ${this.heroName}. My real name is ${this.realName} while my girlfriend's ${this.lover}. I fly and save the world from bad people by using ${this.weapon}. What about you? :)`;
  }
}
super_hero.greet(); //"I'm Spiderman. My real name is Peter Parker while my girlfriend's Mary Jane Doe. I fly and save the world from bad people by using web. What about you? :)"
console.log(Object.keys(super_hero)); //['heroName', 'realName', 'lover', 'weapon', 'greet']
console.log(Object.values(super_hero)); //['Spiderman', 'Peter Parker', 'Mary Jane Doe', 'web', ƒ]
let testArr = Object.entries(super_hero);
for(let arr of testArr) {
  console.log(`${arr[0]}: ${arr[1].toUpperCase()}`);
}
console.log('---OUTPUT: Object Entries(Keys and Values Including the Method)---');
heroName: SPIDERMAN
realName: PETER PARKER
lover: MARY JANE DOE
weapon: WEB
Uncaught TypeError: arr[1].toUpperCase is not a function at <anonymous>:15:36
//OR
console.log('---OUTPUT: Object Entries(Keys and Values Excluding the Method)---');
for(let i=0; i<testArr.length-1; i++) {
  console.log(`${testArr[i][0]}: ${testArr[i][1].toUpperCase()}`);
}
heroName: SPIDERMAN
realName: PETER PARKER
lover: MARY JANE DOE
weapon: WEB
Object.freeze(super_hero);
super_hero['heroName'] = 'Captain America';
console.log(super_hero); //{heroName: 'Spiderman', realName: 'Peter Parker', lover: 'Mary Jane Doe', weapon: 'web', greet: ƒ}
Object.isFrozen(super_hero); //true

const detail1 = {
  firstName: 'Timothy',
  lastName: 'Ajisafe',
  age: 38,
  maritalStatus: 'single',
  origin_LGA: 'Boripe Local Government',
  stateOfOrigin: 'Osun State'
}, detail2 = {
  contact: '08145804328',
  email: 'timo_safe@gmail.com',
  address: '7 Coker Dave Avenue, Magodo GRA Phase 1, Lagos.',
  occupation: 'Banker',
  office: 'Fidelity Bank Plc',
  officeLocation: 'Osogbo',
  job_description: function() {
    return `${this.firstName} ${this.lastName} is currently employed and works as a ${this.occupation} at ${this.office}, ${this.officeLocation}, ${this.stateOfOrigin}. He also hails from ${this.origin_LGA}.`;
  }
}
const timos_info = Object.assign(detail1, detail2);
console.log(timos_info);
timos_info.job_description();