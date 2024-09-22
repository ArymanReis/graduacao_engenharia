function getValue(value) {
  return new Promise((resolve, reject) => {
    if(value > 10) {
      value += 1;
      resolve(value)
    } else {
      reject("Não foi possível obter o valor")
    }
  })
}

function doubleValue(value) {
  return value * 2;
}

function addTen(value) {
  return value + 10;
}

getValue(30)
  .then((value) => {

    console.log("Valor Obtido")
    return doubleValue(value);

  })
  .then((newValue) => {
    console.log("Novo Valor Obtido")
    return addTen(newValue);
  })
  .then((resultFinaly) => {
    total = resultFinaly + 5
    console.log("O resultado final é: ", total)
  })
  .catch((erro) => {
    console.log("Ocorreu um erro"), erro;
  })