
/* Los siguientes metodos no cambian el contenido original del array */

var num1 = [1,2,3,4,5,6,7]

/* map() - devuelve un array con las transformaciones aplicadas */
var mapeado =  num1.map( value =>  value*10);
mapeado// [10, 20, 30, 40, 50, 60, 70]



/* filter() - devuelve solamente aquellos elementos que cumplan con una condicion */
var filtrado = num1.filter( value => value > 3)
filtrado //[4,5,6,7]



/* reduce() - reduce el array a un solo valor 
            - sus parametros son:
                firstElement -> el primer elemento del array
                lastElement -> el ultimo elemento del array
                index -> la cantidad de elementos del array

                recibe un segundo parametro que inicializa el valor reducido
*/
var reducido = num1.reduce( (firstElement, lastElement, index) => {

    return firstElement + lastElement}, 10 ) //segundo parametro   

reducido