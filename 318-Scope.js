// Shout is declared in the global scope and is available to both functions
const shout = "Shout";

const justShout = function () {
  console.log('${shout}, ${shout}');
  return;
}

const shoutItAllOut = function () {
  console.log('${shout} it all out! ');
  return;
}

justShout();
shoutItAllOut();

// local scope 'lions' only available to this sayLions function
const sayLions = function () {
  const animal = "lions";
  console.log(animal);
  return;
}

//'tigers' is also declared locally
const sayTigers = function () {
  const animal = "tigers";
  console.log('and ${animal} and ');
  return;
}

// global scope (remove local scope)
const bears = "Bears";

const sayBears = function () {
  console.log('${bears}! Oh my!');
  return;
}

sayLions();
sayTigers();
sayBears();

// Declare var in outer function, makes it available to inner and outer function layers
const singAlong = function () {
  const sing = "Sing";
  console.log('${sing},');
  const singASong = function () {
    console.log('${sing} a Song.');
  };
  singASong();
}

singAlong();
