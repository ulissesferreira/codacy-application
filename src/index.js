const foobar = require('./foobar')

console.log('Hello Codacy')

for (let i = 1; i < 100; i++) {
  console.log(foobar(i) + " ");
}

console.log(foobar(100) + "")