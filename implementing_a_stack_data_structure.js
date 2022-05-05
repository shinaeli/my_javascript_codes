class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.end = null;
        this.top = null;
        this.size = 0;
    }

    push(val) {
       let newNode = new Node(val);
       if(this.size === 0) {
           this.end = newNode;
           this.top = this.end;
       }
       if(this.size >= 1) {
           let currentNode = this.top;
           currentNode.next = newNode;
           this.top = newNode;
       }
       this.size++;
       return this.size;
    }

    peek() {
        return this.top.val;
    }

    pop() {
        let currentNode = this.top;
        if(this.size === 0) return;
        else if(this.size === 1) {
            this.end = null;
            this.top = null;
        }
        this.top = this.top.next;
        this.size--;
        return currentNode.val;
    }
}

let stack = new Stack();

