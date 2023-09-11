'use strict'

const http = require('http');
const urls = process.argv.slice(2);
const collectedData = [];
let completedRequests = 0;

function fetchData(url, index) {
  http.get(url, (response) => {
    let data = '';
    response.setEncoding('utf8');
    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      collectedData[index] = data;
      completedRequests++;
      if (completedRequests === urls.length) {
        collectedData.forEach((item) => console.log(item));
      }
    });

    response.on('error', (error) => {
      console.error('Error:', error.message);
    });
  });
}

urls.forEach((url, index) => {
  fetchData(url, index);
});
