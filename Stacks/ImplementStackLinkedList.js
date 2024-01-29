class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peep() {
    return this.top.value;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.bottom = newNode;
      this.top = newNode;
    } else {
      const holder = this.top;
      this.top = newNode;
      this.top.next = holder;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.isEmpty()) return null;
    const holder = this.top;
    this.top = this.top.next;
    this.length--;
    return holder.value;
  }
  isEmpty() {
    if (this.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  printList() {
    let current = this.top;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const myStack = new Stack();
myStack.push(10);
myStack.push(20);
myStack.push(30);
myStack.printList();
myStack.pop();
myStack.printList();
