// Create web server
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const { getComments, addComment } = require('./comments');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname } = parsedUrl;
  if (req.method === 'GET' && pathname === '/comments') {
    const comments = getComments();
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(comments));
  } else if (req.method === 'POST' && pathname === '/comments') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const { comment } = JSON.parse(body);
      addComment(comment);
      res.end();
    });
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server is listening on http://localhost:3000');
});
// Path: comments.js
// Create web server
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const { getComments, addComment } = require('./comments');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname } = parsedUrl;
  if (req.method === 'GET' && pathname === '/comments') {
    const comments = getComments();
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(comments));
  } else if (req.method === 'POST' && pathname === '/comments') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const { comment } = JSON.parse(body);
      addComment(comment);
      res.end();
    });
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server is listening on http://localhost:3000');
});
// Path: comments.js
// Create web server
const http = require('http');
const fs = require('fs');
const