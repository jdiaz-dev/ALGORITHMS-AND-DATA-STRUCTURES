
let counter = 0
function findOnlyOnce(arr, low, high) {
    counter++
    if(arr.length % 2 == 0) return - 1

    if (low > high) {
        return null;
    }

    if (low == high) {
        return arr[low];
    }

    var mid = Math.floor((high+low)/2);
    console.log(mid)
    if(mid%2 == 0){   //para array impar
        console.log(arr[mid + 1])
        if(arr[mid] == arr[mid + 1]) {
            //right
            return findOnlyOnce(arr, mid+2, high);
        }else{
            //left
            return findOnlyOnce(arr, low, mid);
        }
    }else{  //para array par
        
        if (arr[mid] == arr[mid-1]) {
            //right
            return findOnlyOnce(arr, mid+1, high);
        } else {
            //left
            return findOnlyOnce(arr, low, mid -1 );
        }
    }
}

function findOnlyOnceHelper(arr) {
    return findOnlyOnce(arr, 0, arr.length - 1);
}
console.log(findOnlyOnceHelper([  2, 2, 4, 4, 6, 6, 8, 8, 9 ]));