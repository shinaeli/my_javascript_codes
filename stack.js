console.log('---- Implementing a stack using an array with the \'push\' method ----');
var stack = [];
var stackLength = prompt(`Enter the stack's length: `);
let topOfStack = -1;
if(stackLength == '' || stackLength < 0) {
  alert('Invalid input');
  console.log('Invalid input');
} else if(Number(stackLength) == 0) {
  alert(`The top of the stack is ${topOfStack}.`);
  console.log(`The top of the stack is ${topOfStack}.`);
  alert('This is an empty stack');
  console.log('This is an empty stack');
} else {
  for(let i=0; i < Number(stackLength); i++) {
    let request = prompt('Enter an element: ');
    stack.push(request);
    topOfStack++;
  }
  alert(`The top of the stack is ${topOfStack}.`);
  console.log(`The top of the stack is ${topOfStack}.`);
  alert(stack);
  console.log(stack);
  alert(`Is the stack is empty? Answer: ${Number(stackLength) <= 0 ? 'True' : 'False'}`);
  console.log(`Is the stack is empty? Answer: ${Number(stackLength) <= 0 ? 'True' : 'False'}`);
}


class Stack {
  constructor() {
    this.datastore = [];  //This empty array serves as an underlying data structure of the stack
    this.top = 0;  //This indicates the top of the stack and determines the position in the underlying array in which a new element will be placed or stored
  }

  push(data) {
    this.datastore[this.top] = data; //Places the data into the current top position
    this.top++;  //This assigns a new top position
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
let members = new Stack();
members.push('David');
members.push('Toyosi');
members.push('Jumoke');
members.push('George');
console.log(members); //{datastore: ['David', 'Toyosi', 'Jumoke', 'George'], top: 4}
members.length();  //4
members.pop();
members.pop();
console.log(members); //{datastore: ['David', 'Toyosi'], top: 2}
members.peek();  //'Toyosi'
members.clear();
members.empty();  //false


console.log('---Converting a Number to a Base---');
let num = prompt('Enter a number: '), base = prompt('Enter a base: '), stack = new Stack(), parsedNum = Number(num), parsedBase = Number(base);
do {
  let remainder = parsedNum % parsedBase;
  stack.push(remainder);
  parsedNum = Math.floor(parsedNum / parsedBase);
} while(parsedNum >= 1)
var output = "";
while(stack.length() > 0) {
  output += stack.pop();
}
alert(`${num} to base ${base} is ${output}.`);
console.log(`${num} to base ${base} is ${output}.`);


console.log('---Determining if a given word is a palindrome or not---');
let word = prompt('Enter a word: ');
let stack = new Stack();
for(let i=0; i<word.length; i++) {
  stack.push(word[i]);
}
let stackedWord = "";
while(stack.length() > 0) {
  stackedWord += stack.pop();
}
if(stackedWord == word) {
  alert(`${word} is a palindrome.`);
  console.log(`${word} is a palindrome.`);
} else {
  alert(`${word} isn't a palindrome`);
  console.log(`${word} isn't a palindrome`);
}


console.log('---Calculating The Factorial Of A Given Number---');
let num = prompt('Enter a number: ');
let stack = new Stack();
let parsedNum = Number(num);
if(parsedNum == 0 || num == '') { 
  alert(`Invalid Input`);
} else {
  for(let reducer=1; parsedNum>reducer; reducer++) {
    stack.push(parsedNum - reducer);
  }
  let result = parsedNum;
  while(stack.length() > 0) {
    result*=stack.pop();
  }
  alert('The factorial of '+num+' is: '+result);
  console.log(`The factorial of ${num} is: ${result}`);
}
