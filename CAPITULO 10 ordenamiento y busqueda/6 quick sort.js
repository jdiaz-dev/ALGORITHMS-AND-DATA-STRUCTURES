
//ordenamiento rapido libro

function quickSort(items) {
    return quickSortHelper(items, 0, items.length - 1);
}

let counter = 0
function quickSortHelper(items, left, right) {
    counter++
    console.log(counter)
    var index;
    if (items.length > 1) {
        index = partition(items, left, right);

        if (left < index - 1) {
            quickSortHelper(items, left, index - 1);
        }

        if (index < right) {
            quickSortHelper(items, index, right);
        }
    }
    return items;
}

function partition(array, left, right) {
    var pivot = array[Math.floor((right + left) / 2)];
    while (left <= right) {
        while (pivot > array[left]) {
            left++;
        }
        while (pivot < array[right]) {
            right--;
        }
        if (left <= right) {
            var temp = array[left];
            array[left] = array[right];
            array[right] = temp;
            left++;
            right--;
        }
    }
    return left;
}
/* 
    Complejidad de tiempo O(nlogn)  -> en el mejor de los casos
    Complejidad de tiempo O(n^2)    -> en el peor de los casos
    Complejidad de espacio O(nlogn)
*/
// console.log(quickSort([6, 1, 23, 4, 2, 3])) // [1, 2, 3, 4, 6, 23]
console.log(quickSort([1, 2, 3,4, 6,23])) // [1, 2, 3, 4, 6, 23]