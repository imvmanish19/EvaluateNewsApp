const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
var aylien = require("aylien_textapi");
const mockAPIResponse = require('./mockAPI.js')
let bodyParser = require('body-parser')
let cors = require('cors');

const app = express()
//Configuring Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Configuring Cors
app.use(cors())

// set aylien API credentias
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY_ALY
});


app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(4000, function () {
    console.log('Example app listening on port 4000!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/urlEvaluater',(req,res) => {
    console.log(req.body);
    const {text} = req.body;
    console.log('Post Request for /urlEvaluater End Point',text);
    textapi.sentiment({"url": text},(error, result, remaining) => {
        console.log("Aylien POST Request Received");
        res.send(result);
    });
});
