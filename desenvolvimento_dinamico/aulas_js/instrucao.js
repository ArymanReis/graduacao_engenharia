const pais = "Brasil";

if(pais != "Brasil") {
  console.log("Você é estrangeiro");
} else {
  console.log("Você é brasileiro");
}

const idade = 22;

if (idade < 16) {
  console.log("Não vota")
} else if (idade < 18 || idade > 65) {
  console.log("Voto opcional");
} else {
  console.log("Voto obrigatório")
}

//switch

const day = 5;
switch (day) {
  case 1:
    console.log("Domingo");
    break;

  case 2:
    console.log("Segunda-feira");
    break;

  case 2:
    console.log("Sexta-feira");
    break;
    default:
      console.log("Porfavor escolha as bebidas café, leite ou chá");
}