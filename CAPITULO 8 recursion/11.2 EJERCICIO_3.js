/* 
Este algoritmo presenta oel objeto dictionary de esta foma:
    { Key1: '1', 
    'Key2.a': '2', 
    'Key2.b': '3', 
    'Key2.c.d': '3', 
    'Key2.c.e': '1' }  
*/

var dictionary = {
    'Key1': '1',
    'Key2': {
        'a' : '2',
        'b' : '3',
        'c' : {
            'd' : '3',
            'e' : '1'
        }
    }
}
dictionary
function alisarObjeto(objeto){
    let allanado = {}
    let contador = 0
    let clave 
    let newClave

    function alisado(obj){
        contador++
        

        for(let x in obj){
            
            //caso base
            if(typeof obj[x] != 'object'){
                if(contador >= 2  ){
                    newClave = `${clave}.${x}`
                    allanado[newClave] = obj[x] 
                }else{
                    allanado[x] = obj[x] 
                }

                
            }else{
                //configuramos la clave al configurar al entrar al sub-objeto
                if(contador == 1){
                    clave = `${x}`
                }else{
                    clave = `${clave}.${x}`
                }
                
                alisado(obj[x])
                
            }
        }
    }
    alisado(objeto)

    return allanado
}
/* 
    Complejidad de tiempo O(n)
    Compejidad de memoria O(n)
*/
console.log(alisarObjeto(dictionary))