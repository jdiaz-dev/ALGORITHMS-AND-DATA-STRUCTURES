
//permutaciones en javascript   https://stackoverflow.com/questions/37579994 generate-permutations-of-javascript-array

function swap(strArr, index1, index2) {//0 1
    var temp = strArr[index1];

    strArr[index1] = strArr[index2];
    strArr[index2] = temp;
}
var contador = 0
function permute(strArr, begin, end) {
    
    if (begin == end) {
        console.log(strArr);
    } else {
        for (var i = begin; i < end + 1; i++) {
            swap(strArr, begin, i); //begin es un puntero que señala el elemento con que se trabajara
                                    // "i" señala con quien va a intercambiar

            permute(strArr, begin + 1, end); //begin sube + 1 para cambiar de elemento
            swap(strArr, begin, i);//corrige los intercambios realizados
        }
    }
}

function permuteArray(strArr) {
    permute(strArr, 0, strArr.length - 1);
}
/* 
    Complejidad de tiempo O(n!)
    Complejidad de estapcio O(n!)
*/
permuteArray(["A", "C", "D"]);



