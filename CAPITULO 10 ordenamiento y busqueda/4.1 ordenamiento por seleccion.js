
//algoritmo libro

function swap(array, index1, index2) {
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

function selectionSort(items) {
    var len = items.length,
        min;

    for (var i = 0; i < len; i++) {

        // set minimum to this position
        min = i;

            //check the rest of the array to see if anything is smaller
            for (j = i + 1; j < len; j++) {
                if (items[j] < items[min]) {    //si el 2do es menor
                    min = j;
                }

                
            }

        //if the minimum isn't in the position, swap it
        if (i != min) {
            swap(items, i, min);
            items
        }
    }

    return items;
}
console.log(selectionSort([6, 1, 23, 4, 2, 3])) // [1, 2, 3, 4, 6, 23]