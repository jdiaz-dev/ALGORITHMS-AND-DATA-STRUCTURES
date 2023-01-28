const isSubstring = (str1, str2) => {
  let str2Merged = str2.concat(str2);
  let charsMatched = 0,
    indexFirtString = 0;

  for (let x = 0; x < str2Merged.length; x++) {
    if (str2Merged[x] === str1[indexFirtString]) {
      charsMatched++;
      indexFirtString++;
    }

    if (indexFirtString === str1.length) break;
  }
  
  return charsMatched === str1.length ? true : false;
};

const res = isSubstring("waterbottle", "erbottlewat");
res;
