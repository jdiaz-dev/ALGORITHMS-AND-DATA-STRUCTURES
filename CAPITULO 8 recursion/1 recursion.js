/* 
    **RECURSION
    --La recursion la ocurrencia de una cosa en terminos de este mismo
    --Una funcion recursiva es una fucnion que se llama a si mismo
    --La recursion es utilizada en muchas estructuras de datos

    **REGLAS DE RECURSION
    --Una funcion recursiva mal usada puede causar problemas, donde el programa puede atascarse como un bucle
        ■■Desbordamiento de pila: Un desbordamiento de pila es cuando el maximo numeor de llamadas al stack del programa exede la cantidad limitada de memoria       
    --Existen reglas para evitar el desbordamiento de pila 

    **CASO BASE
    --Debe haber la presencia de un caso base

    **DIVIDE Y VENCERAS (Khan Academy)
         
        https://es.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms


        Divide el problema en pequeños subproblemas que son similares al problema original, resuelve los subproblemas de forma recursiva y combina las soluciones de los subproblemas para resolver el problema original.
*/
/* 
fuente : https://leetcode.com/explore/learn/card/recursion-i/255/recursion-memoization/1495/
    **COMPLEJIDAD DE ESPACIO

    --El sistema asigna memoria a la pila para sostener 3 importantes piezas de información
        1. la dirección de retorno a la función llamada
        2. los parametros pasados en la función llamada
        3. las variables locales dentro de la función llamada
    --Este es el espacio mínimo requerido durante una función llamada, pero después que la función termino, el espacio es liberado

    --el espacio usado para cada llamada es acumulado

    --es debido al consumo de espacio relacionado con la recursión que podriamos entrar en una situación llamdo "desbordamiento de pila", donde el stack asignado para el programa alcanza el límite y el programa cae, por ello en el diseño de algoritmos recursivos debemos tener cuidado con el desbordamiento de pila cuando la entrada de datos aumenta

    ■ Conclusion : el consumo de memoria será la cantidad de veces que se llame a la función recursiva

*/

/* 
fuente: https://leetcode.com/explore/learn/card/recursion-i/255/recursion-memoization/1495/

    **MEMORIZACION

    --la recursión puede traer algunas penalidades en el rendidimieto, como hacer duplicación de cálculos

    --la memorización es usado principalmente para acelerar programas computacionales mediante el almacenamiento de resultados de llamadas a funciones caras    
*/
//CASO BASE
function contadorDeNumerosHastaCero(num){
    

    if(num < 0){
        return

    }else{

        console.log(num)
        contadorDeNumerosHastaCero(num - 1) 

    }

}
console.log(contadorDeNumerosHastaCero(7))
