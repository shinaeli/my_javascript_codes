let words = 'This error originated either by throwing inside of an async function';
console.log(words.length);
console.log(words.substring(5, 21));
console.log(words.replace('error', 'silly mistake'));

let sheet = 'Keep a clean sheet';
console.log(sheet.padStart(35, '#'));

let cardNum = ;

function padCard(cardNum) {
  let cardNumToString = String(cardNum);
  for(let i=0; i<cardNumToString.length - 5; i++) {
    cardNumToString.replace(i, '#');
  }
  return cardNumToString;
}
padCard(4563892101764207);