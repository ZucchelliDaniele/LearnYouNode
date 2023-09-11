'use strict'

const mymodule = require('./mymodule');

const directory = process.argv[2];
const ext = process.argv[3];

mymodule(directory, ext, (err, filteredFiles) => {
  if (err) {
    console.error('Errore:', err.message);
    return;
  }

  filteredFiles.forEach(file => {
    console.log(file);
  });
});
