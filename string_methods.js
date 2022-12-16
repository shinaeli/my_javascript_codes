let words = 'This error originated either by throwing inside of an async function';
console.log(words.length);
console.log(words.substring(5, 21));
console.log(words.replace('error', 'silly mistake'));

let sheet = 'Keep a clean sheet';
console.log(sheet.padStart(35, '#'));

let cardNum = ;

function padCard(cardNum) {
  let cardNumToString = String(cardNum);
  for(let i=0; i < cardNumToString.length - 5; i++) {
    cardNumToString.replace(i, '#');
  }
  return cardNumToString;
}
padCard(4563892101764207);

const greeter = 'Hello, Davis Clark Freeman';
console.log(greeter.includes('b')); //false
console.log(greeter.includes('Davis')); //true
console.log(greeter.includes('man')); //true
console.log(greeter.includes('Man')); //false
console.log(greeter.includes('ark') && greeter.includes('free')); //false
console.log(greeter.includes('lo') && greeter.includes('man')); //true
console.log(greeter.startsWith('i', 7)); //false
console.log(greeter.startsWith('o', 4)); //true
console.log(greeter.endsWith('s', 15)); //false
console.log(greeter.endsWith('k', 17)); //false
console.log(greeter.includes('a', 13)); //true
console.log(greeter.length); //26
console.log(greeter.indexOf('k')); //17

console.log('La la la'.repeat(3)); //La la laLa la laLa la la
// The 'repeat' method recreates a string to a specified number.
// The specified number is the argument which is passed to it.

const test = `Hello
world!`;
console.log(test.length); //12
console.log(test);
// Hello
// world!