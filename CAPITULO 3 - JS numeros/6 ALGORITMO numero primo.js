

//=============================MI ALGORITMO
const esPrimo = (num) => {
    if(num == 1){
        return false
    }
    
    const posiblesDivisores = []

    for(let i=2; i < num; i++ ){
        posiblesDivisores.push(i)
    }
    console.log(posiblesDivisores)

    for(let j in posiblesDivisores){
        if(num % posiblesDivisores[j] == 0){
            return false
        }
    }
    
    return true
}
//complejidad O(2n) = O(n)
console.log(esPrimo(1))




//==============================LIBRO
const esPrimoLibro = function(num){

    if(num <= 1) return false

    for(let i=2; i < num; i++){
        if(num % i == 0) return false
    }

    return true
}
//complejidad = O(n)
console.log(esPrimoLibro(997))




//con conplejidad de la raiz cuadrada del numero
function isPrime(n){
    if (n <= 1) return false;
    if (n <= 3) return true;

    if (n%2 == 0 || n%3 == 0) return false;

    for (var i=5; i*i<=n; i=i+6){
        console.log(n%i , n%(i+2) )
        if (n%i == 0 || n%(i+2) == 0) return false;
    }

    return true;
 }
console.log(isPrime(49))
