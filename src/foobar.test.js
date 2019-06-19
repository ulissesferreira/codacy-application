/**
 * For us to test this function we must assume it's logic
 * is fallible. That means we can't just simply make a similar
 * function here and see if both results match. The only thing
 * we can take for granted is the generation of multiples (using n * k).
 * 
 * We will generate all the multiples of 3, 5 and 15 (both 3 and 5)
 * and since we also need to detect false positives (missplaced
 * Foo, Bar and FooBar labels) we can generate those by eliminating
 * the previous values from all the possible numbers.
 * 
 * Sounds like too much of a hassle (and it is in this situation)
 * but the principle behind it is important for more complex tests.
 */

const foobar = require('./foobar')

console.log("")
console.log(" Hello Codacy ")
console.log(" Testing Time ")
console.log("")

let test1 = true
let test2 = true
let test3 = true
let test4 = true

// Let's see if foobar detects multiples of 3 and 5
let multiplesOf3And5 = []

for (let i = 1; i <= 6; i++) {
  multiplesOf3And5.push(i * 15)
}

for (let i = 0; i <= 5; i++) {
  test3 &= (foobar(multiplesOf3And5[i]) === "FooBar")
}

// Let's see if foobar detects multiples of 3 
// that are not multiple of 3 and 5
let multiplesOf3 = []

for (let i = 1; i <= 33; i++) {
  multiplesOf3.push(i * 3)
}

multiplesOf3 = multiplesOf3.filter((element) => {
  return !multiplesOf3And5.includes(element)
})

for (let i = 0; i < multiplesOf3.length; i++) {
  test1 &= (foobar(multiplesOf3[i]) === "Foo")
}

// Let's see if foobar detects multiples of 5
// that are not multiple of 3 and 5
let multiplesOf5 = []

for (let i = 1; i <= 20; i++) {
  multiplesOf5.push(i * 5)
}

multiplesOf5 = multiplesOf5.filter((element) => {
  return !multiplesOf3And5.includes(element)
})

for (let i = 0; i < multiplesOf5.length; i++) {
  test2 &= (foobar(multiplesOf5[i]) === "Bar")
}

// Let's see if there are no false positives
// We can't have Foo, Bar or FooBar labels
// missplaced
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

// Output time

test1 ?
  console.log(" Multiples of 3: ✅  Passed ") :
  console.log(" Multiples of 3: ❌  Failed ")

test2 ?
  console.log(" Multiples of 5: ✅  Passed ") :
  console.log(" Multiples of 5: ❌  Failed ")

test3 ?
  console.log(" Multiples of 3 and 5: ✅  Passed ") :
  console.log(" Multiples of 3 and 5: ❌  Failed ")

test4 ?
  console.log(" Other Numbers: ✅  Passed ") :
  console.log(" Other Numbers: ❌  Failed ")


