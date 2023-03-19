const countFrequency = (words) => {
  const counter = {},
    counterIndex = 1,
    wordIndex = 0;
  for (let x = 0; x < words.length; x++) {
    if (counter[words[x]] === undefined) {
      counter[words[x]] = 1;
    } else {
      counter[words[x]] += 1;
    }
  }
  counter
  const res = Object.entries(counter)
    .sort((first, second) => (first[wordIndex] < second[wordIndex] ? -1 : 1))
    .map((item) => item[counterIndex]);
  return res;
};

const words = ["the", "the", "dog", "got", "the", "bone", "bone"];

const res = countFrequency(words);
res

