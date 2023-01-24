const fizzBuzz = (number) => {
  for (let x = 0; x < number; x++) {
    if (x % 15 === 0) {
      console.log("FizzBuzz");
    } else if (x % 3 === 0) {
      console.log("Fizz");
    } else if (x % 5 === 0) {
      console.log("Buzz");
    }
  }
};

fizzBuzz(100)