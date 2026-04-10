let listaDeCompras = [];
let listaDeFrutas = ["Maçã", "Banana", "Kiwi", "Ameixa", "Abacaxi"];

listaDeCompras.push("Coxinha");
listaDeCompras.push("Banana");
listaDeCompras.push("Kiwi");
listaDeCompras.push("Pão");
listaDeCompras.push("Ameixa");

let numeroDeFrutas = 0;

listaDeCompras.map((elemento) => {
  if (listaDeFrutas.includes(elemento)) {
    numeroDeFrutas = numeroDeFrutas + 1;
  }
});

if (numeroDeFrutas >= 3) {
  console.log("Deu certo, eu tenho 3 ou mais frutas");
} else {
  console.log("Preciso de mais frutas");
}
