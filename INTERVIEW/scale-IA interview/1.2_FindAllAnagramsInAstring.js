//x
//pattern: slide window
//https://dev.to/chakrihacker/find-all-anagrams-in-a-string-leetcode-l4i
var findAnagrams = function(str, sample) {
    let hashMap = new Map()
    for(let i = 0; i < sample.length; i++) {
        if(hashMap.has(sample[i])) {
            hashMap.set(sample[i], hashMap.get(sample[i]) + 1)
        } else {
            hashMap.set(sample[i], 1)
        }
    }
    // hashMap

    let res = new Array()
    let start = 0, end = 0
    while(end < str.length) {
        if(hashMap.get(str[end]) > 0) {
            hashMap.set(str[end], hashMap.get(str[end]) - 1)
            end++
            if(end - start == sample.length) {
                // console.log(str[end - 1])
                // console.log(hashMap.get(str[end -1 ] ))
                res.push(start)
            }
        } else if(start == end) {
            start++
            end++
        } else {
            hashMap.set(str[start], hashMap.get(str[start]) + 1)
            // console.log(hashMap)
            start++
        }
    }
    // res
    return res
};

const str = "cbaabcebabacd", sample = "abc"
findAnagrams(str, sample)


const map = new Map()
map.set('a', 2)
console.log(map.get('b') > 0)