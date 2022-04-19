let ages = [12, 24, 28, 35, 38, 40, 43, 47, 49, 50, 53, 55];

function binarySearch(arr, item) {
  let low = 0, high = arr.length - 1;
  while(low<=high) {
    let mid = Math.floor((low+high)/2);
    let guess = arr[mid];
    if(guess == item) {
      return mid;
    } else if(guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return null;
}
binarySearch(ages, 40); //5
binarySearch(ages, 60); //null
binarySearch(ages, 37); //null
binarySearch(ages, 24);  //1
binarySearch(ages, 55);  //11




console.log('---Implementing Binary Search By Using Iteration---');
function search(arr, item) {
  let lowerBound = 0, upperBound = arr.length-1;
  while(lowerBound <= upperBound) { //As long as the lowerBound is lower than or equal to the upperBound
    let midBound = Math.floor((lowerBound+upperBound) / 2), guess = arr[midBound]; //new midBound is calculated in each loop
    if(guess == item) {
      return `${item} is located at position: ${midBound+1}`;
    } else if(guess > item) {
      upperBound = midBound - 1;
    } else {
      lowerBound = midBound + 1;
    } 
  } 
    return `${item} doesn't exist in the list`;
}
let growth = [3,7,9,11,14,28,47,52,55,59,61,75];
search(growth, 52);

