const express = require("express");
const cors = require('cors')
const bodyParse = require('body-parser')
const app = express();

const { tokenCachedMiddleware, sixHourCandleCachedMiddleware, oneHourCandleCachedMiddleware } = require("./cache");
const { tokensController, sixHourCandleController, oneHourCandleController } = require("./controller");

const corsOptions = {
  origin: [
    'http://localhost:3000',
    'http://localhost:5000',
    'https://br-tool-api.onrender.com'
  ],
};

const json = bodyParse.json
const router = express.Router()
app.use(cors());
app.use(json());
app.use(router);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is listening on port: ${PORT}`)
})




// var server_host = process.env.YOUR_HOST || '0.0.0.0';

router.get('/', cors(corsOptions), tokenCachedMiddleware, tokensController)

router.get('/:token/6', cors(corsOptions), sixHourCandleCachedMiddleware, sixHourCandleController)

router.get('/:token/1', cors(corsOptions), oneHourCandleCachedMiddleware, oneHourCandleController)
