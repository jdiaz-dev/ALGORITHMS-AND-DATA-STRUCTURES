
function printAllPrimeNumber(num){

  if(num <= 1 ) return false

  for(let x = 2; x < num; x++){
    if(num % x !== 0){
      console.log(x)

    }
  }
}
printAllPrimeNumber(50)