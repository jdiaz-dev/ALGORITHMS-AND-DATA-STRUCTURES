/* 
  questions :
    -> when to choose one linked list over one array?
      - choose array when we want to use less memory
      - choose linked list when we will realize multiple insertion and remove operations
      - 
    -> given algorithms to sort one array and linked list, what is more efficient?
      - for array we can use quicksort, mergesort, heapsort, etc
      - for linked list we can use mergesort
      - in general the complexity of time is O(n log n) for both
    -> use cases to use one stack
    -> complexity time  and space for hash table
      - time best scenario: O(1) for put(), get(), delete() and search()
      - time worst scenario: O(n) for put(), get(), delete() and search()
      - space: O(n)
    -> what is the advantage of one binary tree search? 
      - the advantage of one binary tree search is that it balance itself, it allow to have a better complexity of time for the operations
      - complexity time:
        - Search: O(log n) avg, O(n) worst
        - Insert: O(log n) avg, O(n) worst
        - Delete: O(log n) avg, O(n) worst

*/


/* 
  ideas: 
    - check in internet what is the impplementation of linked list and doubly linked list in javascript
*/


const h = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: {
          value: 5,
          next: {
            value: 6,
            next: {
              value: 7,
              next: {
                value: 8,
                next: {
                  value: 9,
                  next: {
                    value: 10,
                    next: null,
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

const h2 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: {
          value: 5,
          next: null,
          prev: {
            value: 4,
            next: "[Circular]",
            prev: "[Circular]",
          },
        },
        prev: {
          value: 3,
          next: "[Circular]",
          prev: "[Circular]",
        },
      },
      prev: {
        value: 2,
        next: "[Circular]",
        prev: "[Circular]",
      },
    },
    prev: {
      value: 1,
      next: "[Circular]",
      prev: null,
    },
  },
  prev: null,
};
