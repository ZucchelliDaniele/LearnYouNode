'use strict'

const http = require('http');
const map = require('through2-map');
const port = process.argv[2];

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    req.pipe(map((chunk) => chunk.toString().toUpperCase())).pipe(res);
  } else {
    res.writeHead(405, { 'Allow': 'POST' });
    res.end('Only POST requests are allowed.\n');
  }
});

// Start listening on the specified port
server.listen(port);
