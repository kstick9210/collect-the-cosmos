const axios = require('axios');
const BASE_URL = 'https://images-api.nasa.gov/';

module.exports = {
    search
}

function search(req, res) {
    axios.get(`${BASE_URL}search?q=${req.body.query}&media_type=image`)
    .then(response => {res.json(response.data)})
}