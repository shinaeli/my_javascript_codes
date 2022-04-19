let studentsAge = [{fullName: 'Adeola Adewale', age: 25}, {fullName: 'Caleb George', age: 10}, {fullName: 'Olatayo Daniels', age: 32}, {fullName: 'Evelyn Badmus', age: 9}, {fullName: 'Joshua Olawoyin', age: 16}, {fullName: 'Dave Mark', age: 18}, {fullName: 'Shade Molly', age: 11}, {fullName: 'Kofoworola James', age: 5}, {fullName: 'Olukunle Adigun', age: 26}, {fullName: 'Victoria Adewolu', age: 19}, {fullName: 'Deji Foluso', age: 30}, {fullName: 'Femi Clark', age: 15}, {fullName: 'Jumoke Nelson', age: 17}, {fullName: 'Hannah Bamgboye', age: 24}, {fullName: 'Joseph Yobo', age: 39}, {fullName: 'Mikel Obi', age: 14}, {fullName: 'Jeffery James', age: 22}];

let ageArray = [];

for(let ages of studentsAge) {
  ageArray.push(ages.age);
}
console.log(ageArray); //[25, 10, 32, 9, 16, 18, 11, 5, 26, 19, 30, 15, 17, 24, 39, 14, 22]

for(let i=0; i<ageArray.length - 1; i++) {
  let lowestAgeIndex = i;

  for(let j=i+1; j<ageArray.length; j++) {
    if(ageArray[j] < ageArray[lowestAgeIndex]) {
      lowestAgeIndex = j;
    }
  }
[ageArray[i], ageArray[lowestAgeIndex]] = [ageArray[lowestAgeIndex], ageArray[i]];
}
console.log(ageArray); //[5, 9, 10, 11, 14, 15, 16, 17, 18, 19, 22, 24, 25, 26, 30, 32, 39]

console.log('---These are the names of the students starting from the youngest to the eldest----');
for(let displayName of ageArray) {
  for(let details of studentsAge) {
    if(details.age == displayName) {
      console.log(details.fullName);
    }
  }
}