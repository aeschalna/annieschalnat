// WRITE YOUR CODE HERE
const studentName = ["Feyre", "Aurora", "Legolas", "Hermione", "Nesta"]

console.log(students.length);

console.log(`Welcome to the class, ${studentName[0]}.`);
console.log(`Welcome to the class, ${studentName[1]}.`);
console.log(`Welcome to the class, ${studentName[2]}.`);
console.log(`Welcome to the class, ${studentName[3]}.`);
console.log(`Welcome to the class, ${studentName[4]}.`);

studentName[0] = "Annie";

if (studentName[0] === "Annie") {
    console.log('${studentName[0]} is in class!');
}