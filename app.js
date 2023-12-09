const dotenv = require('dotenv')
dotenv.config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const axios = require('axios');


const app = express();

app.use(cors())
app.use(bodyParser.json())






app.get('/', async (req, res) => {
    res.json({
        message: "It is working"
    })
})

app.get('/quote', async (req, res) => {

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://api.quotable.io/random',
        headers: {}
    };

    let response = await axios.request(config)

    res.json(response.data)
})


const PORT = 9000;


app.listen(PORT, () => {
    console.log(`Server has started on ${PORT}`)
})