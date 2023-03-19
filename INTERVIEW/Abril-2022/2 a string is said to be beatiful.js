/* 
    + https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/practice-problems/algorithm/beautiful-strings-10/
*/

const beatifulString = (str) => {
  const hashMapLetters = {};
  const mandatoryLetter = "a";
  let mandatoryLetterAccomplish = false;

  for (let x = 0; x < str.length; x++) {
    if (mandatoryLetter === str[x]) mandatoryLetterAccomplish = true;

    if (hashMapLetters[str[x]] != undefined) {
      hashMapLetters[str[x]] +=  1;
    } else {
      hashMapLetters[str[x]] = 1;
    }
  }
  hashMapLetters
  if (!mandatoryLetterAccomplish) return false;
  debugger
  const higher = hashMapLetters[Object.keys(hashMapLetters)[0]];

  for (let letter in hashMapLetters) {
    if (higher < hashMapLetters[letter]) {
      return false;
    }
  }
  return true
};

const word1 = "aabbcc"
const word2 = "bbbaaacdfe"
const res = beatifulString(word2)
console.log('---------res', res)
