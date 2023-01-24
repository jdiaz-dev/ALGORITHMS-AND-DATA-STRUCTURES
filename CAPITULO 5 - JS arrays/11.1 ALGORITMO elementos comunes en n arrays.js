

function commonElements(kArray) {
    var hashmap = {},
        last, answer = [];

    for (var i = 0, kArrayLength = kArray.length; i < kArrayLength; i++) {
        var currentArray = kArray[i];   //observar esto para complejidad del espacio O(n)

        last = null;
        for (var j = 0, currentArrayLen = currentArray.length; j < currentArrayLen; j++) {
            var currentElement = currentArray[j];
            if (last != currentElement) {
                if (!hashmap[currentElement]) {
                    hashmap[currentElement] = 1;
                    

                } else {
                    hashmap[currentElement]++;
                    console.log(hashmap[currentElement])
                }
            }
            last = currentElement;
        }
    }
    hashmap
    // Iterate through hashmap
    for (var prop in hashmap) {
        if (hashmap[prop] == kArray.length) {
            x = hashmap[prop]
            
            answer.push(parseInt(prop));
        }
    }
    return answer;
}
//complejidad de tiempo O(kn) k = # de sub arrays, n = el array mas grande
//complejidad de espacio O(n)
console.log(commonElements([
    [1, 2, 3],
    [1, 2, 3, 4],
    [1, 2]
])); // [ 1, 2 ]
