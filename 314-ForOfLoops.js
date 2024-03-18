// WRITE YOUR CODE BELOW
const students = ["Feyre", "Arya", "Nesta", "Luna", "Legolas"];

console.log(students.length);

console.log("-----------------------------------");
console.log('For loop');

for (let i = 0; i < students.length; i++) {
    console.log(`Great to see you, ${students[i]}!`);
}

console.log("-----------------------------------");
console.log('For-of loop');

for (const student of students) {
    console.log(`Great to see you, ${student}!`);
}