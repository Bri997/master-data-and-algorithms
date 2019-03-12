// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null
//       }
//     }
//   }
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class doubleLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.prev = this.tail;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null
    };
    newNode.next = this.head;
    this.head = newNode;
    this.head.prev = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    //check index params
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);

    const leadNode = this.traverseToIndex(index - 1);
    //get to the previous node

    const nextPointer = leadNode.next;
    //next node

    leadNode.next = newNode;
    newNode.next = nextPointer;
    newNode.prev = leadNode;
    nextPointer.prev = newNode;

    this.length++;
    console.log(this.printList());
  }
  traverseToIndex(index) {
    //check for valid index
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    const leadNode = this.traverseToIndex(index - 1);
    const nodeToRemove = leadNode.next;
    leadNode.next = nodeToRemove.next;
    this.length--;
    console.log(this.printList());
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }

    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this;
  }
}

const myLinkedList = new doubleLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);
// myLinkedList.remove(2);
myLinkedList.reverse();
console.log(myLinkedList.printList());
