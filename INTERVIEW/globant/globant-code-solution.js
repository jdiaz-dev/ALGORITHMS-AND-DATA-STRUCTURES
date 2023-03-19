/** PART 2 ———————————————————————————————————————————-------—*/
const arr = [2, 3, 1, 1, 3, 2, 1, 4];
// 2 a return a new array with unique values
const unique = arr.filter((value, index, arr) => arr.indexOf(value) === index)
unique
// 2 b arr FILTER ALL EQUAL TO 1 and 3 
const filtered = arr.filter((value) => value == 1 || value == 3)
filtered
const newArray = arr.map( (number) => number + 1 )                          
newArray

/** PART 3 ———————————————————————————————————————————-------—*/
/** PROMISES —————————————————————————————————————————-------—*/
/* {promise print foo after 3000 MS} */
let p = new Promise((resolved, reject) => {
  setTimeout(() => {
    try {
      resolved(console.log('foo'))
    } catch (error) {
      reject(error)
    }
  }, 3000)
})

/** PART 4 ———————————————————————————————————————————-------—*/
/** SORT ARRAYS ———————————————————————————————————-------—*/
const books = [
  { name: "The Telling", author: "Ursula K. Le_Guin" },
  { name: "Harry Potter", author: "Joanne Rowling" },
  { name: "Frankenstein; or, The Modern Prometheus", author: "Mary Shelley" },
  { name: "The Hunger Games", author: "Suzanne Collins" },
  { name: "Warcross", author: "Marie Lu" },
];
// Sort the array (desc) by author's lastname 

let surname = (fullName) => fullName[fullName.length - 1]

                              //first:  from arr[1] to arr[arr.length - 1]
                              //second:  from arr[0] to arr[arr.length - 2]
const booksSorted = books.sort((first, second) =>  {
  if(surname(first.author.split(' ')) < surname(second.author.split(' '))) return 1 //returns second 

  if(surname(first.author.split(' ')) > surname(second.author.split(' '))) return -1 //returns first
  return 0
} )
// books
booksSorted

const result = Array.from(Array(10).keys(' '))
result

const arrr = Array(10).keys(' ')
arrr

const num = new Number(234)
num
const result2 = Array.from(Array(10).keys(' ')).sort((prev, next) => next > prev ? 1: -1 )
result2


