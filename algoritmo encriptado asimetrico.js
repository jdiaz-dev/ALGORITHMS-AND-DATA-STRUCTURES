


function moduloInverso(e, phi){
    let m0 = phi, t, q
    let x0 = 0, x1 = 1

    if(phi == 1) return 0

    while(e > 1){
        q = Math.floor(e / phi)
        t = phi

        //"phi" sera el residuo
        phi = e % phi, e = t 
        
        //cambiamos el valor de "t"
        t = x0


        x0 = x1 - q*x0

        //esperamos el valor de "t"
        x1 = t
    }

    if(x1 < 0) x1 +=m0
        
    return x1
    
}

console.log(moduloInverso(7,40))


//verificar si es numero primo
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


//generamos claves: clave publica y clave privada
function RSAparDeClaves(p,q){

    if( ! (esPrimo(p) && esPrimo(q))) return

    if(p == q) return

    let n = p*q,
        phi = (p -1) * (q - 1),
        e = 3,
        d = moduloInverso(e, phi)

    //clave publica, clave privada
    return [ [e,n], [d,n] ]

}
console.log(RSAparDeClaves(5,11))






