Okta-solar-system-min
tom.smith@okta.com

This minimal app is designed to work with Okta and an API Gateway (apigee, mulesoft, Amazon API gateway, etc.) to show how Okta's API Access Management capabilities work.

This app does two things:

1) generates an access token from Okta
2) sends the access token to an API gateway and gets a response

But, it cannot do either of those things on its own.

To test #1, you will need to set up your Okta tenant to generate access tokens. To do that, there is a short instructional video here.

To test #2, you will need to set up your API Gateway to accept access tokens from Okta. There are instructions on how to do that for the major gateways here: https://okta-api-am.herokuapp.com

If you just want to test generating a valid access token from Okta (#1), without doing the API Gateway piece, you can use this app for that.


Setup
After you have set up your Okta tenant as noted above, put your okta tenant and client_id in the file /public/index.html
Then you can just

node app.js

To test the API Gateway, update the value of proxy_url in the app.js file.
Then you can just

node app.js