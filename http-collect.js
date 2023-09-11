'use strict'

const http = require('http');
const bl = require('bl');

const url = process.argv[2];

http.get(url, (response) => {
  response.pipe(bl((err, data) => {
    if (err) {
      console.error('Error:', err.message);
      return;
    }

    const responseData = data.toString();
    console.log(responseData.length);
    console.log(responseData);
  }));
});
