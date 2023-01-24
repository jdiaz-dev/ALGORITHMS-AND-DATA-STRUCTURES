const books = [
  { name: "The Telling", author: "Ursula K. Le_Guin" },
  { name: "Harry Potter", author: "Joanne Rowling" },
  { name: "Frankenstein; or, The Modern Prometheus", author: "Mary Shelley" },
  { name: "The Hunger Games", author: "Suzanne Collins" },
  { name: "Warcross", author: "Marie Lu" },
];

                              //first:  from arr[1] to arr[arr.length - 1]
                              //second:  from arr[0] to arr[arr.length - 2]
const booksSorted = books.sort((first, second) => {
  if (surname(first.author.split(" ")) < surname(second.author.split(" ")))
    return 1; //returns second

  if (surname(first.author.split(" ")) > surname(second.author.split(" ")))
    return -1; //returns first
  return 0;
});
// books
booksSorted;
