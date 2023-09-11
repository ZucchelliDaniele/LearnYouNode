'use strict'

let len = process.argv.length
let sum = 0

for(let i=2; i<len; i++) {
    sum=parseInt(sum)+parseInt(process.argv[i])
}

console.log(sum)