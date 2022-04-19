var names = ['Harry', "James", "Gbenga", "Olatunde"];
var newcomers = ["Victoria", "Dayo", "George", "Laitan", "Kenneth", "Pelumi"];
var results = [...names, ...newcomers];  //Shallow copying to produce a new array
console.log(results);
console.log(...newcomers);

let abbr = ['Omotosho', 'E.'];
console.log(...[...abbr, 'Oluwasina']);
// console.log("My name is:" ...[...abbr, 'Oluwasina']);
// console.log(output);

let str = "Fredrick Lord Lugard";
console.log(...str);
console.log([...str]);