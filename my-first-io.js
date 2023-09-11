'use strict'

const fs = require('fs')


let buf = fs.readFileSync(process.argv[2])
const str = buf.toString()

let splitted_string = str.split('\n')

console.log(splitted_string.length-1)