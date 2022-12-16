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
            this.tail = newNode; //This is to make sure that the tail still points to null
        }
        this.length++; //The length of the list increases by 1 after an element is added
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

    // get(index) {
    //     let counter, currentNode, valueNode;
    //     if(index < 0 || index >= this.length) {
    //         return null;
    //     } else {
    //         currentNode = this.head, valueNode = currentNode, counter = 0;
    //         while(currentNode.next) {
    //             if(counter == index) {
    //                 return currentNode.val;
    //             }
    //             valueNode = currentNode;
    //             currentNode = currentNode.next;
    //             counter++;
    //         }
    //     }
    // }

    get(index) {
        let counter, currentNode;
        if(index < 0 || index >= this.length) {
            return;
        } else {
            currentNode = this.head, counter = 0;
            while(counter != index) {
                currentNode = currentNode.next;
                counter++;
            }
            // console.log(currentNode.val);
            return currentNode;
        }
    }

    set(val, index) {
        let derivedNode = this.get(index); //Gets the node of the passed index argument
        if(derivedNode == null) { //If the node doesn't exist
            return false; //Return false
        } else { //If the node exists
            derivedNode.val = val; //Change the current value in the node found to the passed value 
            return true; //Return true
        }
    }

    insert(val, index) {
        // Initiate three variables 'preNode','newNode', 'currentNode'
        let newNode = new Node(val), preNode, currentNode;
        // Return 'false' if the index is less than zero or greater than the length of the list
        if(index < 0 || index > this.length) return false;
        // If index is equal to the length of the list
        if(index == this.length) {
            // Assign the node next to the tail node as the new node
            this.tail.next = newNode;
            // Increase the length of the list by 1
            this.length++;
        } else {
            // Get the node located at the index provided and assign it as the current node
            currentNode = this.get(index);
            // Get the node existing before the current node ad assign it as the pre node
            preNode = this.get(index-1);
            // Assign the node next to the pre node as the new node
            preNode.next = newNode;
            // Assign the node next to the new node as the current node
            newNode.next = currentNode;
            // Increase the length of the list by 1
            this.length++;
        }
        return true;
    }

    remove(index) {
        // Initiate three variables 'preNode','afterNode', 'currentNode'
        let preNode, afterNode, currentNode;
        // If index is less than zero, return 'undefined'
        if(index < 0) return;
        // If index is equal to the length of list minus 1, then pop method is called
        if(index == this.length-1) this.pop();
        // If index is equal to zero, then shift method is called
        if(index == 0) this.shift();
        else {
            // Get the node existing before the current node ad assign it as the pre node
            preNode = this.get(index-1);
            // Get the node located at the index provided and assign it as the current node
            currentNode = this.get(index);
            // Get the node existing after the current node and assign it as the pre node
            afterNode = this.get(index+1);
            // Assign the node next to the preNode as the afterNode
            preNode.next = afterNode;
            // Decrease the length of the list by 1
            this.length--;
            // Return the value located in the currentNode
            return currentNode.val;
        }
    }

    // 13 -> 27 -> 32 -> 71
    // H                  T
    // 13 <- 27 <- 32 <- 71
    // T                 H

    reverse() {
        // Initialize a variable 'formerheadNode' and assign it as the current head node
        let formerheadNode = this.head;
        // Assign the current head node as tail node
        this.head = this.tail;
        // Assign the tail node as formerheadNode
        this.tail = formerheadNode;
        // Initialize two variables 'nextNode', 'prevNode' and assign the prevNode to 'null'
        let nextNode, prevNode = null;
        // Looping through the list
        for(let i=0; i<this.length; i++) {
            // Assign the nextNode as the node next to the formerheadNode
            nextNode = formerheadNode.next;
            // The node next to the formerheadNode becomes the prevNode
            formerheadNode.next = prevNode;
            // Assign the formerheadNode as the prevNode
            prevNode = formerheadNode;
            // Assign the formerheadNode as the nextNode
            formerheadNode = nextNode;
        }
        // Return the whole list
        return this;
    }

    print() {
        // Initialize a empty array 'arr', a variale called 'currentNode' and assign it as the current head node
        let arr = [], currentNode = this.head;
        // While the currentNode exists
        while(currentNode) {
            // Push the value located in the curretNode into the empty array 'arr'
            arr.push(currentNode.val);
            // Assign the currentNode as the node located next to it
            currentNode = currentNode.next;
        }
        // Once the loop is terminated, display the filled array in the console
        console.log(arr);
    }
}

// 0 1 2 3  4
// 3 5 8 10 12



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