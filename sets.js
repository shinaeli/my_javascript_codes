const cooks = ['Fred', 'Jorginho', 14, 'Mariah', 'Kimberly', 65, 'Fathiat', 'Convenant', 20, 35, 'Samuels Derrick', 14, 'Mariah', 'Fred', 'Fathiat', 'Fathiat', 14, 65, 'Kimberly'];

let setsDisp = new Set(cooks);
console.log(setsDisp);
console.log(setsDisp.has('Kimberly'));  //true
console.log(setsDisp.has('George'));  //false
console.log(setsDisp.has(33));  //false
console.log(setsDisp.has('Samuels Derrick'));  //true
console.log(setsDisp.has('Convenant'));  //true
console.log(setsDisp.size);  //11

for(let elem of setsDisp) {  //A set is an iterable
  console.log(elem);
}

let output = [...setsDisp];  //This turns the sets into an array
console.log(output); //['Fred', 'Jorginho', 14, 'Mariah', 'Kimberly', 65, 'Fathiat', 'Convenant', 20, 35, 'Samuels Derrick']

let set = new Set([12, 5, 8, 14, 8, 8, 12, 7, 5, 2, 5, 10, 10, 3, 6, 5]);
console.log(set); //Set(9) {12, 5, 8, 14, 7, 2, 10, 3, 6}
set.has(15); //false
set.has(3); //true
set.size; //9
set.delete(100); //false
set.delete(5); //true
console.log(set);  //Set(8) {12, 8, 14, 7, 2, 10, 3, 6}

let studentNames = new Set();
studentNames.add('Goke');
studentNames.add('Kemi');
studentNames.add('Dasola');
studentNames.add('George');
studentNames.add('Sola');
studentNames.add('Goke');
studentNames.add('Lola');
studentNames.add('Kemi');
studentNames.add('Goke');
studentNames.add('Laolu');
studentNames.add('Goke');
studentNames.add('Dayo');
studentNames.add('Wumi');
studentNames.add('George');
studentNames.add('Laolu');
studentNames.add('Tolulope');
console.log(studentNames); //Set(10) {'Goke', 'Kemi', 'Dasola', 'George', 'Sola', …}
for(let entries of studentNames.entries()) {
  console.log(`${entries[0]}: ${entries[1]}`);
}
// Goke: Goke
// Kemi: Kemi
// Dasola: Dasola
// George: George
// Sola: Sola
// Lola: Lola
// Laolu: Laolu
// Dayo: Dayo
// Wumi: Wumi
// Tolulope: Tolulope
