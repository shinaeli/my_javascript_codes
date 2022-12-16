function *iterateAll(item) {
    for(let i=0; i<item.length; i++) {
        yield item[i];
    }
}
const nameList = ['Joshua', 'Mary', 'Kolawole', 'Jumoke', 'Wale', "Deji", 'Fredrick', 'Wemimo', 'Mayowa', 'Olaoluwa'];
let iterator = iterateAll(nameList);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

const ages = [12, 5, 10, 24, 5, 13, 12, 10, 8, 27, 10, 15, 13, 11, 23, 11];
const setAges = new Set(ages);
for(let ageValue of setAges.values()) {
    console.log(ageValue);
}
// 12
// 5
// 10
// 24
// 13
// 8
// 27
// 15
// 11
// 23
for(let age of setAges.entries()) {
    console.log(age);
}
// [12, 12]
// [5, 5]
// [10, 10]
// [24, 24]
// [13, 13]
// [8, 8]
// [27, 27]
// [15, 15]
// [11, 11]
// [23, 23]
for(let age of setAges.keys()) {
    console.log(age);
}
// 12
// 5
// 10
// 24
// 13
// 8
// 27
// 15
// 11
// 23

const studentsMap = new Map([['Ada', 14], ['Joseph', 26], ['Philip', 18], ['Femi', 10], ['Toye', 15], ['Mary', 25], ['David', 17]]);
for(let age of studentsMap.values()) {
    console.log(age);
}
// 14
// 26
// 18
// 10
// 15
// 25
// 17
for(let details of studentsMap.entries()) {
    console.log(details);
}
// ['Ada', 14]
// ['Joseph', 26]
// ['Philip', 18]
// ['Femi', 10]
// ['Toye', 15]
// ['Mary', 25]
// ['David', 17]
for(let names of studentsMap.keys()) {
    console.log(names);
}
// Ada
// Joseph
// Philip
// Femi
// Toye
// Mary
// David

function *aGenerator() {
    let output1 = yield 1;
    let output2 = yield output1 + 5;
    yield output2 ** 3;
}
let caller = aGenerator();
console.log(caller.next()) //{value: 1, done: false}
console.log(caller.next()) //{value: NaN, done: false}
console.log(caller.next()) //{value: NaN, done: false}
console.log(caller.next()) //{value: undefined, done:true}

function *aGenerator() {
    let output1 = yield 1;
    let output2 = yield output1 + 5;
    yield output2 ** 3;
}
let caller = aGenerator();
console.log(caller.next()) //{value: 1, done: false}
console.log(caller.next(1)) //{value: 6, done: false}
console.log(caller.next(6)) //{value: 216, done: false}
console.log(caller.next()) //{value:undefined, done: true}