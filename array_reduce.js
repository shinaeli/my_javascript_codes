const agesRegistered = [16, 19, 37, 13, 24, 66, 15, 46, 17, 39, 18];
let ageAdder = function (accumulator, age) {
  return accumulator + age;
}
 //The '0' is used to initialize the accumulator or serves as the initial or default value of the accumulator
console.log(agesRegistered.reduce(ageAdder, 0));