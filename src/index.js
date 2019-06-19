const foobar = require('./foobar')

console.log('Hello Codacy')

for (let i = 1; i < 100; i++) {
  process.stdout.write(foobar(i) + " ");
}

process.stdout.write(foobar(100) + "\n")