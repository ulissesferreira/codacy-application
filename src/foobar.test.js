const foobar = require('./foobar')

console.log("")
console.log(" Hello Codacy ")
console.log(" Testing Time ")
console.log("")

let test1 = true
let test2 = true
let test3 = true
let test4 = true

// Let's see if foobar detects multiples of 3
let multiplesOf3 = []

for (let i = 1; i <= 33; i++) {
  multiplesOf3.push(i * 3)
}

for (let i = 0; i <= 32; i++) {
  test1 &= (foobar(multiplesOf3[i]) === "Foo" || foobar(multiplesOf3[i]) === "FooBar")
}

test1 ? 
  console.log(" Multiples of 3: ✅  Passed ") : 
  console.log(" Multiples of 3: ❌  Failed ")

// Let's see if foobar detects multiples of 5
let multiplesOf5 = []

for (let i = 1; i <= 20; i++) {
  multiplesOf5.push(i * 5)
}

for (let i = 0; i <= 19; i++) {
  test2 &= (foobar(multiplesOf5[i]) === "Bar" || foobar(multiplesOf5[i]) === "FooBar")
}

test2 ? 
  console.log(" Multiples of 5: ✅  Passed ") : 
  console.log(" Multiples of 5: ❌  Failed ")

// Let's see if foobar detects multiples of 3 and 5
let multiplesOf3And5 = []

for (let i = 1; i <= 6; i++) {
  multiplesOf3And5.push(i * 15)
}

for (let i = 0; i <= 5; i++) {
  test3 &= (foobar(multiplesOf3And5[i]) === "FooBar")
}

test3 ? 
  console.log(" Multiples of 3 and 5: ✅  Passed ") : 
  console.log(" Multiples of 3 and 5: ❌  Failed ")

// Let's see if there are no false positives
// Remember we can't assume our function is right.
// We need to generate the results in a fireproof 
// way even if that looks silly.
let falsePositives = []

for (let i = 1; i <= 100; i++) {
  falsePositives.push(i)
}

falsePositives = falsePositives.filter((element) => {
  return !multiplesOf3.includes(element) &&
         !multiplesOf5.includes(element) &&
         !multiplesOf3And5.includes(element)
})

for (let i = 0; i <= falsePositives.length; i++) {
  test4 &= foobar(falsePositives[i]) === falsePositives[i]
}

test4 ?
  console.log(" False Positives: ✅  Passed ") :
  console.log(" False Positives: ❌  Failed ")


