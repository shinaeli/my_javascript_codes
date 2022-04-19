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

