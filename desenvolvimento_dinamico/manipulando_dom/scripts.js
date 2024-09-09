/*const name = window.prompt("Qual é o seu nome?");
const surname = window.prompt("O seu sobrenome é: ");

const fullname = window.alert(`O seu nome é: ${name} ${surname}`);

let number1 = Number.parseInt( window.prompt("Digite um número:"));
let number2 = Number.parseInt (window.prompt("Digite um número:"));

let sum = number1 + number2;

window.alert("A soma do seu número é: " + sum);

function confirmTask() {
  let confirmation = confirm("Você deseja excluir esse item?");

  if(confirmTask) {
    alert("Tirou onda!")
  } else {
    alert("Precisa melhorar!")
  }
}*/

const linguage = document.getElementsByTagName("li")[0];
const linguageSubs = document.getElementsByTagName("li")[2];

const newText = document.querySelector(".new-paragraph");

linguageSubs.style.color = "blue";

linguage.innerText = "SQL e MySQL";

newText.innerHTML = "<p> Manipulando o DOM </p>"





