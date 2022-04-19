console.log('---Implementing QuickSort Algorithm---');
function quick_sort(arr) {
  if(arr.length < 2) { //Base Case
    return arr;
  } else {
    let pivot = arr[0], leftArr = [], rightArr = [], pivotArr = [pivot]; //Always make the first item the pivot and create an array which contains the pivot as its only element
    for(let i=1; i<arr.length; i++) {
      if(arr[i] < pivot) {
        leftArr.push(arr[i]);  //Each array item lesser than the pivot gets pushed into the array located at the left side of the pivot
      } else {
        rightArr.push(arr[i]); //Each array item greater than the pivot gets pushed into the array located at the right side of the pivot
      }
    }
    return quick_sort(leftArr).concat(pivotArr.concat(quick_sort(rightArr)));
  }
}
quick_sort([13, 10, 25, 37, 2, 9, 16]); //[2, 9, 10, 13, 16, 25, 37]
quick_sort([13, 6]); //[6, 13]
quick_sort([6]); //[6]
quick_sort([]); //[]


console.log('---Freestyled QuickSort Algorithm---');
function quickSort(arr) {
  if(typeof arr != 'array') {
    return;
  } else if(arr.length === 0 || arr.length === 1) {
    return arr;
  } else {
    let pivot = arr[0], leftArray = [], rightArray = [], midArray=[pivot];
    for(let i=1; i<arr.length; i++) { //Start loop from the second element in the array
      if(arr[i] < pivot) {
        leftArray.push(arr[i]);
      } else {
        rightArray.push(arr[i]);
      }
    }
    return quickSort(leftArray).concat(midArray.concat(quickSort(rightArray)));
  }
}
quickSort([2,1,7,9,19,8,5,13,4,10,16,6]); //[1, 2, 4, 5, 6, 7, 8, 9, 10, 13, 16, 19]
quickSort([2,1]); //[1, 2]
quickSort([2]); //[2]
quickSort([]); //[]
quickSort('drejay'); //undefined

