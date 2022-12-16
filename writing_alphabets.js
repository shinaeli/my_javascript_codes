// Create two variables 'nums_arr' and 'str' to store an array and a string
let nums_arr = [5,2,5,2,5], str = 'x';
// Create an outer loop to iterate over 'nums_arr'
for(val of nums_arr) {
    // Create a variable 'output' at each beginning of the outer loop and assign an empty string to it
    let output = '';
    // Create an inner loop corresponding to the current item of the outer loop
    for(let i=0; i<val; i++) {
        // For each iteration of the inner loop, add the value of the 'str' variable to the 'output' variable
        output += str;
    }
    // Print the fully-filled 'output' variable to the console
    console.log(output);
}
