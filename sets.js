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


// A set is an unordered collection of unique items i.e. it does't contain duplicates
const test = new Set([12, 3, 5, 5, 7, 'James', 12, 'Moses', 5, 8, 3, 'James', 46, 20, 'Ada', 29, 9, 'Ada', 'Tayo', 150]);
console.log(test); //Set(14) {12, 3, 5, 7, 'James', …}
console.log(test.has('Kola')); //false
//The 'has' method checks if the element or item passed as an argument exists in the set
console.log(test.has(5)); //true
console.log(test.has('Moses Orimolade')); //false
console.log(test.has('Ada')); //true
console.log(test.has(12)); //true
console.log(test.has('18')); //false
console.log(test.has('George')); //false
console.log(test.size); //14
test.add('Wemimo');
test.add(10);
// The 'add' method is used to add an element or item to a set.
test.add('Wemimo');
// 'Wemimo' already exists in the set 'test'. So, the above statement is ignored.
test.add('007');
console.log(test.size); //17
// The 'size' method counts the number of items that are present in a set.
test.delete(7);
test.delete('Ada');
// The 'delete' method is used to remove an element or item from a set.
console.log(test.size); //15
test.add('Olumide');
test.add('Olumide');
console.log(test.size); //16
const testArr = [...test];
// The 'spread' operator is also used to convert a set into an array
console.log(testArr); //[12, 3, 5, 'James', 'Moses', 8, 46, 20, 29, 9, 'Tayo', 150, 'Wemimo', 10, '007', 'Olumide']
for (let item of test) {
  console.log(item);
}
// 12
// 3
// 5
// James
// Moses
// 8
// 46
// 20
// 29
// 9
// Tayo
// 150
// Wemimo
// 10
// 007
// Olumide

// const artClass = new Set('Tomi', 'Fisayo', 'James', 'Lola', 'Fisayo', 'Mathematics', 'Joshua', 'Tola', 'Dayo', 'Government', 'English Language', 'Biology'); 
// const scienceClass = new Set('Tunde', 'Joshua', 'Mathematics', 'Chukwudi', 'Funmilayo', 'Dayo', 'English Language', 'Physics', 'Chemistry', 'Lola', 'Biology');
