const Student = {
  name: 'Oluwasina Omotosho',
  age: 45,
  favorite_food: ['Rice with Beans and Egg', 'Fufu and Egusi Soup', 'Pounded Yam and Vegetable Soup', 'Indomie with Fried Egg'],
  hasADegree: true,
  birthYear: 1982,
  // get age() {
  //   return 2021 - this.birthYear;
  // },
  
  // get food() {
  //   return this.favorite_food;
  // },

  set updated_food(val) {
    return this.favorite_food.push(val);
  }
}
// console.log(Student.age);
console.log(Student.food);
Student.updated_food = 'Amala with Ewedu';