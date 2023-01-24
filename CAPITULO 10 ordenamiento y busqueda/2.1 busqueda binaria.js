
function binarySearch(array, n) {
    var lowIndex = 0,
        highIndex = array.length - 1;

    while (lowIndex <= highIndex) {
        //la mitad es el menor si el array es par    y   el medio si el array es impar

        var midIndex = Math.floor((highIndex + lowIndex) / 2);//4 5 6

        if (array[midIndex] == n) {
            return midIndex;
        } else if (n > array[midIndex]) {
            lowIndex = midIndex + 1;
        } else {
            highIndex = midIndex - 1;
        }
    }
    return -1;
}
console.log(binarySearch([1,2,3,4,5,6,7,8], 8));
console.log(binarySearch([1,2,3,4], 5));