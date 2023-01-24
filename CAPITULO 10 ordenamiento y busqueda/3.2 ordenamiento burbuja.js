
//mi ordenamiento burbuja

function algoritmoBurbuja(array){
    let temp

    for(let x = 0; x < array.length; x++) {

        //establecemos "y" en el segundo
        for(let y = x + 1; y < array.length ; y++){

            //asumimos que el primero siempre sera mayor en el peor de los casos
            if(array[x] > array[y] ){
                temp = array[x]
                array[x] =  array[y]
                array[y] = temp 
            }
        }
    }
    return array
}
/* 
    Complejidad de tiempo O(n^2)
    Complejidad de memoria O(1)
*/
console.log(algoritmoBurbuja([6,1,2,3,4,5]))