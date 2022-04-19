console.log('---Using The Frequency Counter Approach---');
function same(arr1, arr2) {
 if(arr1.length != arr2.length) {
   return false;
 } else {
   let frequencyCounter1 = {}, frequencyCounter2 = {};
   for(let num of arr1) {
     //initializes the object's property to 1 if it doesn't exist or add 1 to it if it already exists
     frequencyCounter1[num] = (frequencyCounter1[num] || 0) + 1;
   }
   for(let num of arr2) {
     frequencyCounter2[num] = (frequencyCounter2[num] || 0) + 1;
   }
   console.log(frequencyCounter1, frequencyCounter2);
   for(let key in frequencyCounter1) {
     if(!(key**2 in frequencyCounter2)) {
       return false;
     }
     if(frequencyCounter2[key**2] !== frequencyCounter1[key]) {
       return false;
     }
   }
   return true;
 }
}
same([1,2,3,6], [4,36,1,9]); //true
same([1,2,1], [4,4,1]); //false


console.log('---Finding Anagrams Using The Frequency Counter Approach---');
function validAnagram(str1, str2) {
  if(str1.length !== str2.length) {
    return false;
  } else {
    let collector1 = {}, collector2 = {};
    for(let i=0; i<str1.length; i++) {
      collector1[str1[i]] = (collector1[str1[i]] || 0) + 1;
    }
    for(let i=0; i<str2.length; i++) {
      collector2[str2[i]] = (collector2[str2[i]] || 0) + 1;
    }
    console.log(collector1, collector2);
    for(let key in collector1) {
      if(!(key in collector2)) { //checks if the property in object 'collector1' exists in object 'collector2'
        return false;
      } else if(collector2[key] != collector1[key]) { //checks if the value of each property in object 'collector1' is the same with the value of the property in object 'collector2'
        return false;
      }
    }
    return true;
  }
}
validAnagram('tes', 'day'); //false;
validAnagram('test', 'tets'); //true;
validAnagram('', ''); //true
validAnagram('aaz', 'zza'); //false
validAnagram('anagram', 'nagaram'); //true
validAnagram('rat', 'car'); //false
validAnagram('awesome', 'awesom');//false
validAnagram('qwerty', 'qeywrt');//tru
validAnagram('texttwisttime', 'timetwisttext'); //true
