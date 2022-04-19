console.log('---Finding The Pair Whose Sum Is Equal By Using The Muiltiple Pointers Approach---');
function sumPair(arr) {
  let leftIndex = 0, rightIndex = arr.length-1;//Starting each index from each end of the array
  while(leftIndex < rightIndex) { //Looping through while the left index is less tha the right index
    let sum = arr[leftIndex] + arr[rightIndex];//Adding the elements at each index together
    if(sum === 0) { //Checking if the sum is equal to zero
      return ([arr[leftIndex], arr[rightIndex]]);
    } else if(sum > 0) {//If the sum is greater than zero
      rightIndex--; //Reduce the right index
    } else {//If the sum is lesser than zero
      leftIndex++; //Increase the left index
    }
  }
}
sumPair([-5,-4,-2,0,1,2,4,6,9]); //[-4,4]
sumPair([-3,-1,0,2,4,5,7]); //undefined


console.log('---Finding The Pair Whose Sum Is Equal By Using The Naive Approach---');
function sumPair(arr) {
  for(let i=0; i<arr.length; i++) {//Looping from the first element in the arrray
    for(let j=i+1; j<arr.length; j++) {//Looping from the second element in the array
      if(arr[i] + arr[j] === 0) { //Check if the sum of the elements at each curret index is equal to zero
        return ([arr[i], arr[j]]);
      }
    }
  }
}
sumPair([-5,-4,-2,0,1,2,4,6,9]); //[-4,4]
sumPair([-3,-1,0,2,4,5,7]); //undefined