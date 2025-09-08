
// pattern: Fast and Slow pointers
//palindrome array
//https://medium.com/@sakalli.duran/linked-lists-reflections-unraveling-leetcodes-palindrome-linked-list-challenge-3d8f14a3dbf1#:~:text=We%20use%20the%20two%2Dpointer,linked%20list%20is%20a%20palindrome.
const linkedList = {
  value: 0,
  next: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 2,
          next: {
            value: 1,
            next: { value: 0, next: null },
          },
        },
      },
    },
  },
};

const isPalindrome = (linkedList) => {
  
  //getting the another mid
    let low = linkedList, fast = linkedList
    while(fast != null && fast.next != null){
        low = low.next
        fast = fast.next.next
    }

    //reverse another mid
    let prev = null, curr = low
    while(curr != null){
        let nextTemp = curr.next
        curr.next = prev
        prev = curr
        curr = nextTemp
    }
    while(prev != null){
      if(prev.value !== linkedList.value) return false
      prev = prev.next
      linkedList = linkedList.next
    }
    return true
};
const res = isPalindrome(linkedList)
console.log('----res', res)

