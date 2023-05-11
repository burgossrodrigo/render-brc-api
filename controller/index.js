const { tokensCache, oneHourCache, sixHoursCache } = require('../cache')
const {queryTokens} = require('../methods/CRUD')
const { oneHourCandleService, sixHourCandleService } = require('../service');

const tokensController = async (req, res) => {
    try {
        const data = await queryTokens();
        tokensCache.set("tokens", data);
        res.send(data);
        res.status(200);
    } catch (err) {
        res.status(500);
        console.log(err);
        throw err;
    }
}

const oneHourCandleController = async (req, res) => {
    try {
        const name = req.params.token
        console.log(name)
        const data = await oneHourCandleService(name)
        oneHourCache.set("oneHourCandle", data);
        res.send(data);
        res.status(200);
    } catch (err) {
        res.status(500);
        console.log(err);
        throw err;
    }
}

const sixHourCandleController = async (req, res) => {
    try {
        const name = req.params.token
        console.log(name)
        const data = await sixHourCandleService(name)
        sixHoursCache.set("sixHourCandle", data);
        res.send(data);
        res.status(200);
    } catch (err) {
        res.status(500);
        console.log(err);
        throw err;
    }
}

module.exports = { tokensController, oneHourCandleController, sixHourCandleController }