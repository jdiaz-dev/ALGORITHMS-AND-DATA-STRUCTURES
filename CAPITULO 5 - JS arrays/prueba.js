

var matrix = [[1,0,1],
              [0,0,1],
              [1,1,1]];

const rotateToLeft90Grades = (arrayJagged) => {
    let newJaggedArray = [[], [],[]]
    for(let x = 0; x < arrayJagged.length; x++ ){
        for(let y = 0, position = arrayJagged[x].length - 1 ; y < arrayJagged[x].length ; y++, position--){
            newJaggedArray[position][x] = arrayJagged[x][y] 
        }
    }

    return newJaggedArray
}

console.log(rotateToLeft90Grades(matrix))