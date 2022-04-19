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