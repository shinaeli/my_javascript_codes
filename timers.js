const greet = firstName => {
    let output = 'Good morning to you! '+firstName+'.';
    console.log(output);
    return;
}
let firstName = '', display = setTimeout(greet, 3500, firstName);
if(typeof firstName !== 'string' || firstName.length === 0) {
    console.log('Invalid Input');
    clearTimeout(display);
}


const greet = firstName => console.log('Good morning to you! '+firstName+'.');
let firstName = '', display = setTimeout(greet, 3500, firstName);
if(typeof firstName !== 'string' || firstName.length === 0) clearTimeout(display);


let record = [{family: 'Ajakayes', amount: 65000},{family: 'Owolabis', amount: 120000},{family: 'Adiguns', amount: 51500},{family: 'Cokers', amount: 82150},{family: 'Kolawoles', amount: 32140},{family: 'Folarins', amount: 69910}];
function donationReport(arr) {
const display = x => console.log(x);


    for(let val of arr) {
        if(val.amount < 82000) {
            setTimeout(display, 8000, val.family);
        }
    }
    return;
}
donationReport(record);



