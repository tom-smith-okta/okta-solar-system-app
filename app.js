// Okta Solar System basic sample

const express = require('express')

var bodyParser = require('body-parser')
var request = require('request')

const app = express()

var jsonParser = bodyParser.json()

// set this for your gateway proxy base url
var proxy_url = "https://tomsmith-eval-prod.apigee.net/solar-system/"

var endpoint = "planets"

var url = proxy_url + endpoint

app.use(express.static('public'))

app.post('/getData', jsonParser, function(req, res) {

	var access_token = req.body.access_token

	// send the access token to the requested API endpoint

	var options = { method: 'GET',
		url: url,
		headers:
		{
			'cache-control': 'no-cache',
			authorization: "Bearer " + access_token,
			accept: 'application/json',
			'content-type': 'application/x-www-form-urlencoded'
		}
	}

	request(options, function (error, response, body) {
		if (error) throw new Error(error);

		console.log("******\nresponse from API gateway: ");

		console.log(body);

		res.json(body);
	})
})

app.listen(8080, () => console.log('App listening on port 8080!'))