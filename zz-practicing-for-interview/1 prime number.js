
function primeNumber(number){
  if(number <= 1) return false

  for(let x = 2; x < number; x++){

    if(number % x == 0){
      return false
    }
  }

  return true


  
}
const prime = primeNumber(-24)
prime
