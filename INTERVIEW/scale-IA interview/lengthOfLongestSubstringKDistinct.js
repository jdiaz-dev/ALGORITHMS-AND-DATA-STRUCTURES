//https://medium.com/theleanprogrammer/js-longest-substring-with-k-distinct-characters-sliding-window-technique-7585a0d34ee4
const lengthOfLongestSubstringKDistinct = function(s, k) {
    let dict = {};
    let currentWindowlength = 0;
    let start_window = 0, maxLength = 1;
    for (let i = 0; i < s.length; i++) {
       let char = s[i];
       dict[char] = i;
      if (Object.keys(dict).length > k) {
         start_window = Math.min.apply(null, Object.values(dict));
         delete dict[s[start_window]];
         start_window++;
       }
      currentWindowlength = i - start_window + 1;
      maxLength = Math.max(currentWindowlength, maxLength);
    }
    return maxLength;
};
lengthOfLongestSubstringKDistinct("eceba", 2)