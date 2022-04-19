const marks = {
  fullName: "Mark",
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    return this.mass/(this.height**2);
  }
}
marks.calcBMI();

const johns = {
  fullName: "John",
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    return this.mass/(this.height**2);
  }
}
johns.calcBMI();

if(johns.calcBMI() > marks.calcBMI()) {
  alert(`John's BMI (${johns.calcBMI()}) is higher than Mark's BMI (${marks.calcBMI()}).`);
} else {
  alert(`Mark's BMI (${marks.calcBMI()}) is higher than John's BMI (${johns.calcBMI()}).`);
}