let pessoa = {
  idade: 18,
  estudar() {
    console.log("estudando");
  },
  altura: 180,
};

console.log(pessoa.altura);
console.log(pessoa.idade);

function estudar() {
  console.log("Estudando fora do objeto");
}

pessoa.estudar();
let lista = [pessoa, pessoa2];
console.log(lista);
