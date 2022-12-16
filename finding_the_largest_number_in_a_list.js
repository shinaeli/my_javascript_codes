// Create variables 'ages' to store ages and 'max'
// Assume the first element of 'ages' array as the largest item and assign it to 'max'
let ages = [2, 17, 6, 10, 5, 45, 11, 22, 8, 4], max = ages[0];
// Iterate through 'ages'
for(age of ages) {
    // Check if the current 'age' element is greater than the current 'max'
    // If true, assign the 'age' element as the new 'max'
    if(age > max) max = age;
}
// Print the 'max' value to the console
console.log(max); //45