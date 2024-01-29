class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    let newNode = new Node(value);
    this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;
    this.length++;
  }
  prepend(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }
  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }
    if (index >= this.length) {
      this.append(value);
      return this.printList();
    }
    const leader = this.traverseToIndex(index - 1);
    const newNode = new Node(value);
    newNode.next = leader.next;
    leader.next = newNode;
    newNode.previous = leader;
    this.length++;
    return this.printList();
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return this.printList();
    }
    let leader = this.traverseToIndex(index - 1);
    let removalNode = this.traverseToIndex(index);
    let trailer = removalNode.next;
    leader.next = trailer;
    trailer.previous = leader;
    this.length--;
    return this.printList();
  }
}

const dLinkedList = new DoublyLinkedList(10);
dLinkedList.append(20);
dLinkedList.append(30);
dLinkedList.prepend(1);
dLinkedList.insert(1, 5);
dLinkedList.remove(1);
