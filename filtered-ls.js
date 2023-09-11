'use strict'

const fs = require('fs');
const path = require('path');

const directoryPath = process.argv[2]; 
const ext = "."+ process.argv[3]; 

fs.readdir(directoryPath, (err, list) => {
  if (err) {
    console.error('Errore nella lettura della directory:', err);
    return;
  }

  list.forEach(function (file) {
    if (path.extname(file) === ext) {
      console.log(file)
    }
  })
  
});