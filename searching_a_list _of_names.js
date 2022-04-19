let staffNames = ['Ahmed', 'Blessing', 'Diran', 'Frida', 'Gift', 'Joseph', 'Moses', 'Moshood', 'Olatayo', 'Pelumi', 'Samuel', 'Shina', 'Thomas'];

function search(list, item) {
  let lowerBound = 0, upperBound = list.length - 1;
  while(lowerBound <= upperBound) {
    let midBound = Math.floor((lowerBound + upperBound) / 2);
    let randomGuess = list[midBound];
    if(randomGuess == item) {
      alert(`${item} is located at number ${midBound + 1} position in the list.`);
      console.log(`${item} is located at number ${midBound + 1} position in the list.`);
      return midBound;
    } else if(randomGuess < item) {
      lowerBound = midBound + 1;
    } else {
      upperBound = midBound - 1;
    }
  }
  alert(`${item} doesn't exist in the list.`);
  console.log(`${item} doesn't exist in the list.`);
  return null;
}

search(staffNames, 'Shina');