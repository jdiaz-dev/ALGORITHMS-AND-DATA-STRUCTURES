//pattern: cyclic sort
//https://www.geeksforgeeks.org/find-the-missing-number/
function findTheMissingNumber(nums) {
    let currentIndex = 0;
  
    while (currentIndex < nums.length) {
      const rightIndex = nums[currentIndex] - 1; //nums[currentIndex] = 3, 3-1 = 2
      if(rightIndex >= nums.length){
        return currentIndex + 1
      } else if ( nums[currentIndex] !== nums[rightIndex]) {
        
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
    nums
    return -1
}
  
const arr3 = [1, 5, 6, 7, 3, 2]
// [1, 2, 3, 7, 5, 6]
const res = findTheMissingNumber(arr3)

res