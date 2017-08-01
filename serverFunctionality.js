//Importing the pre defined node package for http//
var http = require("http");

//Establishing variables to store both ports needed to handle requests and responses//
var PORTONE = 7000;
var PORTTWO = 7500;

var positive = ["You're a great person!", "Everyone likes you!", "Great things are coming your way!", "You're awesome!", "You make the world a better place to be!"];
var negative = ["You're a terrible person!", "Everyone hates you!", "Bad things are headed your way!", "You're the opposite of awesome!", "You make the world a negative place to be!"];

var randomP = positive[Math.floor(Math.random() * positive.length)];
console.log("Positive: " + randomP);
var randomN = negative[Math.floor(Math.random() * negative.length)];
console.log("Negative: " + randomN);

// Here we create a generic function to handle requests and responses
function handleRequestOne(request, response) {

  // The below statement is triggered (client-side) when the user visits the PORT URL
  response.end(randomP + request.url);
}

function handleRequestTwo(request, response) {

  // The below statement is triggered (client-side) when the user visits the PORT URL
  response.end(randomN + request.url);
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
