function countDown(num) {
  if(num == 1) { //This is the base case
    return num;
  } else { //This is the recursive case
    console.log(num);
    return countDown(num - 1);
  }
}
countDown(20);



function factorial(num) {
  if(num == 1) {
    return 1;
  } else {
    let newOutput = factorial(num - 1); //Stores the values returned from each recursion into 'newOutput'
    return num * newOutput;
  }
}
factorial(15);

function addUp(num) {
  if(num == 0) {
    return num;
  } else {
    let newNum = addUp(num - 1);
    return num + newNum;
  }
}
addUp(5);

function changeBase(num, base) {
  if(num == 1) {
    return 1;
  } else {
    let modulus = num % base;
    let newNum = Math.floor(num / base);
    let newModulus = changeBase(newNum, base);
    let output = '';
    return output+newModulus+modulus;
  }
}
changeBase(46, 4);



























class Stack {
  constructor() {
    this.datastore = [];  //This empty array serves as a uderlyig data structure of the stack
    this.top = 0;  //This idicates the top of the stack ad determies the positio i the uderlyig array i which a ew elemet will e placed or stored
  }

  push(data) {
    this.datastore[this.top] = data; //Places the data ito the curret top positio
    this.top++;  //This ssigs a ew top positio
  }

  pop() {
    return this.datastore[--this.top];
  }

  peek() {
    return this.datastore[this.top - 1];
  }

  length() {
    return this.top;
  }

  clear() {
    this.top = 0;
  }

  empty() {
    return this.top == 0;
  }

}
function changeBase(num, base) {
  let stack = new Stack();
  while(num >= 1) {
    stack.push(num % base);
    num = Math.floor(num / base);
  }
  let output = '';
  while(stack.length() > 0) {
    output += stack.pop();
  }
  return output;
}
changeBase(326, 8);
