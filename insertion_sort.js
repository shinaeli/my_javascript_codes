function insertionSort(arr) {
    for(let i = 1; i<arr.length; i++) {
        let currentVal = arr[i];
        for(var j = i-1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
        // console.log(arr);
    }
    return arr;
}
insertionSort([2,1,7,9,19,8,5,13,4,10,16,6]); //[1, 2, 4, 5, 6, 7, 8, 9, 10, 13, 16, 19]
insertionSort([3,1,5,6,2]); //[1, 2, 3, 5, 6]

