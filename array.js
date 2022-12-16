const schools = ['Justice League Academy', 'Philadelphia College', 'Loyola Grammar School', 'Rubix Institute of Education', 'Penns Highschool'];
schools.length; //5
schools.indexOf('Rubix Institute of Education'); //3
schools.indexOf('Grays College'); //-1
schools.includes('Penns Highschool'); //true
schools.includes('Orimolade Grammar School'); //false
schools[1] = 'Virginia School of Science';
schools; //['Justice League Academy', 'Virginia School of Science', 'Loyola Grammar School', 'Rubix Institute of Education', 'Penns Highschool']
schools.push('OSCCO');
schools; //['Justice League Academy', 'Philadelphia College', 'Loyola Grammar School', 'Rubix Institute of Education', 'Penns Highschool', 'OSCCO']
schools.unshift('Rock Eternal Model College');
schools; //['Rock Eternal Model College', 'Justice League Academy', 'Philadelphia College', 'Loyola Grammar School', 'Rubix Institute of Education', 'Penns Highschool', 'OSCCO']



const friends = new Array('Femi', "Moshood", 'Tolu', 'George', 'Seyi', 'Wumi', 'Jumoke');
console.log(friends); //['Femi', 'Moshood', 'Tolu', 'George', 'Seyi', 'Wumi', 'Jumoke']

const arr = [12, true, ['red', 'yellow', 'gray'], {deaths: 3652, houses: 38, street: 'Coker Avenue'}, null];
// arr[2][2]; //'gray'
// arr[3].deaths; //3562
// arr[3]['street']; //'Coker Avenue'
// arr[arr.length - 1]; //null
arr[6] = 'Terry Crews';
arr; //[12, true, Array(3), {…}, null, empty, 'Terry Crews']

let churches = ['Christ Life Baptist Church', 'Christ Apostolic Church', "Winner's Chapel", 'Valley of Blessing', 'United Missionary Christian Association', 'Dada Estate Baptist Church', 'The Redeemed Christian Church of God', 'Shalom Baptist Church'];
//'for...of' loop allows for iteration over the array elements not on the index
for(let church of churches) {
    console.log(`${church}`);
}
// Typical 'for' loop allows iteration over both the array elements and their index
for(let i=0; i<churches.length; i++) {
    console.log(`${i+1}: ${churches[i]}`);
}
// 1: Christ Life Baptist Church
// 2: Christ Apostolic Church
// 3: Winner's Chapel
// 4: Valley of Blessing
// 5: United Missionary Christian Association
// 6: Dada Estate Baptist Church
// 7: The Redeemed Christian Church of God
// 8: Shalom Baptist Church
// 'Array.isArray' method checks if the argument passed to it is an array or not. It returns a boolean
console.log(Array.isArray(churches)); //true
// 'push' method adds an element to the end of an array
churches.push('New Life Parish');
console.log(churches); //['Christ Life Baptist Church', 'Christ Apostolic Church', "Winner's Chapel", 'Valley of Blessing', 'United Missionary Christian Association', 'Dada Estate Baptist Church', 'The Redeemed Christian Church of God', 'Shalom Baptist Church', 'New Life Parish']
// 'unshift' method adds an element to the beginning of an array
churches.unshift('Cherubim & Seraphim Church of God');
console.log(churches); //['Cherubim & Seraphim Church of God', 'Christ Life Baptist Church', 'Christ Apostolic Church', "Winner's Chapel", 'Valley of Blessing', 'United Missionary Christian Association', 'Dada Estate Baptist Church', 'The Redeemed Christian Church of God', 'Shalom Baptist Church', 'New Life Parish']
// 'pop' method removes an element at the end of an array
churches.pop(); //'New Life Parish'
console.log(churches); //['Cherubim & Seraphim Church of God', 'Christ Life Baptist Church', 'Christ Apostolic Church', "Winner's Chapel", 'Valley of Blessing', 'United Missionary Christian Association', 'Dada Estate Baptist Church', 'The Redeemed Christian Church of God', 'Shalom Baptist Church']
// 'shift' method removes an element at the beginning of an array
churches.shift(); //'Cherubim & Seraphim Church of God'
console.log(churches); //['Christ Life Baptist Church', 'Christ Apostolic Church', "Winner's Chapel", 'Valley of Blessing', 'United Missionary Christian Association', 'Dada Estate Baptist Church', 'The Redeemed Christian Church of God', 'Shalom Baptist Church']
// 'splice' method add and removes element or elements at or from any index in an array. Array.splice(index, number of elements to remove, elements that are to be added)
churches.splice(2, 0, 'Trinity Baptist Church');
console.log(churches); //['Christ Life Baptist Church', 'Christ Apostolic Church', 'Trinity Baptist Church', "Winner's Chapel", 'Valley of Blessing', 'United Missionary Christian Association', 'Dada Estate Baptist Church', 'The Redeemed Christian Church of God', 'Shalom Baptist Church']
churches.splice(4, 2); 
console.log(churches); //['Christ Life Baptist Church', 'Christ Apostolic Church', 'Trinity Baptist Church', "Winner's Chapel", 'Dada Estate Baptist Church', 'The Redeemed Christian Church of God', 'Shalom Baptist Church']
churches.splice(3, 1, 'Glory Land of God Church', 'The Eternal Life Evangelical Ministry', 'People of God Assembly');
console.log(churches); //['Christ Life Baptist Church', 'Christ Apostolic Church', 'Trinity Baptist Church', 'Glory Land of God Church', 'The Eternal Life Evangelical Ministry', 'People of God Assembly', 'Dada Estate Baptist Church', 'The Redeemed Christian Church of God', 'Shalom Baptist Church']

// 'sort' method sorts the elements of an array based on the unicode. Numbers has the highest prevalence followed by uppercase alphabets after which comes lowercase alphabets.
const details = ['Deji', 'Mariam', 'gregory', 'Calvin harris', 'peTer'];
details.sort(); //['Calvin harris', 'Deji', 'Mariam', 'gregory', 'peTer']
console.log(details); // ['Calvin harris', 'Deji', 'Mariam', 'gregory', 'peTer']

const details2 = ['Deji', 'Mariam', 3, 'gregory', 'Calvin harris', 0.6, 'peTer', -20];
details2.sort(); //[-20, 0.6, 3, 'Calvin harris', 'Deji', 'Mariam', 'gregory', 'peTer']

// A compare function is passed as an argument to the 'sort' method when sorting an array of numbers
const nums = [5, 7, 3, -10, -35, 0.8];
nums.sort(); //[-10, -35, 0.8, 3, 5, 7]
function compareAscend(x, y) {
    return x-y;
}
nums.sort(compareAscend); //[-35, -10, 0.8, 3, 5, 7]
function compareDescend(k, m) {
    return m-k;
}
nums.sort(compareDescend); //[7, 5, 3, 0.8, -10, -35]

let arr = new Array('Joke', 'Mercy', 15, true);
console.log(arr); //['Joke', 'Mercy', 15, true]
// 'fill' is used to replace all the elements in an array with a static value
arr.fill(false);
console.log(arr); //[false, false, false, false]

let pple1 = ['Deji', 'David', 'Mary', 'Kikelomo'], pple2 = ['James', 'Wemimo', 'Franca', 'George', 'Aduke', 'Priscilla'];
let pple = pple1.concat(pple2);
console.log(pple); //['Deji', 'David', 'Mary', 'Kikelomo', 'James', 'Wemimo', 'Franca', 'George', 'Aduke', 'Priscilla']
pple.join(); //'Deji,David,Mary,Kikelomo,James,Wemimo,Franca,George,Aduke,Priscilla'
pple.join(' + '); //'Deji + David + Mary + Kikelomo + James + Wemimo + Franca + George + Aduke + Priscilla'
pple.join(', '); //'Deji, David, Mary, Kikelomo, James, Wemimo, Franca, George, Aduke, Priscilla'

let fishes = ['Shark', "Whale", 'Catfish', 'Piranha', 'Tilapia', 'Dolphin', 'Whale', 'Jelly Fish', 'Piranha', 'Star Fish'];
console.log(fishes.indexOf('Whale')); //1
console.log(fishes.indexOf('Dolphin')); //5
console.log(fishes.indexOf('Barracuda')); //-1
console.log(fishes.lastIndexOf('Jelly Fish')); //7
console.log(fishes.lastIndexOf('Piranha')); //8


const nums = [12, 5, 3, 67, 8, 39, -2, 13, 56, 40];
// The spread operator '...' is used to unpack all the elements of an array especially when the elements are required as arguments of a function
// For the spread operator '...' to be used, there must be an existing array
console.log(Math.min(...nums)); //-2