const estates = {
  name: 'Amen Estate',
  location: 'Ibeju, Lekki, Lagos.',
  number_of_occupants: 43,
  estate_mayor: 'Funke Akindele',
  families: ['Akintundes', 'Omotoshos', 'Eniolas', 'Cokers', 'Otedolas', 'Tejumolas', 'Darlingtons and so on']
}

for(let output of Object.entries(estates)) {
  console.log(output);
}

for(let result of Object.keys(estates)) {
  console.log(result);
}

for(let score of Object.values(estates)) {
  console.log(score);
}

const {estate_mayor, families: [,,,output,,,], name} = estates;
console.log(`${estate_mayor} is the mayor of ${name} and her house is located beside that of ${output}.`);

for(let output of estates) {
  console.log(output); //Error: estates is not iterable
}