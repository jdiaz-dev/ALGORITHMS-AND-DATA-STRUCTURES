
//1. pattern : Sliding Window
//https://medium.com/theleanprogrammer/js-longest-substring-with-k-distinct-characters-sliding-window-technique-7585a0d34ee4

const lengthOfLongestSubstringWithKDistinct = function(str, k) {
    let dict = {};
    let currentWindowlength = 0;
    let start_window = 0, maxLength = 1;
    const compensationLength = 1

    for (let i = 0; i < str.length; i++) {
       let char = str[i];
       dict[char] = i;
      if (Object.keys(dict).length > k) {
         start_window = Math.min.apply(null, Object.values(dict));
         delete dict[str[start_window]];
         start_window++;
      }
      currentWindowlength = i - start_window + compensationLength;
      maxLength = Math.max(currentWindowlength, maxLength);
    }
    maxLength
    return maxLength;
};
lengthOfLongestSubstringWithKDistinct("eceba", 2)



//my implementation
const longestSubstring = (str, k) => {
  let dict = {}
  let startWindow = 0, currentLength = 0, maxLength = 1
  const compensationLength = 1

  for(let x = 0; x < str.length; x++){
    dict[str[x]] = x
    
    if(Object.keys(dict).length > k){
      startWindow = Math.min.apply(null, Object.values(dict))
      delete dict[str[startWindow]]
      startWindow++
    }

    currentLength = x - startWindow + compensationLength
    maxLength = Math.max(currentLength, maxLength)
  }
  maxLength
  return maxLength
}
longestSubstring("eceeeccba", 1) 