// Create a WebServer
// Use express
// Use body-parser

// Require express
var express = require('express');
// Require body-parser
var bodyParser = require('body-parser');

// Create an instance of express
var app = express();

// Use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Create a comments array
var comments = [
  'First comment',
  'Second comment',
  'Third comment'
];

// Create a get route
app.get('/comments', function(req, res) {
  res.send(comments);
});

// Create a post route
app.post('/comments', function(req, res) {
  var comment = req.body.comment;
  comments.push(comment);
  res.send(comments);
});

// Create a put route
app.put('/comments/:index', function(req, res) {
  var index = req.params.index;
  var comment = req.body.comment;
  comments[index] = comment;
  res.send(comments);
});

// Create a delete route
app.delete('/comments/:index', function(req, res) {
  var index = req.params.index;
  comments.splice(index, 1);
  res.send(comments);
});

// Listen on port 3000
app.listen(3000, function() {
  console.log('Server is running on port 3000');
});