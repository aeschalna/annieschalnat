const a = "50";
const b = 50;
const c = 100;
const d = c % b;
const e = c / 2;

// evaluates to true
const expression1 = (b === e);

// evaluates to false
const expression2 = (e < d);

// Use comparison operators so all expressions below log to the console as true
console.log(a == b);

// b and e = 50, use strict equality (===)
console.log(b === e);

// true: 100 is greather than 50
console.log(c < b);

// d is less than 1 returns true
console.log(d > 1);

// Use logical operators so all expressions below log to the console as true
console.log(expression1 || expression2);

console.log(expression1 && !expression2);

console.log(expression1 || expression2);

