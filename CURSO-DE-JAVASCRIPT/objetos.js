const person = {
  firstName: "Yann",
  lastName: "Bastos",
  age: "18",
  hobbies: ["Jogar", "Assistir Vídeos", "Ler livros"],
  dog: {
    name: "Simba",
    age: 4,
  },
};

// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;
// const hobbies = person.hobbies;

// Mesma coisa que acima
const {
  firstName,
  lastName,
  age,
  hobbies,
  dog: { name: dogName },
} = person;

const read = person.hobbies[2];

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(hobbies);
console.log(read);

// person.dog = "Simba";

console.log(person.dog.age);
console.log(dogName);

const todos = [
  {
    id: 1,
    description: "Estudar programação",
    isCompleted: false,
  },
  {
    id: 2,
    description: "Ler",
    isCompleted: true,
  },
  {
    id: 3,
    description: "Treinar",
    isCompleted: true,
  },
];

const descriptionOfLastTodo = todos[2].description;

console.log(descriptionOfLastTodo);
