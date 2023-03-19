function LetterChanges(str) {
  const strArr = str.split("");
  const regExp = /[a-zA-Z]/,
    vowels = /[aeiou]/;
  let nextChar;
  const res = strArr.map((elem) => {
    if (regExp.test(elem)) {
      nextChar = String.fromCharCode(elem.charCodeAt() + 1);
    } else {
      return elem;
    }

    if (vowels.test(nextChar)) nextChar = nextChar.toUpperCase();
    return nextChar;
  });
  return res.join('');
}

const res = LetterChanges("asdffad!*");
res;
