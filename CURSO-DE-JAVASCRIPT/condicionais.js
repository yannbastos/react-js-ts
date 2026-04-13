const sum = 1 + 1;

// if (sum === 2) {
//   number = 2;
// } else {
//   number = 4;
// }

// Mesma coisa que acima
let number = sum === 2 ? 2 : 4;

console.log(number);

// if (sum == 2) {
//   console.log("Sum is 2!");
// } else if (sum === 3) {
//   console.log("Sum is not 3!");
// } else {
//   console.log("Sum is not 2!");
// }

// &&
// ||

const sum1 = 2 + 2;
const sum2 = 3 + 3;

if (sum1 === 4 && sum2 === 6) {
  console.log("Sum is 4 and Sum2 is 6!");
}

if (sum1 === 4 || sum2 === 6) {
  console.log("Sum is 4 or Sum2 is 6!");
}

const car = "Mercedes";

switch (car) {
  case "Mercedes":
    console.log("Mercedes is beautiful!");
    break;
  case "Ferrari":
    console.log("Ferrari is very red!");
    break;
  case "Tesla":
    console.log("Tesla is very smart!");
    break;
}
