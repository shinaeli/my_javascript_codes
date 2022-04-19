class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class List { //A empty list having no head neither a tail
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if(!this.head) { //If there is no head
            this.head = newNode; //Assigns the new node to the head
            this.tail = newNode; //Assign the new node to the tail as well
        } else { //If the head is not empty
            this.tail.next = newNode; //Assign the new node to the tail
            this.tail = newNode; //This is to make sure that the tail still points a null
        }
        this.length++; //The length of the list increases after an element is added
        return this;
    }

    traverseList() {
        let currentNode = this.head;
        while(currentNode) { //While there is a current node
            console.log(currentNode.val); //Getting the value of the curret node
            currentNode = currentNode.next; //Getting the next node
        }
    }

    pop() {
        if(this.length == 0) { //Returns 'undefined' if the list is empty
            return;
        } else {
            let currentNode = this.head, preNode = currentNode; //Let 'preNode' and 'currentNode' keep track of the current node and tail node
            while(currentNode.next) { //While there is a node after the current node
               preNode = currentNode; //Prenode becomes the current node 
               currentNode = currentNode.next; //The current node becomes the next node
            }
            this.tail = preNode; //As the loop ends, the preNode is assigned to the tail
            this.tail.next = null; //The tail node is connected to null(signifying the end of the list)
            if(this.length == 0) {//If the list is empty
                this.head = null; //Assigns the head node to null
                this.tail = null; //Assigns the tail node to null
            }
            this.length--; //The length of the list is decremented by 1
            // console.log(currentNode, currentNode.val, this.tail, this.tail.val, this);
            console.log(currentNode.val);  //Logs the value in the previous tail node that has been removed
            return currentNode; //Returns the previous tail node that has been removed
        }
    }

    shift() {
        if(this.length == 0) {//If the list is empty
            return; //Return undefined
        } else {
            let removedNode = this.head; //Assigns the current head node to 'removedNode'
            if(this.head.next) {//If there is a node next to the current head node
                this.head = this.head.next; //Make the next node to be the new head node
            }
            this.length--; //Decrement the length by 1
            console.log(removedNode.val);  //Log the value in the 'removedNode'
            return removedNode; //Return the 'removedNode'
        }
    }

    unshift(val) {
        let newNode = new Node(val); //Create a new node with the value provided
        if(this.length == 0) { //Check if the list is empty
            this.head = newNode; //Assign the new node to the head node
            this.tail = this.head; //Assign the head node to the tail node as well
        } else {
            newNode.next = this.head; //Assign the node next to the new node to the head node
            this.head = newNode; //Assign the new node as the head node
        }
        this.length++; //Increment the length of the list by 1
        return this; //Return the list
    }
}

let list1 = new List();
list1.push(5);
list1.push(10);
list1.push(15);
console.log(list1);
list1.head; //Node {val: 5, next: Node}
list1.head.next; //Node {val: 10, next: Node}
list1.head.next.next; //Node {val: 15, next: null}
list1.traverseList();
list1.pop();
list1.shift();
list1.unshift(20);