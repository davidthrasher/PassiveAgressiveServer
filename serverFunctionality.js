//Importing the pre defined node package for http//
var http = require("http");

//Establishing variables to store both ports needed to handle requests and responses//
var PORTONE = 7000;
var PORTTWO = 7500;



// Here we create a generic function to handle requests and responses
function handleRequestOne(request, response) {

  // The below statement is triggered (client-side) when the user visits the PORT URL
  response.end("It Works!! Path Hit: " + request.url);
}

function handleRequestTwo(request, response) {

  // The below statement is triggered (client-side) when the user visits the PORT URL
  response.end("It Works!! Path Hit: " + request.url);
}

// Here we use the Node HTTP package to create our server.
// We then pass it the handleRequest functions to empower it with functionality.
var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

// Here we start our servers so that it can begin listening to client requests.
serverOne.listen(PORTONE, function() {
  console.log("Server listening on: http://localhost:%s", PORTONE);
});

serverTwo.listen(PORTTWO, function() {
  console.log("Server listening on: http://localhost:%s", PORTTWO);
});
