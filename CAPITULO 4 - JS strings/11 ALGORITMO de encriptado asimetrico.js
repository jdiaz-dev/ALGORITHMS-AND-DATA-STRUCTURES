
function modInverse(e, phi) {
 var m0 = phi, t, q;
 var x0 = 0, x1 = 1;

 if (phi == 1)
 return 0;

 while (e > 1) {
 // q is quotient
 q = Math.floor(e / phi);

 //"t" guarda el valor de el ultimo valor de "phi"
 t = phi;
 /* phi is remainder now, process same as Euclid's algo */

 //phi es el residuo
 //"e" toma el valor de phi
 phi = e % phi, e = t;
 
 t = x0;

 x0 = x1 - q * x0;

 x1 = t;

 }

 // Make x1 positive
 if (x1 < 0)
 
 x1 += m0;
 
 return x1;
}

console.log(modInverse(7,40)); // 23

//verificar si es numero primo
const isPrime = (num) => {
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


 /* generamos el par de claves: la clave publica y la clave privada */
 function RSAKeyPair(p, q) {
 // Need to check that they are primes
 if ( ! (isPrime(p) && isPrime(q)) )
 return;

 // Need to check that they're not the same
 if (p==q)
 return;

 var n = p * q,
 phi = (p-1)*(q-1),
 e = 3,
 d = modInverse(e,phi);
   
 // Public key: [e,n], Private key: [d,n]
 return [[e,n], [d,n]]
}

console.log(RSAKeyPair(5,11))



/* EJEMPLO COMPLETO DE ENCRIPTADO Y DESENCIRPTADO: 
https://www.codeproject.com/Articles/4959/Encryption-RSA-implemented-through-Java-Script-to */
//encriptado de mensaje :  50
function power(a, b)
{
   var temp=1, i;
   for(i=1;i<=b;i++)
      temp*=a;
    
    temp
    return temp;
}
function encrypt(N, e, M)
{
   var r, i=0, prod=1, rem_mod;
   while (e>0)
   {
      
      r=e % 2;
      r
      if (i++==0){  //primero fue verdadero
          i
        rem_mod=M % N;
        rem_mod
      }else{
        rem_mod=power(rem_mod,2) % N;
         rem_mod
      }
         

         
      if(r==1){
         prod*=rem_mod;
         prod
         prod=prod % N;
         prod
      }

      e=parseInt(e/2);
      e
   }
   return prod;
}
console.log(encrypt(55, 3, 50))




//desencriptando mensaje
function decrypt(c, d, N)
{
   var r,i=0,prod=1,rem_mod=0;
   while (d>0)
    {
      r=d % 2;
      if (i++==0){
        rem_mod=c % N;
      } else{
        rem_mod=power(rem_mod,2) % N; 
      }
         

      if (r==1){
        prod*=rem_mod;
        prod=prod % N;
      }

      d=parseInt(d/2);
    }
    
   return prod;
}
console.log(decrypt(40, 27, 55))