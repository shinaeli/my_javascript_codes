const details = [
  ['names', 'Adeleke Demilade Samuel Jamiu'],
  ['primary education', 'Hammer Head Nursery & Primary School'],
  ['secondary education', 'Gbesekojasikoto Collegiate'],
  ['tertiary education', 'University of Quayanmata'],
  ['credits', 3],
  ['distinctions', 1],
  ['pass', 3],
  ['cgpa', 4.6],
  ['hadFirstClass', true]
]

console.log(details.length);

const readers = new Map(details);

console.log(readers);
console.log(readers.size);   //9
console.log(readers.entries());
console.log(readers.get('tertiary education'));  //University of Quayanmata
console.log(readers.keys());
console.log(readers.has('mode'));   //false
console.log(readers.has('pass'));  //true
readers.set('wife', 'Khadijat Olowoosebi Dokasi');
console.log(readers);
console.log(readers.values());
for(let koko of readers.values()) {
console.log(koko);
}

console.log([...readers.values()]);   //Returns all the values in the 'reader' map as an array
const arrValues = [...readers.values()];
for(let i=0; i<arrValues.length; i++) {
  console.log(`${i+1}: ${arrValues[i]}`);
}
console.log([...readers.keys()]);  //Returns all the keys in the 'reader' map as an array
const arrKeys = [...readers.keys()];
for(let k=0; k<arrKeys.length; k++) {
  console.log(`${k+1}: ${arrKeys[k]}`)
}