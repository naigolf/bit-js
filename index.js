'use strict'

const express = require('express');
const bodyParser = require('body-parser');
var request = require('request');
const app = express();
const https = require('https');


app.set('port', (process.env.PORT || 5000)) 
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.listen(app.get('port'), function() {
    console.log('running on port', app.get('port'))
})

var my_api_key = process.env.my_api_key;
var my_api_secret = process.env.my_api_secret;

/////////////////////////////////////////////////////////////////////

app.get('/', function (req, res) {
        res.end('AI')
    })

//////////////////////////////////////////////////////////////////

app.get('/time', function (req, res) {
    
    var Bitkub = require('bitkub')
var client = new Bitkub({
  api_key: my_api_key,
  api_secret: my_api_secret,
})
    
    client.server_time().then(server_time => {
  console.log("server_time_log"+server_time)
 
  res.end("server_time_res"+server_time)
        
        })
        
})




//////////////////////////////////////////////////////////////////

app.get('/buy', function (req, res) {
    
var Bitkub = require('bitkub')
var client = new Bitkub({
  api_key: my_api_key,
  api_secret: my_api_secret,
})



var data = {
    	sym: "THB_BTC",
	amt: 10, 
	rat: 260000,
	typ: "limit"
  }
    
    client.place_bid().then(data => {
        })
        
})

