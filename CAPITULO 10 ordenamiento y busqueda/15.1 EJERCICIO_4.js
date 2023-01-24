
// primera solucion del libro al EJERCICIO_4

var mythical = ['dragon', 'slayer','magic','wizard of oz', 'ned stark'];

function sortComparator_1ra(a, b){
    return a.length - b.length
}
console.log(mythical.sort(sortComparator_1ra))


// segunda solucion del libro al EJERCICIO_4
function sortComparator_2da(a, b){
    return a.indexOf('adfs') - b.indexOf()  //no es necesario pasarle parametro a indexOf() para que lo ordene
}
console.log(mythical.sort(sortComparator_2da))



// tercera solucion del libro al EJERCICIO_4
var mythicalWithObjets = [{prop1:'', prop2:''},{prop1:'', prop2:'', prop3:''},{prop1:'', prop2:''}]

function sortComparator_3ra(a, b){
    return Object.keys(a).length - Object.keys(b).length
}
console.log(mythicalWithObjets.sort(sortComparator_3ra))

