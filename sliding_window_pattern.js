console.log('---Finding The Maximum Sub-Array Sum in an Array Using the Sliding Window Pattern---');
function maxSubArraySum(arr, num) {
  if(num > arr.length) {
    return null;
  }
  let maxSum = 0, tempSum = 0;
  for(let i=0; i<num; i++) {
    tempSum+=arr[i];
  }
  maxSum = tempSum;
  for(let k=num; k<arr.length; k++) {
    tempSum = tempSum-arr[k-num]+arr[k];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
maxSubArraySum([100,200,300,400], 2); //700
maxSubArraySum([1,4,2,10,23,3,1,0,20], 4); //39
maxSubArraySum([2,3,1,2,4,3], 2); //7
