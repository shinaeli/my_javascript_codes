const student1 = {
  studentName: 'Owolabi Eniola',
  school: 'Akande Memorial High School'
}
// student1.report(14, 'SS1');

const use = function report(age, studentClass) {
  console.log(`${this.studentName} is a ${age} years old ${studentClass} student of ${this.school}.`);
}

use.call(student1, 14, 'SS1');

const student2 = {
  studentName: 'Adigun Akinlade',
  school: 'Oluomo Grammar School'
}

use.call(student2, 16, 'SS3');
use.apply(student2, [16, 'SS3']);  //The 'apply' method receives the parameters as an array



























//'call, apply and bind' method are used to call an external function on an object. They all accepts the object as an argument
//They are used as methods on the function declared.
const auto = {
  fullName: 'Seye Adewale',
  sex: 'female',
  origin: 'Ijebu-Igbo, Ogun State'
}
function describer() {
  return `${this.fullName} was born in ${this.origin}; a ${this.sex}.`;
}
describer.call(auto); //'Seye Adewale was born in Ijebu-Igbo, Ogun State; a female.'
describer.apply(auto); //'Seye Adewale was born in Ijebu-Igbo, Ogun State; a female.'
let bindedResult = describer.bind(auto);
bindedResult(); //'Seye Adewale was born in Ijebu-Igbo, Ogun State; a female.'
function further_description(birthYear, currentYear) {
  return `${this.fullName} is ${currentYear - birthYear}years old; born in ${birthYear}.`;
}
//'apply' method accepts any other argumets aside the object as an array
further_description.apply(auto, [1976, 2022]); //'Seye Adewale is 46years old; born in 1976.'
//'call' method accepts all arguments including the object as a list
further_description.call(auto, 1976, 2022); //'Seye Adewale is 46years old; born in 1976.'





