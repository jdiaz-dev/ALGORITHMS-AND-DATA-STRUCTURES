
/* 
--Diferente a C++ y Java, Javascript no tiene arrays multidimensionales 
--En lugar de ello tiene array dentado: array dentro de un array*/

function Matrix(rows, columns)  {
    var jaggedarray = new Array(rows);
    jaggedarray
    for (var i=0; i < columns; i +=1) {
        jaggedarray[i]=new Array(rows);
    }
    return jaggedarray;
}
console.log(Matrix(3,3)); //[[ , , ], [ , , ], [ , , ] ]
