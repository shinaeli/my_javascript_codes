let heroes = ['spider man', 'thor', 'hulk', 'iron man', 'captain america'];
console.log(heroes.length);
heroes.push('black panther');
console.log(heroes);
heroes.pop();
heroes[3] = 'black panther';
heroes[4] = 'captain america';
console.log(heroes);
heroes.splice(1, 2, 'doctor strange');
console.log(heroes);
heroes.sort();
console.log(heroes);


let siteWorkers = {engineer: 2, architect: 1, carpenter: 3, painter: 1, bricklayer: 2, labour: 1, tiler: 3, digger: 6};
let sumOfWorkers = 0;
for(personnel in siteWorkers) {
  console.log(`We have ${siteWorkers[personnel]} ${personnel}s on site at the moment.`);
  sumOfWorkers += siteWorkers[personnel];
}
alert(`This gives us a total of ${sumOfWorkers} people on site as we speak.`);


let numOfWorkers = {Monday: 26, Tuesday: 15, Wednesday: 11, Thursday: 9, Friday: 18, Saturday: 15, Sunday: 10};
let add = 0;
for(staff in numOfWorkers) { //'for...in' loop is used to iterate over the properties of an object(hashtable)
  alert(`On ${staff}, there were ${numOfWorkers[staff]} workers on site. Sir/Ma.`);
  console.log(`On ${staff}, there were ${numOfWorkers[staff]} workers on site. Sir/Ma.`);
  add += numOfWorkers[staff];
}
alert(`Therefore, a total of ${add} workers worked on site this week. Sir/Ma.`);
console.log(`Therefore, a total of ${add} workers worked on site this week. Sir/Ma.`);

let numOfWorkers = [26, 15, 11, 9, 18]; //Storing the number of Workers as a list(array)
let add = 0; //add is global scoped
for(let staff of numOfWorkers) {  //staff is blocked scoped and 'for...of' loop is used to iterate over a list(array)
  add+=staff;
  console.log(staff);
}
alert(`The total number of workers on site throughout this week is ${add}.`);


var input = prompt(`Provide maximum number: `);
for(let i=1; i<input; i++) {
  if(i % 2 == 0) continue;
  console.log(i);
}


