const mapped = new Map();
mapped.set('title', "Yetty Price");
mapped.set('spouse', 'Teddy Agga');
mapped.set('has_kids', false);
mapped.set(3, 'houses');
console.log(mapped); 

console.log(mapped.get('title')); //Yetty Price
console.log(mapped.get('spouse')); //Teddy Agga
console.log(mapped.get('has_kids')); //false
console.log(mapped.get('3')); //undefined
console.log(mapped.get(3)); //houses
console.log(mapped.get(false)); //undefined

console.log('---Working More with Map---');
const school1 = new Map([['schoolName', 'Royal Academy'], 
                        ['awards', 38], 
                        ['teachers', 20], 
                        ['contact', [08141325891, 08052167371]], 
                        ['mail', 'dRoyal_Acad@gmail.com']]);
console.log(school1); //{'schoolName' => 'Royal Academy', 'awards' => 38, 'teachers' => 20, 'contact' => Array(2), 'mail' => 'dRoyal_Acad@gmail.com'}
school1.size; //5
school1.get('contact'); //[08141325891, 08052167371]
let students = {male: 350, female: 270}, totalNumberOfStudents = students.male + students['female'];
school1.set(students, totalNumberOfStudents);
console.log(school1);  //{'schoolName' => 'Royal Academy', 'awards' => 38, 'teachers' => 20, 'contact' => Array(2), 'mail' => 'dRoyal_Acad@gmail.com', {Object => 620}}
school1.entries();  //{'schoolName' => 'Royal Academy', 'awards' => 38, 'teachers' => 20, 'contact' => Array(2), 'mail' => 'dRoyal_Acad@gmail.com', {Object => 620}}
school1.clear();
school1; //Map(0) {size: 0}
let studentsMap = new Map(Object.entries(students));
studentsMap; //{'male' => 350, 'female' => 270}


const mapper = new Map();
mapper.set('fullName', 'Mary Derrick');
mapper.set('age', 42);
mapper.set('maritalStatus', 'Married');
mapper.set('children', ['James', 'George', 'Chloe']);
mapper.set('husband', 'Dave Derrick');
console.log(mapper); //{'fullName' => 'Mary Derrick', 'age' => 42, 'maritalStatus' => 'Married', 'children' => Array(3), 'husband' => 'Dave Derrick'}
mapper.has('children'); //true
mapper.has('friends'); //false
for(let tries of mapper.entries()) {
    console.log(`${tries[0]}: ${tries[1]}`);
}
// fullName: Mary Derrick
// age: 42
// maritalStatus: Married
// children: James,George,Chloe
// husband: Dave Derrick
let allKeys = mapper.keys();
console.log(allKeys); //{'fullName', 'age', 'maritalStatus', 'children', 'husband'}
for(let keyes of allKeys) {
    console.log(keyes.toUpperCase());
}
// FULLNAME
// AGE
// MARITALSTATUS
// CHILDREN
// HUSBAND
mapper.size; //5
mapper.get('fullName'); //'Mary Derrick'
mapper.delete('age') //true
console.log(mapper); //{'fullName' => 'Mary Derrick', 'maritalStatus' => 'Married', 'children' => Array(3), 'husband' => 'Dave Derrick'}
mapper.size; //4

// A map is an ordered list of 'key-value' pair of which the keys can be of any data type
const otherDetails = {
    occupation: 'TV / Radio Personnel',
    friends: ['Mr. Olukunle Omotosho', 'Mrs. Ayo Adelugba']
};
const map1 = new Map([
    ['firstName', 'Olusola'], 
    ['lastName', 'Ajala'], 
    ['children', ['Oyindamola', 'Mayowa', 'Dolapo', 'Olanrewaju']],
    ['home address', 'Capital, Osogbo, Osun State.'],
    [08141315092, 'phone number']
]);
console.log(map1); //Map(5) {'firstName' => 'Olusola', 'lastName' => 'Ajala', 'children' => Array(4), 'home address' => 'Capital, Osogbo, Osun State.', 08141315092 => 'phone number'}
console.log(map1.size); //5
// The 'size' method gives the number of 'key-value' pairs present in a map
map1.set(otherDetails, 2);
// The 'set' method assigns a 'key-value' pair to an existing map
map1.set(56, 'age');
console.log(map1.size); //7
console.log(map1); //Map(7) {'firstName' => 'Olusola', 'lastName' => 'Ajala', 'children' => Array(4), 'home address' => 'Capital, Osogbo, Osun State.', 08141315092 => 'phone number', …}
console.log(map1.get('lastName')); //'Ajala'
// The 'get' method returns the value assigned to the key passed to it as its argument
console.log(map1.get('children')); //['Oyindamola', 'Mayowa', 'Dolapo', 'Olanrewaju']
map1.delete(08141315092);
// The 'delete' method is used to remove a key and its value from a map
console.log(map1.size); //6
var i = 0;
// The 'for-of' loop is used to iterate through a map's entries, keys or values
for(let [key, value] of map1.entries()) {
    i++;
    console.log(`${i}. ${key}: ${value}`);
}
// 1.) firstName: Olusola
// 2.) lastName: Ajala
// 3.) children: Oyindamola,Mayowa,Dolapo,Olanrewaju
// 4.) home address: Capital, Osogbo, Osun State.
// 5.) [object Object]: 2
// 6.) 56: age
console.log(map1.has('firstName')); //true
console.log(map1.has('middleName')); //false
console.log(map1.keys()); //MapIterator {'firstName', 'lastName', 'children', 'home address', {…}, …}
console.log(map1.values()); //MapIterator {'Olusola', 'Ajala', Array(4), 'Capital, Osogbo, Osun State.', 2, …}
console.log(map1.entries()); //MapIterator {'firstName' => 'Olusola', 'lastName' => 'Ajala', 'children' => Array(4), 'home address' => 'Capital, Osogbo, Osun State.', {…} => 2, …}

// The 'spread' is also useful in converting an iterable such as set, map into an array.
const map1 = new Map([
    ['firstName', 'Olusola'], 
    ['lastName', 'Ajala'], 
    ['children', ['Oyindamola', 'Mayowa', 'Dolapo', 'Olanrewaju']],
    ['home address', 'Capital, Osogbo, Osun State.'],
    [08141315092, 'phone number']
]);
console.log([...map1]); //[['firstName', 'Olusola'], ['lastName', 'Ajala'], ['children', Array(4)], ['home address', 'Capital, Osogbo, Osun State.'], [08141315092, 'phone number']]




