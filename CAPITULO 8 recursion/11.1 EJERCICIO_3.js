
var dictionary = {
    'Key1': '1',
    'Key2': {
        'a' : '2',
        'b' : '3',
        'c' : {
            'd' : '3',
            'e' : '1'
        }
    }
}
dictionary
function flattenDictionary(dictionary) {
    var flattenedDictionary = {};

    function flattenDitionaryHelper(dictionary, propName) {

        //caso base
        if (typeof dictionary != 'object') {
            flattenedDictionary[propName] = dictionary;
            
            return;
        }
        for (var prop in dictionary) {
            if (propName == ''){

                //para el primer valor a enviar
                flattenDitionaryHelper(dictionary[prop], propName+prop);

            } else {
                //otros valores a enviar
                flattenDitionaryHelper(dictionary[prop], propName+'.'+prop);
            }
        }
    }

    flattenDitionaryHelper(dictionary, '');
    return flattenedDictionary;
}
/* 
    Complejidad de tiempo O(n)
    Compejidad de memoria O(n)
*/
console.log(flattenDictionary(dictionary));