const one = 64;
const two = "656302";
const three = false;
const four = null;
let five = 64.55;
let six = "Howdy!";
let seven;

// logs number '64'
console.log(typeof one); 

// logs string "656302"
console.log(typeof two); 

// logs boolean
console.log(typeof three); 

// logs null
console.log(typeof four); 

// logs number '64.55'
console.log(typeof five);

// logs string "Howdy!"
console.log(typeof six);

// logs undefined
console.log(typeof seven);

// reassigns variables
five = "Hello!";
six = false;
seven = 23;

// logs string "Hello!"
console.log(typeof five);

// logs boolean
console.log(typeof six);

// logs number
console.log(typeof seven);
