var x;
undefined
var N;
undefined
function countBs(x) {
	if (x[N] == "B") {
		return N;
	} 
	else {
		return null;
	}
}
undefined
countBs("BarBados");
undefined
x = "BarBados";
"BarBados"
countBs(x);
undefined

var dudes = [23, 14, 6, 9, 16];
dudes.reduce(function(accumulator, value, valueIndex, wholeArray) {
	return accumulator + value;
});

var olodo = "School";
console.log(olodo.substr(2,6));
console.log(olodo.lastIndexOf("o"));

var gauge = 30.892527;
console.log(gauge.toFixed(2));  //decimal place
console.log(gauge.toPrecision(4));  //significant figure