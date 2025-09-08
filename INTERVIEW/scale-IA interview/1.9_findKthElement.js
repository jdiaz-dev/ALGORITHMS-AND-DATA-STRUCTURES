const findKthElement = (nums) => {
    const map = new Map()

    for(let x = 0; x < nums.length; x++){
        let num = nums[x]
        if(map.has(num)){
            const valueNum = map.get(num)
            map.set(num, valueNum + 1)
            
        }else{
            map.set(num, 1)
        }
    }

    const arr = [...map]

    arr.sort((first, second) => first[1] < second[1] ? 1: -1)
    return arr
}
const nums = [3, 1, 4, 4, 5, 2, 6, 1, 1]

findKthElement(nums)