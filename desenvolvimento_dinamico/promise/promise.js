/*const toPromise = new Promise((resolve, reject) => {

  const sucess = false;

  if(sucess) {
    resolve("Deu certo!!!!")
  } else {
    reject("Ocorreu um problema!")
  }

})

toPromise.then((result) => {
  console.log("Foi um sucesso " + result);
})
.catch((erro) => {
  console.log("Deu ruim: " + erro);
})

function sumArray(array) {
  return new Promise((resolve, reject) => {

    if(!Array.isArray(array)) {
      reject("O argumento passado não é um array")
    }

    const sum = array.reduce((total, num) => total + num, 0);

    resolve(sum);

  })
}

//const myArray = "!tets";
const myArray = [20, 30, 40, 50];
sumArray(myArray).then((result) => {
  console.log("A soma dos elementos é: ", result )
})
.catch((erro) => {
  console.log("Ocorreu um erro: ", erro);
});*/

//Promise com classe

class MyClasse {
  
  constructor(value) {
    this.value = value;
  }

  operacaoAssincrona() {
    return new Promise((resolve, reject) => {

      const result = this.value * 2;

      if(result >= 0) {
        resolve(result);
      } else {
        reject("O resultado é negativo");
      }
    })

  }
}

const myClasse = new MyClasse(10);

myClasse.operacaoAssincrona().then((result) => {
  console.log("O resultado da operação é: ", result)
}).catch((erro) => {
  console.log("Ocorreu um problema: ", erro)
})