const { queryTokens } = require("../methods/CRUD")
const { getCandlestickData } = require("../methods/index")


const oneHourCandleService = async (name) => {
    try {
        const tokens = await queryTokens()
        console.log(name)
        const tokenIndex = tokens.findIndex((entry) => entry.token === name)
        console.log(tokenIndex)
        const dataOfInterest = tokens[tokenIndex].price
        console.log(dataOfInterest)
        const data = getCandlestickData(dataOfInterest, 1)
        return data
    } catch (error) {
        console.log(error.message)
    }
}

const sixHourCandleService = async (name) => {
    try {
        const tokens = await queryTokens()
        console.log(name)
        const tokenIndex = tokens.findIndex((entry) => entry.token === name)
        console.log(tokenIndex)
        const dataOfInterest = tokens[tokenIndex].price
        console.log(dataOfInterest)
        const data = getCandlestickData(dataOfInterest, 6)
        return data
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = { oneHourCandleService, sixHourCandleService }