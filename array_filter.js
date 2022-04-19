const agesRegistered = [16, 19, 37, 13, 24, 66, 15, 46, 17, 39, 18];
let ageComparer = function (age) {
  return age >= 18;
}
let qualifiedAges = agesRegistered.filter(ageComparer);
console.log(qualifiedAges);


const compare = x => {
  if(x % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
function atLeastTwo(arr, callBackFunc) {
 return arr.map(callBackFunc);
}
let inputData = [16, 19, 37, 13, 24, 66, 15, 46, 17, 39, 18];
atLeastTwo(inputData, compare);  //[true, false, false, false, true, true, false, true, false, false, true]


const isEven = x => {
  if(x % 2 == 0) return true;
  else return false;
}
function atLeastTwo(arr, callBackFunc) {
  let truthies = [];
  for(let i=0; i<arr.length; i++) {
    if(callBackFunc(arr[i]) == true) truthies.push('true');
}
if(truthies.length >= 2) return true;
else return false;
}
let inputData = [16, 19, 37, 13, 24, 66, 15, 46, 17, 39, 18];
atLeastTwo(inputData, isEven);  //true
let input2 = [13, 7, 91, 66, 3, 73, 37, 1, 5];
atLeastTwo(input2, isEven);  //false


const isOdd = num => {
  return num % 2 == 1;
}
const atLeastTwo = (array, callback) => array.filter(callback).length >= 2;
atLeastTwo([1, 2, 3, 4, 5], isOdd);
atLeastTwo([2, 4, 6], isOdd);
atLeastTwo([1, 2, 3, 4, 5], t => t > 3);


const repeatRecursive = (input, num, callback) => {
  if(num == 0) return input;
  return repeatRecursive(callback(input), num-1, callback);
}
const repeat = (input, num, callback) => {
  let result = input;
  for(i = 0; i < num; i++) {
    result = callback(result);
  }
  return result;
}
repeat('trogdor', 3, t => `&${t}&`);  //'&&&trogdor&&&'