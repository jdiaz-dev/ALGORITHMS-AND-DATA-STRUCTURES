/* 
    count the word frequency in the array and return an array of numbers, the numbers must be ordered alphabetically according to the words
*/


const amountIndex = 1

const wordIndex = 0
const sortByAlphabet = (first, second) => {
    if(first[wordIndex] > second[wordIndex]){
        return 1 
    }else{
        return -1
    }
}

const countFrequency = (arrWords) => {
    const objCounter = {}

    for(let x = 0; x < arrWords.length; x++){
        if(objCounter[arrWords[x]] === undefined){
            objCounter[arrWords[x]] = 1
        }else{
            objCounter[arrWords[x]] += 1
        }
    }
    const wordsCounted = []
    for(let key in objCounter){
        wordsCounted.push([key, objCounter[key]])
    }
    return wordsCounted.sort(sortByAlphabet).map((item) => item[amountIndex])
}

const words = ['the', 'the', 'dog', 'got', 'the', 'bone', 'bone']

const res = countFrequency(words)
res
