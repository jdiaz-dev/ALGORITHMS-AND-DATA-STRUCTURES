// Node definition
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Singly Linked List
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0; // maintain size in O(1)
  }

  // Insert at the front O(1)
  pushFront(value) {
    const node = new ListNode(value);
    node.next = this.head;
    this.head = node;

    if (!this.tail) {
      this.tail = node;
    }

    this.size++;
  }

  // Insert at the back O(1) if we keep tail pointer
  pushBack(value) {
    const node = new ListNode(value);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  // Remove from front O(1)
  popFront() {
    if (!this.head) return null;
    const value = this.head.value;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    this.size--;
    return value;
  }

  // Remove from back O(n) unless doubly linked list
  popBack() {
    if (!this.head) return null;

    const value = this.tail.value;

    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      let current = this.head;
      while (current.next !== this.tail) {
        current = current.next;
      }
      current.next = null;
      this.tail = current;
    }

    this.size--;
    return value;
  }

  // Insert after a given node O(1)
  insertAfter(node, value) {
    if (!node) return;
    const newNode = new ListNode(value);
    newNode.next = node.next;
    node.next = newNode;

    if (this.tail === node) {
      this.tail = newNode;
    }

    this.size++;
  }

  // Delete a given node O(n) (need to find previous)
  delete(node) {
    if (!this.head || !node) return;

    if (this.head === node) {
      return this.popFront();
    }

    let current = this.head;
    while (current.next && current.next !== node) {
      current = current.next;
    }

    if (current.next === node) {
      current.next = node.next;
      if (node === this.tail) {
        this.tail = current;
      }
      this.size--;
      return node.value;
    }
  }

  // Find by value O(n)
  find(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) return current;
      current = current.next;
    }
    return null;
  }

  // Reverse (iterative) O(n)
  reverse() {
    let prev = null;
    let current = this.head;
    this.tail = this.head;

    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }

  // Utility to print list
  print() {
    let res = [];
    let current = this.head;
    while (current) {
      res.push(current.value);
      current = current.next;
    }
    return res.join(" -> ");
  }
}
