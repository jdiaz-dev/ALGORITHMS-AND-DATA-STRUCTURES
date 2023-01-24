
var x = Math.max(20,100,200,300,200+200)
x
//tamaño del array representado como pos
function medianOfArray(array) {
    var length = array.length;
    // Odd
    if (length % 2 == 1) {
        return array[Math.floor(length / 2)];
    } else {
        // Even
        return (array[length / 2] + array[length / 2 - 1]) / 2;
    }
}
// arr2 is the bigger array
function medianOfTwoSortedArray(arr1, arr2, pos) {
    if (pos <= 0) {
        return -1;
    }
    if (pos == 1) {
        return (arr1[0] + arr2[0]) / 2;
    }
    if (pos == 2) {
        return (Math.max(arr1[0], arr2[0]) + Math.min(arr1[1], arr2[1])) / 2;
    }

    var median1 = medianOfArray(arr1),
        median2 = medianOfArray(arr2);

    if (median1 == median2) {
        return median1;
    }

    var evenOffset = pos % 2 == 0 ? 1 : 0,
        offsetMinus = Math.floor(pos / 2) - evenOffset,
        offsetPlus = pos - Math.floor(pos / 2) + evenOffset;
        offsetMinus
        offsetPlus


    if (median1 < median2) {
        return medianOfTwoSortedArray(arr1.slice(offsetMinus), arr2.slice(0, -offsetMinus), offsetPlus);
    } else {
        return medianOfTwoSortedArray(arr2.slice(offsetMinus), arr1.slice(0, -offsetMinus), offsetPlus);
    }
}

console.log(medianOfTwoSortedArray([1, 2, 3], [4, 5, 6], 3));
console.log(medianOfTwoSortedArray([1, 2, 3, 4], [5, 6, 7, 8], 4)); // 3.5
console.log(medianOfTwoSortedArray([11, 23, 24], [32, 33, 450], 3)); // 28



 
