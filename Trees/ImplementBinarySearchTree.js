class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (newNode.value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value) {
    if (this.root === null) return null;
    let currentNode = this.root;
    while (true) {
      if (value === currentNode.value) return currentNode;
      if (value < currentNode.value) {
        if (!currentNode.left) return null;
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) return null;
        currentNode = currentNode.right;
      }
    }
  }
  breadthFirstSearch() {
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return list;
  }
  breadthFirstSearchR(queue, list) {
    if (!queue.length) {
      return list;
    }
    let currentNode = queue.shift();
    list.push(currentNode.value);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    return this.breadthFirstSearchR(queue, list);
  }
  // remove(value) {
  //   if (!this.root) return false;
  //   let currentNode = this.root;
  //   let parentNode = null;
  //   while (true) {
  //     if (value < currentNode.value) {
  //       if (!currentNode.left) return null;
  //       parentNode = currentNode;
  //       currentNode = currentNode.left;
  //     } else if (value > currentNode.value) {
  //       if (!currentNode.right) return null;
  //       parentNode = currentNode;
  //       currentNode = currentNode.right;
  //     } else {
  //       // We have a match, get to work!

  //       // Option 1: No right child.
  //       if (!currentNode.right) {
  //         if (!parentNode) {
  //           this.root = currentNode.left;
  //         } else if (parentNode.value > currentNode.value) {
  //           // If parent is greater than current, make left a left child of the parent
  //           parentNode.left = currentNode.left;
  //         } else {
  //           // If parent is less than current, make left child a right child of the parent
  //           parentNode.right = currentNode.left;
  //         }
  //       } else if (!currentNode.left) {
  //         // Option 2: No Left child
  //       } else {
  //         // Option 3: Left and Right Child
  //       }
  //     }
  //   }
  // }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(1);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
//console.log(tree.lookup(6));
//console.log(tree.lookup(20));
//console.log(tree.lookup(100));
//console.log(JSON.stringify(traverse(tree.root)));
//console.log(tree.breadthFirstSearch());
console.log(tree.breadthFirstSearchR([tree.root], []));

//     9
//  4     20
//1   6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
