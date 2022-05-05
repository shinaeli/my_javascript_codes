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
