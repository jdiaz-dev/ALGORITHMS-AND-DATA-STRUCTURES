
var numeros = [1,2,3,4,5]

function encontrarLaSuma(numeros,num){

    let index1 = 0
    while (index1 < numeros.length) {
        
        let index2 = 0
        while(index2 < numeros.length){
            if(numeros[index1] + numeros[index2] == num){
                return [numeros[index1], numeros[index2]]
            } 

            index2++
        }

        index1++
    }

    return -1
}
//complejidad de tiempo 0(n^2)
//complejidad de memoria O(1)
console.log(encontrarLaSuma(numeros,9))




var numeros = [1,2,3,4,5]

function findSumBetter(arr, weight) {
    var hashtable = {};

    for (var i=0, arrLength=arr.length; i<arrLength; i++) {
        var currentElement = arr[i],
        difference = weight - currentElement;

        console.log(hashtable[currentElement] )
        console.log(hashtable)
        // check the right one already exists
        if (hashtable[currentElement] != undefined) {
            
            return [i, hashtable[currentElement]];
        } else {
            // store index
            hashtable[difference] = i;
        }
    }
    
    return -1;
}
//complejidad de tiempo O(n)
//complejidad de memoria O(n)
console.log(findSumBetter(numeros,9))



var objeto = {nombre:'korah', edad: 26, apellido:'Díaz'}
console.log(objeto['apellido'])

for(let x in objeto){
    console.log(objeto['apellido'])
}
objeto