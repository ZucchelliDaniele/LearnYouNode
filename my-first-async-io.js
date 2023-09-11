'use strict'

const fs = require('fs');

const filePath = process.argv[2];

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Errore lettura del file:', err);
    return;
  }

  console.log(data.split('\n').length - 1);
});