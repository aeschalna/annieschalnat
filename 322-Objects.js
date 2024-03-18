//WRITE YOUR CODE BELOW
const customerDrink = {
    name: "cafe",
    sugars: 0,
    isReady: true
}

console.log(customerDrink);
console.log(customerDrink.name);
console.log(customerDrink.sugars);
console.log(customerDrink.isReady);

if (customerDrink.isReady == true) {
    console.log('Ready for pickup: ${customerDrink.name} with ${customerDrink.sugars} sugars')
} else {
    console.log('Still in queue: ${customerDrink.name} with ${customerDrink.sugars} sugars')
}