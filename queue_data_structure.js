class Queue {
  constructor() {
    this.datastore = []; //This serves as an underlying data structure which is an array
  }

  length() {
    return this.datastore.length; //This returns the number of elements in the queue
  }

  enqueue(element) {
    this.datastore.push(element);  //This adds a new element to the back of the queue
  }

  dequeue() {
    this.datastore.shift()  //This removes the element at the front of the queue
  }

  peek() {
    return this.datastore[this.length() - 1]; //This returns the element located at the ack of the queue
  }

  toString() { //Merges all the queue element into a string
    if(this.length() > 0) { //Check if the queue isn't empty
      let outputString = '';  //This serves as a empty string inorder to carry-out the concatenation operation
      for(let i=0; i<this.length(); i++) {  //Looping through the queue(underlying array)
        outputString += this.datastore[i]; //This concatenate each queue element to a string
      }
      return outputString; //Returns the cocatenated string
    } else {
      return null;
    }
  }

  front() { //Returns the element located at the front of the queue
    if(this.length() > 0) {
      return this.datastore[0];
    } else {
      return null;
    }
  }

  back() {  //Returns the element located at the back of the queue
    if(this.length() > 0) {
      return this.datastore[this.length() - 1];
    } else {
      return null;
    }
  }

  clear() { //This empties the queue
    this.datastore.length = 0;
  }

}

let queue = new Queue();
queue.enqueue('Aduke');
queue.enqueue('Seyi Mama');
queue.enqueue('Theophilus');
console.log(queue);  //Queue {datastore: ['Aduke', 'Seyi Mama', 'Theophilus']}
queue.clear();
console.log(queue);
console.log(queue.length());  //3
console.log(queue.front()); //Aduke
console.log(queue.back());   //Theophilus
console.log(queue.toString()); //AdukeSeyi MamaTheophilus
console.log(queue.peek()); //Theophilus
queue.dequeue();
console.log(queue); //Queue {datastore: ['Seyi Mama', 'Theophilus']}
queue.dequeue();
console.log(queue);  //Queue {datastore: ['Theophilus']}