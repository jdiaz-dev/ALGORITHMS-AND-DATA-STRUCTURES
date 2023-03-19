/* 
    1. convert word with the next letter of alphabet only if it is character
    2. if it is vowel, convert it to uppercase

*/

const word = "qwdere2 *!wqhw";

const transformString = (elem: any): string => {
  const regLetters = /[a-zA-Z]/;
  const regVowels = /[aeiou]/;

  const newChar = String.fromCharCode(elem.charCodeAt(0) + 1);
  return regLetters.test(elem) ? (regVowels.test(newChar) ? newChar.toUpperCase() : newChar) : elem;
};

const res1 = word.split("").map(transformString).join("");
console.log("----res1", res1);

// ------------------------------------ FUNCTOR
//solving previous problem with functors
const transformStringWithFunctor = (word: string, fn: Function) => {
  return word
    .split("")
    .map((char) => fn(char))
    .join("");
};
const res2 = transformStringWithFunctor(word, transformString);
console.log("----res2", res2);
