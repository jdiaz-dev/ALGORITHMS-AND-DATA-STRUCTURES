
function fixBadArray(str ){
    let splitedStr = str.split(''), goodArr = []

    for(let x = 0; x < splitedStr.length; x++){
        if(splitedStr[x] == splitedStr[x + 1]){
            splitedStr[x] = undefined
        }
    }

    for(let y = 0; y < splitedStr.length; y++){
        if(splitedStr[y] != undefined){
            goodArr.push(splitedStr[y])
        }
    }
    return goodArr
}

fixBadArray('abb')

/*  to test */
//ababab
//abb