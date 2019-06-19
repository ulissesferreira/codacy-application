/**
 * Foobar function. Returns "Foo" if the input number is a 
 * multiple of 3, returns "Bar" if the input number is a 
 * multiple of 5, returns "FooBar" if the input number is
 * a multiple of 3 and 5 simultaneously. If none of these
 * conditions apply, returns the input number unchanged.
 * 
 * @param number - any integer number
 */
module.exports = (number) => {
  
  // If the number is divisible by 3 and 5 then
  // that means it's a multiple of 3 and 5.
  if (number % 3 === 0 && number % 5 === 0) {
    return "FooBar"
  } else if (number % 3 === 0) { // This means the number is a multiple of 3
    return "Foo"
  } else if (number % 5 === 0) { // This means the number is a multiple of 5
    return "Bar"
  } 

  return number
}