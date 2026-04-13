// for (let index = 0; index < 10; index++) {
//   console.log(index);
// }

const cars = ["Ferrari", "Tesla", "Mercedes"];

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// for (let car of cars) {
//   console.log(car);
// }

// cars.forEach(function (index, car) {
//   console.log(index);
//   console.log(car);
// });

let index = 0;

while (index < 10) {
  console.log("index é menor do que 10!");
  // index = index + 1;
  // index += 1;
  index++;
}

const person = {
  name: "Jane",
  age: 21,
};

for (property in person) {
  console.log(person[property]);
}
