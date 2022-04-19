function sortArray(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for(let k=i+1; k<arr.length; k++) {
      if(arr[k] < arr[minIndex]) {
        minIndex = k;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}


let ages = [13, 5, 18, 36, 30, 26, 2, 38, 17, 4];
sortArray(ages);



function selectionSort(arr) {
  for(let i=0; i<arr.length; i++) {//Loops through the array
    let minIndex=i; //Assigns the current index as the index of the minimum value
    for(let k=i+1; k<arr.length; k++) { //Loops through the remaining elements of the array starting from the element located next to the 'minIndex' element
      if(arr[k]<arr[minIndex]) { //Checks if an element in the inner loop is lesser than the 'minIndex' element
        minIndex = k; //If true, assigns the 'miIndex' to the newly found element
      }
    }
    [arr[i], arr[minIndex]]=[arr[minIndex], arr[i]]; //Swapping is carried out in the outer loop
  }
  return arr;
  }
  selectionSort([3,1,5,6,2]); //[1, 2, 3, 5, 6]
  selectionSort([2,1,7,9,19,8,5,13,4,10,16,6]); //[1, 2, 4, 5, 6, 7, 8, 9, 10, 13, 16, 19]



console.log('---Optimized Selection Sort Algorithm---');
function optSelectSort(arr) {
  for(let i=0; i<arr.length; i++) {
    let minIndex = i;
    for(let k=i+1; k<arr.length; k++) {
      if(arr[k] < arr[minIndex]) {
        minIndex = k;
      }
    }
    if(minIndex !== i) { //Checks if the 'minIndex' has changed inorder to reduce the number of times that a swap will be made
      [arr[i], arr[minIndex]]=[arr[minIndex], arr[i]];
    }
  }
  return arr;
}
optSelectSort([1,2,7,9,19,8,5,13,4,10,16,6]); //[1, 2, 4, 5, 6, 7, 8, 9, 10, 13, 16, 19]
