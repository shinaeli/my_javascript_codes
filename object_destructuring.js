const details = {
  name: 'Charity Onyebezie',
  occupation: 'driver',
  company: 'TalentCity Limited',
  salary: 50000
}
const { name, occupation, salary } = details;
console.log(name, salary, occupation);  //Charity Onyebezie 50000 driver
const { name, occupation, salary, home } = details;
console.log(name, salary, occupation, home);  //Charity Onyebezie 50000 driver undefined
const { home='Ikorodu' } = details;  //Assigns 'Ikorodu' as a default value for variable 'home'
console.log(home);  //Ikorodu
const { name:title, occupation:role, company:firm, salary:benefit } = details; //Replacing the default variable names with new variable names otherwise called aliases
console.log(title, role, firm, benefit);  //Charity Onyebezie driver TalentCity Limited 50000



const details = {
  name: 'Charity Onyebezie',
  occupation: 'driver',
  children: {
    firstChild: 'Amaka',
    secondChild: 'Chidioke',
    thirdChild: 'Jonathan',
    fourthChild: 'Chidera',
    lastChild: 'David'
  },
  company: 'TalentCity Limited',
  salary: 50000,
  concubines: {
    first: 'Titi',
    second: 'Amarachi',
    third: 'Theresa',
    fourth: 'Onyeka'
  }
}
const { children: {kids = 5}, concubines: {extraWives = 4} } = details;  //Destructuring of nested objects
const { children: { firstChild, thirdChild }, concubines: { second, fourth } } = details;  //Destructuring of nested objects
console.log(kids, extraWives);  //5 4
console.log(firstChild, second, thirdChild, fourth);  //Amaka Amarachi Jonathan Onyeka
const { children, salary, ...others } = details;
console.log(others);


function getUserData({firstName, favoriteColor='green'}) {
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}
getUserData({firstName: 'Alejandro', favoriteColor: 'purple'})  //'Your name is Alejandro and you like purple'
getUserData({firstName: 'Melissa'})  //'Your name is Melissa and you like green'
