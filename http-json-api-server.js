'use strict'

const http = require('http');
const url = require('url');
const port = process.argv[2];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/api/parsetime') {

    if (parsedUrl.query.iso) {
      const date = new Date(parsedUrl.query.iso);
      const response = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
      };

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(response));

    } else {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Invalid or missing ISO parameter' }));
    }
  } else if (parsedUrl.pathname === '/api/unixtime') {

    if (parsedUrl.query.iso) {
      const date = new Date(parsedUrl.query.iso);
      const response = {
        unixtime: date.getTime(),
      };

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(response));

    } else {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Invalid or missing ISO parameter' }));
    }

  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(port);
