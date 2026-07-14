// class StaffUser {
//   constructor(name, email, id) {
//     this.name = name;
//     this.email = email;
//     this.id = id;
//   }

// }

// let tail = 0;
// let head = 0;
// for (let i = 1; i <= 10; i++) {
//   if (Math.random() < 0.5) {
//     tail++;
//   }
//   else {
//     head++;
//   }
// }
// console.log("Tail:" + tail + " and " + "Head:" + head);


// for (let i = 1; i <= 10; i++) {
//   let count = ""

//   for (let index = 1; index <= i; index++) {

//     count +="*"
//   }
//   console.log(count);


// }

//   console.log(">>>>>>>>>>>>");

// for (let i = 10; i >= 0; i--) {
//   let count = ""

//   for (let index = 1; index <= i; index++) {

//     count +="*"
//   }
//   console.log(count);

// }

function letter(alpha) {
  let alphabet = "";
  let alphas = "";
  for (let index = 0; index < alpha.length; index++) {
    alphas += alpha[index];
    alphabet += "*" + " ";
    console.log(alphabet);
    console.log(alphas);

  }

}
letter("Rejoice");

const greetings = () => {
  console.log("Hello Rejoice! Good morning.");

}
greetings();
const admire = affection => `I ${affection} You`;
console.log(admire("Love"));

const printArgs = (...arguments) => console.log(arguments);

printArgs(1, 2, 3);

const calculateSquare = side => {
  let area = side * side;
  let perimeter = 4 * side;
  console.log(`The square side is ${side}
    The area of the square is ${area}
    The perimeter of the square is ${perimeter}`);

}
calculateSquare(8);

let person = {
  name: "Timothy",
  age: 31,
  greet() {
    console.log(`Hello! My name is ${this.name} and I am ${this.age} years old`);

  }
}
person.greet();