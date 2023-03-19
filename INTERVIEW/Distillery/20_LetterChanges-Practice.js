function LetterChanges(word) {
  const alphabet = /[a-z]/,
    vowels = /[aeiou]/;

  const newWord = word.split("").map((char) => {
    if (alphabet.test(char)) {
      const asciiValue = char.charCodeAt();
      const newChar = String.fromCharCode(asciiValue + 1);
      if (vowels.test(newChar)) return newChar.toUpperCase();
      return newChar;
    }
    return char;
  }).join("")
  return newWord
}
const res = LetterChanges("asdffad!*");
res;
