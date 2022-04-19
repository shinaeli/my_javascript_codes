const results = [2, 40, 85, 62, 10, 38, 28, 55];
const [student1, student2, ...otherScores] = results;
console.log(otherScores);  //[85, 62, 10, 38, 28, 55]

const details = {
  name: 'Lovett Nkiruka',
  address: '4B, Ayodele Fanoiki Street, Magodo GRA Phase 1, Lagos.',
  age: 22,
  sex: 'female',
  possessesNysc: 'false',
  favourite_food: 'Rice and Vegetable',
  occupants: ['Aiyegoro Olumide', 'Adelugba Wemimo', 'Olaiya Mojisola', 'Yetunde Philips', 'Adigun Katerina']
}
const {detail1, detail2, detail3, detail4, ...remainingDetails} = details;
const [occupants1, occupants2, occupants3, ...remainingOccupants] = details.occupants;
console.log(remainingDetails, remainingOccupants);
console.log(remainingDetails.length, remainingOccupants.length); //remainingDetails isn't an array while remainingOccupants is a real array with the properties and methods of an array