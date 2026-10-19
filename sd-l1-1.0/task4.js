// Refer to Task 4 in your Instructions to complete this task

console.log("This is Task Four!");

for (let i = 1; i < 106; i++) {
  if (i % 3 === 0 && i % 5 ===0 && i % 7 ===0) {
    console.log(i, "FizzBuzzWoof");}

  else if (i % 3 === 0 && i % 5 ===0) {
    console.log(i, "FizzBuzz");}

  else if (i % 3 === 0 && i % 7 ===0) {
    console.log(i, "FizzWoof");}

  else if (i % 5 === 0 && i % 7 ===0) {
    console.log(i, "BuzzWoof");}

  else if (i % 7 === 0) {
    console.log(i, "Woof");}

  else if (i % 3 === 0) {
    console.log(i, "Fizz");}

  else if (i % 5 === 0) {
    console.log(i, "Buzz");}

  else {
    console.log(i);}    
  };
  