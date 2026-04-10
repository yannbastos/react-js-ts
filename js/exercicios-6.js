function avaliar_aluno(porcentagemDePresenca, notaA, notaB) {
  let media = (notaA + notaB) / 2;
  if (porcentagemDePresenca > 75 && media >= 6) {
    console.log("Passou");
  } else {
    console.log("Reprovou");
  }
}

avaliar_aluno(80, 7, 6); // Passou
avaliar_aluno(70, 8, 9); // Reprovou (presença insuficiente)
avaliar_aluno(90, 5, 6); // Reprovou (nota baixa)
