console.log('---Merging Two Sorted Arrays---');
function mergeArray(arr1, arr2) {
  let arr=[], i=0, j=0;
  while(i<arr1.length && j<arr2.length) {//While none of the arrays are empty
    if(arr1[i]<arr2[j]) {//Compares the elements located at the same index in each array to each other to find the smallest
      arr.push(arr1[i]); //The smallest value detected is pushed into the empty array 'arr'
      i++; //The element next to the smallest is chosen to be compared to an element in 'arr2'
    } else {
      arr.push(arr2[j]); //The smallest value detected is pushed into the empty array 'arr'
      j++; //The element next to the smallest is chosen to be compared to an element in 'arr2'
    }
  }
  while(i < arr1.length) {
    arr.push(arr1[i]); //Gathers the remaining elements of 'arr1' into the array 'arr'
    i++;
  }
  while(j < arr2.length) {
    arr.push(arr2[j]); //Gathers the remaining elements of 'arr2' into the array 'arr'
    j++;
  }
  return arr;
}
// mergeArray([11,10,50], [2,14,99,100]); //[2, 11, 10, 14, 50, 99, 100]

function mergeSort(arr) {
  if(arr.length <= 1) { //Checks if the array is empty or contains one element
    return arr; //Returns the array if the above condition is true
  } else { //Divide the array into two seperate arrays and call the 'mergeSort' function on each of them
    let mid = Math.floor(arr.length / 2), leftArr = mergeSort(arr.slice(0, mid)), rightArr = mergeSort(arr.slice(mid));
    return mergeArray(leftArr, rightArr);
  }
}
mergeSort([3,13,10,2,9,16,5,7,22,1]);
//The time complexity of MergeSort algorithm is 'O(nlogn)' while its space complexity is O(n)