console.log('---Use Recursion To Find The Sum Of Elements Of An Array---');
function sumUp(arr) {
  let arrLength = arr.length;
  if(arrLength == 0) { //Base Case
    return 0;
  } else {  //Recursive Case
    let newArr = arr.slice(0, arrLength - 1);
    return arr[arrLength - 1] + sumUp(newArr); //Recursive Case
  }
}
sumUp([12, 34, 18, 5, 47, 20, 39, 102, 41, 26, 20, 58, 200]); //622



console.log('---Write A Recursive Function To count The Number Of Items In A List---');
function countItems(list) {
  let firstIndex = 0, item = 0, listLength = list.length;
  if(list[firstIndex] == null || list[firstIndex] == undefined) { //Base Case
    return 0;
  } else {
    let newItem = item + 1;
    let newArr = list.slice(0, listLength - 1);
    return newItem + countItems(newArr); //Recursive Case
  }
}
countItems([2,4,6,8,10,12,14,16,18,20,25,17,89,36,15,31]); //16
countItems([0]); //1
countItems([]); //0




console.log('---Find The Maximum Number In A List---');
let testNums = [1,7,3,5,4];
console.log(testNums);
function findMax(list) {
  let largestIndex = 0;
  for(let k = largestIndex + 1; k<list.length; k++) {
    if(list[k] > list[largestIndex]) {
      largestIndex = k;
    }
  }
  return list[largestIndex];
}
console.log(findMax(testNums)); //7



function max(arr) {
  if(arr.length == 2) {
    let maxIndex = 0;
    for(let k=maxIndex+1; k<arr.length; k++) {
      if(arr[k] > arr[maxIndex]) {
        return arr[k];
      } else {
        return arr[maxIndex];
      }
    }
  } else {
    return 'Error';
  }
}
max([6,9]); //9


console.log('---Find The Maximum Number In A List By Using Recursion---');
function findMax(arr) { //[12,6,18,5,10]
  let arrLength = arr.length, maxIndex = 0;
  if(arrLength == 1) {
    return arr[maxIndex];
  } else {
    let newArr = arr.slice(maxIndex, 2), maxNum = newArr[maxIndex]; //[12,6]
    for(let k=maxIndex+1; k<newArr.length; k++) {
      if(newArr[k] > maxNum) {
        maxNum = newArr[k];
        newArr = [maxNum, arr[maxIndex + 2]];
      } else {
        maxNum = newArr[maxIndex]; //12
        newArr.pop();
        newArr = newArr.push(arr[maxIndex + 2]);
      }
    }
    return findMax(newArr);
  }
}
findMax([12,6,18,5,10]);


[12,6,18,5,10]
[12,18,5,10]
[18,5,10]
[18,10]
[18]



console.log('---Implementing Binary Search By Using Recursion---');
function binary_search(arr, lowerBound, upperBound, item) {
  let midBound = Math.floor((lowerBound+upperBound) / 2);
  if(lowerBound > upperBound) { //Base Case i.e. when the lowerBound is greater than upperBound(when the element doesn't exist in the list or array)
    return `${item} doesn't exist in the list`;
  } else if(arr[midBound] == item) {
    return `${item} is located at position: ${midBound+1}`;
  } else if(arr[midBound] > item) {
    let newUpperBound = midBound - 1;
    return binary_search(arr, lowerBound, newUpperBound, item);
  } else {
    let newLowerBound = midBound + 1;
    return binary_search(arr, newLowerBound, upperBound, item);
  }
}
let growth = [3,7,9,11,14,28,47,52,55,59,61,75];
binary_search(growth, 0, growth.length-1, 10);




let map = new Map();
map.set('female', 9);
map.set(127, 'press Club');
map.set(true, 'federal');
map.set(666, 'danger');
map.set('phone', `09155215053`);
console.log(map);  //{'female' => 9, 127 => 'press Club', true => 'federal', 666 => 'danger', 'phone' => '09155215053'}
console.log(map.get(127)); //press Club
console.log(map.get('phone'));  //09155215053
console.log(map.get('date'));  //undefined
for(let key of map.keys()) {
  console.log(key);
}
for(let data of map.values()) {
  console.log(data);
}
for(let dataArray of map.entries()) {
  console.log(dataArray);
}

let map2 = new Map([['apartment', 16], [291, 'cars'], [false, 'Is homeless'], [124, 947], ['phone', '08141215809']]);
console.log(map2);  //{'apartment' => 16, 291 => 'cars', false => 'Is homeless', 124 => 947, 'phone' => '08141215809'}
console.log(map2.has('choco')); //false
console.log(map2.has(false));  //true
console.log(map2.has(124));  //true
map2.delete('phone');
console.log(map2);  //{'apartment' => 16, 291 => 'cars', false => 'Is homeless', 124 => 947}
for(let key of map2.keys()) {
  console.log(key);
}
for(let value of map2.values()) {
  console.log(value);
}
for(let keyValuePair of map2.entries()) {
  console.log(keyValuePair);
}