
//mi solucion a la ultima solucion del ejercicio 4
//ordenamiento de los objetos que contiene un array
//el ordenamiento es por el numero de claves que tengan los objetos

var mythicalWithObjets = [
    {prop1:'', prop2:'', prop3:'', prop4:''},
    {prop1:'', prop2:''},
    {prop1:'', prop2:'', prop3:''},
    {prop1:'', prop2:''}
]

function quickSortByObjectKeys(array){

    if(array.length < 1)    return []
    
    let pivot = array[0], lengthPivot, left = [], right = []
    

    for(let x = 1; x < array.length; x++){
        lengthPivot = Object.keys(pivot).length

        if( lengthPivot > Object.keys(array[x]).length){
            left.push(array[x])
        }else{
            right.push(array[x])
        }
    }

    return [].concat(quickSortByObjectKeys(left), pivot, quickSortByObjectKeys(right))
}
console.log(quickSortByObjectKeys(mythicalWithObjets))