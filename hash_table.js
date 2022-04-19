function Hash_Table() {
    this.datastore = new Array(175);
    this.hashfunction = hashfunction;
    this.put = put;
    this.display = display;
    // this.get = get;

  function hashfunction(data) {
    let index, sum = 0;
    if (typeof(data) == 'number') {
      index = data % this.datastore.length;
    } else if (typeof(data) == 'string') {
      for (let i = 0; i < data.length; i++) {
        sum += data.charCodeAt(i);
      }
      index = sum % this.datastore.length;
    }
    return index;
  }

  function put(data) {
    this.datastore[this.hashfunction(data)] = data;
  }

  function display() {
    for(let i=0; i<this.datastore.length; i++) {
      if(this.datastore[i] != undefined) {
        console.log(i + ": " + this.datastore[i]);
      }
    }
  }
}

let students = ['Fredrick', 'Tunde', 'Mojirayo', 'Georgina', 'Theophilus', 'Calvin', 'Alvis', 'Walterdurk', 'Victorious'];
let hasher = new Hash_Table();
for (let k = 0; k < students.length; k++) {
  console.log(hasher.put(students[k]));
}
//OR
function HashTable() {
  this.table = new Array(137);
  this.simpleHash = simpleHash;
  this.showDistro = showDistro;
  this.put = put;
  //this.get = get;
  }
  function put(data) {
  var pos = this.simpleHash(data);
  this.table[pos] = data;
  }
  function simpleHash(data) {
  var total = 0;
  for (var i = 0; i < data.length; ++i) {
  total += data.charCodeAt(i);
  }
  return total % this.table.length;
  }
  function showDistro() {
  var n = 0;
  for (var i = 0; i < this.table.length; ++i) {
  if (this.table[i] != undefined) {
  print(i + ": " + this.table[i]);
  }
  }
  }
  var someNames = ["David", "Jennifer", "Donnie", "Raymond",
"Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
var hTable = new HashTable();
for (var i = 0; i < someNames.length; ++i) {
hTable.put(someNames[i]);
}
hTable.showDistro();
//OR
class Hashtable {
  constructor () {
  this.datastore = new Array(175);
  this.arrLength = this.datastore.length;
  // this.hashfunction = hashfunction;
  // this.put = put;
  // this.display = display;
  // this.get = get;
  }
  
  hashfunction(data) {
  let index, sum = 0;
  if (typeof(data) == 'number') {
    index = data % this.arrLength;
  } else if (typeof(data) == 'string') {
    for (let i = 0; i < data.length; i++) {
      sum += data.charCodeAt(i);
    }
    index = sum % this.arrLength;
  }
  return index;
  }

  put(data) {
  this.datastore[this.hashfunction(data)] = data;
  }

  display() {
  for(let i=0; i<this.arrLength; i++) {
    if(this.datastore[i] != undefined) {
      console.log(i + ": " + this.datastore[i]);
    }
  }
  }

}

let students = ['Fredrick', 'Tunde', 'Mojirayo', 'Georgina', 'Theophilus', 'Calvin', 'Alvis', 'Walterdurk', 'Victorious'];
let hasher = new Hashtable();
for (let k = 0; k < students.length; k++) {
console.log(hasher.put(students[k]));
}