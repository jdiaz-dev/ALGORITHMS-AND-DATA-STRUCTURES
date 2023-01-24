


function contadorRojoVerdeAzul(array){  
    let RED = 0, GREEN = 1, BLUE = 2;   //debe quedar como variable local y no global

    let contador = new Array(3).fill(0)
    for(let x in array){
        let actual = array[x]

        if(actual == RED){
            contador[RED]++

        }else if(actual == GREEN){
            contador[GREEN]++

        }else if(actual == BLUE){
            contador[BLUE]++
        }
    }

    return contador
}
console.log(contadorRojoVerdeAzul([0,1,1,1,2,2,2]))