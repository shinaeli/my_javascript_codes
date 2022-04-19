let contactList = [{contactName: 'Adewale Oluwakemi', phone: 08146241920}, {contactName: 'Coker Folasayo', phone: 08062240419}, {contactName: 'Drew Anthony', phone: 08133012467}, {contactName: 'Dreymond Philip', phone: 08134469038}, {contactName: 'George Foredawn', phone: 081412125092}, {contactName: 'Shawn Coby', phone: 08140216829}];

function searchContact(list, contact) {
  let contactArr = [];
  for(let contactObj of list) {
    contactArr.push(contactObj.contactName);
  }
  let lowestContact = 0, highestContact = contactArr.length - 1;
  while(lowestContact <= highestContact) {
    let midContact = Math.floor((lowestContact + highestContact) / 2);
    let contactFound = contactArr[midContact];
    if(contactFound == contact) {
      let contactObjIndex = list[midContact];
      alert(`${contact}'s phone number is 0${contactObjIndex.phone}.`);
      console.log(`${contact}'s phone number is 0${contactObjIndex.phone}.`);
      return;
    } else if(contactFound > contact) {
      highestContact = midContact - 1;
    } else {
      lowestContact = midContact + 1;
    }
  }
  // console.log(contactArr);
  alert(`${contact} doesn't exist in your phonebook.`);
  console.log(`${contact} doesn't exist in your phonebook.`);
  return;
}

searchContact(contactList, 'Dreymond Philip');  //Dreymond Philip's phone number is 08134469038.
searchContact(contactList, 'Aduke Cole');  //Aduke Cole doesn't exist in your phonebook.