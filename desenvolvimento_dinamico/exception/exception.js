function toDivide(a, b) {
  if(b === 0) {
    throw new Error ("Divisão por zero não é permitida")
  }
  return a/b
}

try {
  const result = toDivide(10, 2);
  console.log(`Resultado: ${result}`)
} catch (error) {
  console.log(`Ocorreu um erro: ${error.message}`)
}

//Verificação de senha
const numberPassaword = [1, 2, 3, 4, 5];

try {
  const doubleNumbers = numberPassaword.map((num) => {
    if(typeof num !== "number") {

      throw new Error("O array só pode conter números")

    }
    return num * 2;
  })

  console.log(doubleNumbers);

} catch(error) {
  console.log(`Ocorreu uma exceção ${error.message}`)
}

//Avançando com exception
function processName(name, callback) {
  if(typeof name !== "string"){
    callback(new Error(`O nome deve ser uma string`));
    return;
  }

  if(name.length === 0) {
    callback(new Error ("O nome não pode estar vazio"));
    return;
  }

  callback(null, "Nome processado com sucesso");
}

processName("Aryman", (error, resultNew) => {
  if(error) {
    console.log(`Ocorreu um problema: ${error.message}`)
  } else {
    console.log(resultNew);
  }
});

//Exemplo de exception
function checkPosition(numbers){
  if(!Array.isArray(numbers)) {
    throw new Error("O argumento deve ser de um Array")
  }

  const allPositive = numbers.every((num)=> num > 0);
  if(!allPositive) {
    throw new Error("O array deve conter somente números positivos");
  }
  return true;
}

try {
  const numbersTwo = [1, 2, 3, 4, 5, 6];

  const isPositive = checkPosition(numbersTwo)

  console.log(isPositive)
} catch (error) {
  console.log(`Ocorreu um erro: ${error.message}`)
}


