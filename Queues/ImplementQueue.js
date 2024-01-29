class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    if (this.isEmpty()) return null;
    return this.first.value;
  }
  enqueue(value) {
    let newNode = new Node(value);
    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    }
    this.last.next = newNode;
    this.last = newNode;
    this.length++;
    return this;
  }
  dequeue() {
    let holder = this.first;
    this.first = this.first.next;
    this.length--;
    return holder;
  }
  isEmpty() {
    if (this.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  printList() {
    let current = this.first;
    let array = [];
    while (current) {
      array.push(current.value);
      current = current.next;
    }
    console.log(array);
  }
}

const myQueue = new Queue();
myQueue.enqueue("Harbaugh");
myQueue.enqueue("Vrabel");
myQueue.enqueue("Johnson");
myQueue.printList();
myQueue.dequeue();
myQueue.printList();
myQueue.dequeue();
myQueue.printList();
myQueue.dequeue();
myQueue.printList();
