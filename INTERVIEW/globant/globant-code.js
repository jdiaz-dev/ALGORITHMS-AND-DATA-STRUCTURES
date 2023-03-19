/** PART 1 ———————————————————————————————————————————-------—*/
/** ABOUT CLOSURES, FN's & THIS ——————————————————————-------—*/
// Complete the following function so it complies with the acceptance criteria in lines 7 & 8
const getSum = () => {};

// Fulfill these acceptance criteria’s 
console.info(getSum(3).call() === 4);
console.info(getSum(5).call() === 6);

// OR

let a = getSum(8);
console.info(a() === 9);

// THEN (optional )
console.info(this.n);


/** PART 2 ———————————————————————————————————————————-------—*/
/** ABOUT DATA STRUCTURES ————————————————————————————-------—*/
const arr = [2, 3, 1, 1, 3, 2, 1, 4];
// 2 a return a new array with unique values
const unique = arr.filter(() => )

// 2 b arr FILTER ALL EQUAL TO 1 and 3 
const filtered = arr.filter((number) => number == 1 || number == 3)
                          
// 2 c arr ADD 1 TO ALL 
const newArray = arr.map( (number) => number + 1 )                          

/** PART 3 ———————————————————————————————————————————-------—*/
/** PROMISES —————————————————————————————————————————-------—*/
/* {promise print foo after 3000 MS} */
let p = new Promise((resolved, reject) => {
  setInterval(() => {
    resolved(console.log('foo'))
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




/** PART 5 ———————————————————————————————————————————-------—*/
/** MORE ARRAY FN'S */
// Complete the function to generate an array of n elements 
// where its values range from 0 to n - 1 in ascending order
const generateArray = (numberOfElements) => { 
	const elements = []
  for(let element = 0; element < numberOfElements; element++){
    elements.push(element)
  }
  return elements
}  // 3 => [0, 1, 2]


// Complete the reverseArray function to create a numberOfElements element array and sort it in reverse order.
// Use the previous function to create the array
// add as many new functions as needed
const reverseArray = (numberOfElements) => { 
	const elements = generateArray(numberOfElements)
  const lengthArray = elements.length
  const elementsReversed = []
  
  for(let i = lengthArray; i > 0; i--){
    elementsReversed.push(elements[i])
  }
  return elementsReversed
} // 3 => [2, 1, 0]

/** PART 6 ———————————————————————————————————————————-------—*/
/** RECURSION ————————————————————————————————————————-------—*/
// Create a recursive function 'redrOesrever' that receives a string as a parameter and returns the reversed string
// e.g. redrOesrever('microsoft') // => tfosorcim 
const redrOesrever = (someString) => { } // => redrOesrever => reverseOrder


/** PART 7 ———————————————————————————————————————————-------—*/
/** ASYNC COUNTER ————————————————————————————————————-------—*/
// Complete the function to print numbers in sequence. This sequence should print the numbers in intervals of n seconds
const sequence = (number, interval) => {} // (3, 100) => ... 1, ... 2, ... 3


/** PART 8 ———————————————————————————————————————————-------—*/
/** ARR 2 OBJ ————————————————————————————————————————-------—*/
// Write a fn that abstracts the general case that converts expertsArr to expertsObj
const expertsArr = [
  ["Graydon", "Rust", 98.5, 2],
  ["Ken", "Go", 96, 3],
  ["John", "Lisp", 95.6, 7],
  ["Brendan", "Javascript", 99.4, 14],
  ["Ken", "C", 100, 6],
]

const createExpertsObject = (expertsArr) => {}

// Acceptance Criteria:
const expertsObj = {
  "Graydon": [
    {
      "language": "Rust",
      "expertise": 98.5,
      "yoe": 2
    }
  ],
  "Ken": [
    {
      "language": "Go",
      "expertise": 96,
      "yoe": 3
    },
    {
      "language": "C",
      "expertise": 100,
      "yoe": 6
    }
  ],
  "John": [
    {
      "language": "Lisp",
      "expertise": 95.6,
      "yoe": 7
    }
  ],
  "Brendan": [
    {
      "language": "Javascript",
      "expertise": 99.4,
      "yoe": 14
    }
  ]
}

/** PART 10 ——————————————————————————————————————————-------—*/
/** ARR 2 OBJ ————————————————————————————————————————-------—*/
// Write a fn that abstracts the general case that converts expertsArr to expertsObj
const flintstones = [
  [ 'fred', { user: 'fred', age: 40 } ],
  [ 'pebbles', { user: 'pebbles', age: 1 } ]
]

const mapAgeToName = () => {}
const acceptanceCriteria = { fred: 40, pebbles: 1 };








































































//     TABLE USERS
// ID	FK	NAME					STREET			NUMBER
// 45	44	Peter Hansen	Big Avenue 	4545


// —————————————————————GET PETER sql ——————————————————————————— 
select * from USERS where NAME = 'Peter Hansen';

// —————————————————————GET PETER noSql —————————————————————————-
const peter = users.findOne({name: 'Peter Hansen'})

// —————————————————————Table Users is...... —————————————————————————-

