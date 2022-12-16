// Create two variables 'ages' to store a list of numbers and 'outputArr' an empty array 
let ages = [13, 2, 5, 7, 2, 5, 4, 2, 8, 5, 9, 3], outputArr = [];
// Iterate through the 'ages' array
for(age of ages) {
    // For each iteration, check if 'outputArr' doesn't contains the current 'age'
    // If true, add the current 'age' to the 'outputArr'
    if(!outputArr.includes(age)) outputArr.push(age);
}
// Print the fully-filled 'outputArr' to the console
console.log(outputArr); //[13, 2, 5, 7, 4, 8, 9, 3]