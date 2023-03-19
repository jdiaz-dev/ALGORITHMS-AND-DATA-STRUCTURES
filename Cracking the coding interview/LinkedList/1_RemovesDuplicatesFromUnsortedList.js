let _linkedList = {
  value: 5,
  next: {
    value: 5,
    next: {
      value: 6,
      next: {
        value: 9,
        next: {
          value: 1,
          next: {
            value: 6,
            next: {
              value: 3,
              next: {
                value: 3,
                next: null,
              },
            },
          },
        },
      },
    },
  },
};

function removesDuplicates(linkedList) {
  let linkedList1 = linkedList;
  let linkedList2 = linkedList1.next;

  //removing in head
  if(linkedList1.value === linkedList2.value){
    linkedList1.next = linkedList2.next
  }

  //removing in body
  while (linkedList1.next !== null) {
    let pointer1 = linkedList1.value;
    let previouslinkedList2 = linkedList2;

    while (linkedList2.next !== null) {
      let pointer2 = linkedList2.value;
      if (pointer1 === pointer2) {
        previouslinkedList2.next = linkedList2.next;
      }
      previouslinkedList2 = linkedList2;
      linkedList2 = linkedList2.next;
    }

    //removing in tail
    if (
      linkedList2.next === null &&
      previouslinkedList2.value === linkedList2.value
    ) {
      previouslinkedList2.next = null;
    }
    linkedList2 = linkedList1.next;
    linkedList1 = linkedList1.next;
  }
}

// removeNode(_linkedList, 9);
removesDuplicates(_linkedList);
console.log(JSON.stringify(_linkedList));

/*
let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = obj1;

// obj2.b = 100;
obj1;
obj2;
 */
