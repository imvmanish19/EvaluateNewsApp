const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
var aylien = require("aylien_textapi");
const mockAPIResponse = require('./mockAPI.js')

// set aylien API credentias
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY_ALY
});

const app = express()

app.use(express.static('src'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('../client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
