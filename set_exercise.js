//A set is an unorderd collection of unique elements
//A union of two or more sets is the combination of all elements of each individual set
let set1 = new Set([1,3,5,7,9]), set2 = new Set([2,3,4,6]);
let set1Unionset2 = new Set([...set1, ...set2]);
console.log(set1Unionset2); //{1, 3, 5, 7, 9, …}

//The intersection of set A and B refers to the combination of elements that are common to both set
let set1 = new Set([1,3,5,7,9]);
let set2 = new Set([2,3,4,6]);
let intersection = new Set([...set1].filter(x => set2.has(x)));
console.log(intersection); //{3}

//The difference between two set A and B refers to elements of A that are absent in B
let set1 = new Set([1,3,5,7,9]), set2 = new Set([2,3,4,6]);
let difference = new Set([...set1].filter(x  => !set2.has(x)));
console.log(difference); //{1, 5, 7, 9}
let set1 = new Set([2,3,4,6]), set2 = new Set([1,3,5,7,9]);
let difference = new Set([...set1].filter(x => !set2.has(x)));
console.log(difference); //{2, 4, 6}
//The symmetrical difference between set A and B refers to elements that are either in set A or B but not both
let set1 = new Set([1,3,5,7,9]), set2 = new Set([2,3,4,6]);
let union = new Set([...set1, ...set2]), intersection = new Set([...set1].filter(x => set2.has(x))), symmetricDifference = new Set([...union].filter(k => !intersection.has(k))); 
console.log(symmetricDifference); //{1, 5, 7, 9, 2, 4, 6}

let universalSet = new Set([1,2,3,4,5,6,7,8,9,10]), set1 = new Set([2,4,6,8,10]), complementOfSet1 = new Set([...universalSet].filter(m => !set1.has(m)));
console.log(complementOfSet1); //{1, 3, 5, 7, 9}

