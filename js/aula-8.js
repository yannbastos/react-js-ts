let nota = 7;
let notaMinimaPraPassar = 6;

if (nota > notaMinimaPraPassar) {
  console.log("Aluno passou");
} else {
  console.log("O aluno não passou");
}

if (nota >= notaMinimaPraPassar) {
  console.log("Aluno passou");
} else {
  console.log("O aluno não passou");
}

let frutas = ["Banana", "Kiwi", "Ameixa", "Morango"];

frutas.push("Abacate");

if (frutas.includes("Abacate") == true) {
  console.log("A lista está completa");
} else {
  console.log("Está falatando abacate");
}
