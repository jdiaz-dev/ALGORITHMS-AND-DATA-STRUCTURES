/* 
    return the products with 3 most higher average prices

*/

function quickSortForPrices(prices){
    if(prices.length < 1) return []

    const priceIndex = 0, leftSide = [], rightSide = [], pivote = prices[0]
    for(let x = 1; x < prices.length; x++){
        if(prices[x][priceIndex] < pivote[priceIndex]){
            leftSide.push(prices[x])
        }else{
            rightSide.push(prices[x])

        }
    }
    return [...quickSortForPrices(rightSide), pivote, ...quickSortForPrices(leftSide)]
}

function getAverageOfProduct(stock, prices ){
    const averages = []
    for(let x = 0; x < prices[0].length; x++){
        let totalPriceByDay = 0 
        for(let y = 0; y < prices.length; y++){

            //to fix decimal problems, first multiple by 100 and finally split by 100
            totalPriceByDay = (totalPriceByDay * 100 + prices[y][x]* 100) /100 
        }

        totalPriceByDay = parseFloat(((totalPriceByDay)/ prices.length).toFixed(2))
        averages.push([totalPriceByDay , stock[x]])
    }
    return averages
}

function getTopStocks(stock, prices){
    const averageOfProduct = getAverageOfProduct(stock, prices)
    const higherPrices = quickSortForPrices(averageOfProduct)
    higherPrices
    const productIndex = 1
    return higherPrices.map((prod) => prod[productIndex]).slice(0,3)
}

const stock = ['AMZN', 'CACC', 'EQIX', 'GOOG', 'ORLY', 'ULTA' ]
const prices = [
    [12.81, 11.09, 12.11, 10.39, 9.83, 8.14],
    [10,34, 10.56, 10.14, 12.56, 9.77, 11, 66],
    [15,56, 14,34, 13.56, 18.34, 17.34, 16.88]
]
const res = getTopStocks(stock, prices)

res

