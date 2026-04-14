"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Tipos Básicos
let age = 5;
const firstName = "Yann";
const isValid = true;
let idk = 5;
idk = "12";
idk = true;
const ids = [1, 2, 3, 4, 5];
const booleans = [true, false, true, false];
const names = ["Felipe", "Jane"];
// Tupla
const person = [2, "Haag"];
// Lista de tuplas
const people = [
    [1, "Jane"],
    [2, "Doe"],
];
// Intersections
const productId = "1";
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
})(Direction || (Direction = {}));
const direction = Direction.Up;
console.log(direction);
//# sourceMappingURL=index.js.map