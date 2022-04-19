let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];


for(let i=0; i<bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(tips[i]+bills[i]);
}
function calcTip(bill) {
  if((bill>50)&&(bill<300)) {
    return 0.15*bill;
  } else {
    return 0.2*bill;
  }
}

console.log(tips);
console.log(totals);