function rollDie() {
  return Math.ceil(Math.random() * 6);
}

// write a while loop that rolls the die until a 6 is rolled!
// use console.log to print the roll in every iteration
let rollResult = 0;
while (rollResult != 6) {
  rollResult = rollDie();
  console.log(rollResult);
}
