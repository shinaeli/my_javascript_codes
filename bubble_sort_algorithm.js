console.log('---Implementing The Bubble Sort Algorithm---');
function bubbleSort(arr) {
  // Start looping with a variable 'i' at the end of the array towards the beginning
  for(let i=arr.length-1; i>=0; i--) {
    // Start an inner loop with a variable 'j' from the beginning until 'i-1'
    for(let j=0; j<=i-1; j++) {
      // If arr[j] is greater tha arr[j+1], swap those thwo values
      if(arr[j] > arr[j+1]) {
      [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }
  // Return the sorted array
  return arr;
}
bubbleSort([3,12,5,8,29,4,15]); //[3, 4, 5, 8, 12, 15, 29]
bubbleSort([37,45,29,8,12,88,-3]); //[-3, 8, 12, 29, 37, 45, 88]
// The best time complexity of bubble sort is O(n) while its worst time complexity is O(n^2)

console.log('---Freestyle Bubble Sort---');
function bubSort(arr) {
  for(i=arr.length-1; i>=0; i--) {
    for(let j=0; j<i+2; j++) {
      if(arr[j]>arr[j+1]) {
        [arr[j], arr[j+1]]=[arr[j+1], arr[j]];
      }
    }
  }
  return arr;
}
bubSort([2,1,7,9,19,8,5,13,4,10,16,6]);


console.log('---An Optimized Bubble Sort Algorithm---');
function optBubSort(arr) {
  for(let i=0; i<=arr.length-1; i++) {
    let swapped;
    for(let j=0; j<i+2; j++) {
      if(arr[j] > arr[j+1]) {
      [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      swapped = true;
      break;
      }
    }
    swapped = false;
  }
  return arr;
}
optBubSort([2,1,7,9,19,8,5,13,4,10,16,6]);