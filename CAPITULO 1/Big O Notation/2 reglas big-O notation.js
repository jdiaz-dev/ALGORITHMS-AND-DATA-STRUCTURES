/* 
    ALGORITMO:conjunto definido de pasos para lograr producir un resultado 

    BIG-O NOTATION: es una notacion matematica cuando que describe el comportamiento limintado  de una funcion cuando el su argumento tiende al infinito

    ASINTOTICAMENTE: relacionado con asintota en matematica, o sea que tiene relacion con esa linea recta
*/


/* 
    1. REGLA DE COEFICINETE: Las constantes no estan relacionadas con el tamña de entrada
    2. REGLA DE SUMA : el resultado de un algoritmo maestro es la suma de los algoritmos que lo conforman
    3. REGLA PRODUCTO: dos bucles anidados representan la regla de producto
    4. REGLA POLINOMICA: la complejidad es del grado polinomial
    5. RECURSION Y COMPLEJIDAD ADITIVA: la complejidad aumentara cuando un algoritmo llame a otro recursivamente a otro para resolverse. Ejm: cuando un bucle llama a una funcion

    *   CONCLUSION: con estas reglas podemos simplificar la notacion big-O
*/

/* 1: REGLA DEL COEFICIENTE: "deshacerse de las constantes" */

function a(n){
    var count =0;
    for (var i=0;i<n;i++){  //su notaciones f(n) = n
        count+=1;
    }
    return count;
}

function a(n){
    var count =0;
    for (var i=0;i<5*n;i++){    //la multiplicacion por 5 no afecta al numero de entradas que se tiene
        count+=1;
    }
    return count;
}






/* 2: REGLA DE SUMA: "agregar big-Os" */
function a(n){
    var count =0;               //la complejidad es la suma de algoritmos for
    for (var i=0; i<n; i++){
        count+=1;
    }
    for (var i=0; i<5*n; i++){
        count+=1;
    }
    return count;
}




/* 4. REGLA POLINOMICA*/
function a(n){

    var count =0;

    for (var i=0; i<n*n*n; i++){    //en este caso la complejidad es n^3 (grado)
        count+=1;
    }
    return count;
}
