const names = ["Felipe", "João", "Julia", 10, false];

const joao = names[1];

names.push("Pedro");
names.unshift(20);

names.pop();
names.pop();
names.pop();

names[3] = "Gustavo";

const indexOfFelipe = names.indexOf("Felipe");

const sortedNames = names.sort();

const nameIsArray = Array.isArray(names);

console.log(names.length);
console.log(sortedNames);
console.log(nameIsArray);
