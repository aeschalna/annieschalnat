const constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
const planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
const star = "polaris";

// WRITE YOUR CODE BELOW
constellations.unshift("Canis Major");
console.log(constellations);

planets.pop();
console.log(planets);

const galaxy = constellations.concat(planets);
console.log(planets);
console.log(constellations);
console.log(galaxy);

const upperCaseStar = star.toUpperCase();
console.log(upperCaseStar);
console.log(star);