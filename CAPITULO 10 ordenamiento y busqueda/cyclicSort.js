//pattern: Cyclic sort

/* 
  this algorithm serve only for complete ascendent numbers. Example: [1,2,3,4,5,6]
*/


//https://github.com/Chanda-Abdul/Several-Coding-Patterns-for-Solving-Data-Structures-and-Algorithms-Problems-during-Interviews/blob/main/%E2%9C%85%20%20Pattern%2005:%20Cyclic%20Sort.md

function cyclicSort(nums) {
    let currentIndex = 0;
  
    while (currentIndex < nums.length) {
      const rightIndex = nums[currentIndex] - 1; //nums[currentIndex] = 3, 3-1 = 2
      if (nums[currentIndex] !== nums[rightIndex]) {
        //3 !== 2
        //swap
        // [nums[currentIndex], nums[rightIndex]] = [nums[rightIndex], nums[currentIndex]]
        let temp = nums[currentIndex];
        nums[currentIndex] = nums[rightIndex];
        nums[rightIndex] = temp;
      } else {
        currentIndex++;
      }
    }

    return nums;
}
  

const arr1 = [3, 1, 5, 4, 2]
const res1 = cyclicSort(arr1);
res1

const res2 = cyclicSort([2, 6, 4, 3, 1, 5]);
res2

const res3 = cyclicSort([1, 5, 6, 4, 3, 2]);
res3






