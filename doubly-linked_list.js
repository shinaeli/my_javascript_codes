class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if(this.length == 0) return;
        let removedNode = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            removedNode.prev = null;
        }
        // console.log(removedNode);
        this.length--;
        return removedNode;
    }

    shift() {
        if(this.length === 0) return;
        let removedNode = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            removedNode.next = null;
        }
        // console.log(removedNode);
        this.length--;
        return removedNode;
    }

    unshift(val) {
        let newNode = new Node(val);
        if(this.length === 0) {
           this.head = newNode;
           this.tail = this.head;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        //Increment the length by 1
        this.length++;
        //Return the entire list
        return this;
    }

    get(index) {
         // Create variables called 'counter' and 'currentNode'
        let counter, currentNode;
        // Return 'undefined' if index is less than zero or equal to or greater than the length of the list
        if(index < 0 || index >= this.length) return;
        // If the index provided is less than or equal to half of the list
        if(index <= (this.length / 2)) {
            // Set the 'counter' variable to zero
            counter = 0;
            // Set the 'currentNode' variable to the head node
            currentNode = this.head;
            // While there is a node next to the currentNode
            while(currentNode.next) {
                // Check if the counter is equal to the index provided
                if(counter === index) {
                    // If true, return the currentNode
                    return currentNode.val;
                }
                // Else set the next node to be the currentNode
                currentNode = currentNode.next;
                // Increment the counter by 1
                counter++;
            }
        } else {
            // Set the 'counter' variable to be the last index
            counter = this.length - 1;
            // Set the 'currentNode' variable to the tail node
            currentNode = this.tail;
            // While there is a node previous to the currentNode
            while(currentNode.prev) {
                // Check if the counter is equal to the index provided
                if(counter === index) {
                    // If true, return the currentNode
                    return currentNode.val;
                }
                // Else set the previous node to be the currentNode
                currentNode = currentNode.prev;
                // Decrement the counter by 1
                counter--;
            }
        }
    }

    set(index, val) {
        let node = this.get(index);
        if(!node) return false;
        else {
            node.val = val;
            return true;
        }
    }

    insert(val, index) {
        let currentNode, preNode, newNode = new Node(val);
        if(index < 0 || index >= this.length) return false;
        if(index === 0) return this.unshift(val);
        if(index === this.length) return this.push(val);
        else {
            preNode = this.get(index-1);
            currentNode = this.get(index);
            preNode.next = newNode;
            newNode.prev = preNode;
            newNode.next = currentNode;
            currentNode.prev = newNode;
        }
        this.length++;
        return true;
    }

    remove(index) {
        let currentNode, preNode, nextNode;
        if(index < 0 || index >= this.length) return false;
        if(index === 0) return this.shift();
        if(index === this.length-1) return this.pop();
        else {
            currentNode = this.get(index);
            preNode = this.get(index-1);
            nextNode = this.get(index+1);
            preNode.next = nextNode;
            nextNode.prev = preNode;
        }
        this.length--;
        return true;
    }
}

// 4 > 3 > 6 > 9 > 15
// H                T
let list = new DoublyLinkedList();