function preparativoParaReceita() {
  console.log("Deixar as vasilhas limpas");
  console.log("Ter os ingredientes");
  console.log("Pre aquecer o forno");
}

function rotina() {
  console.log("Comer alguma coisa");
  console.log("Escovar dentes");
  console.log("...");
}

// rotina()

function soma(numeroA, numeroB) {
  let soma = numeroA + numeroB;
  console.log(soma);
}

// soma(20, 23)

function liquidificador(ingredientes) {
  console.log("Estou misturando: " + ingredientes);
}

// liquidificador("Banana")

function calculaMedia(notaA, notaB, notaC) {
  let soma = notaA + notaB + notaC;
  let media = soma / 3;
  return media;
}

let media1 = calculaMedia(23, 10, 60);
let media2 = calculaMedia(10, 20, 30);

console.log(media1);
console.log(media2);
