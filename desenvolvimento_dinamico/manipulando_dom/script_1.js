/*const listStyle = document.querySelectorAll(".style");

for(i = 0; listStyle.length; i++) {
  listStyle[i].style.backgroundColor = "blue";
  listStyle[i].style.color = "white";
  listStyle[i].innerText = listStyle[i].innerText.toUpperCase();
}

//Criando elemento dinâmicamente 
let element = document.createElement("div");

element.innerText = "Novo texto dinâmico na div";
element.style.backgroundColor = "#cccc";
document.body.append(element);


const list = document.getElementById("list");

const li = document.createElement("li");
li.textContent = "Tamo Junto e Misturado!";

list.appendChild(li);

const teams = ["Flamengo", "Vasco", "Botafogo", "Fluminence"];

const soccerTeams = document.querySelector("#teams");

for(let i = 0; i < teams.length; i++) {
  let team = teams[i];

  let listItem = document.createElement("li");
  listItem.innerText = team;

  listItem.style.borderLeft = "5px solid blue";

  soccerTeams.appendChild(listItem);
}*/

function eventTest(){
  alert("Hello Word");
}

function newEvent() {
  document.getElementById("example").innerHTML = "Novo texto de evento";
}

function newEventUp() {
  document.getElementById("example").innerHTML = "Out text";
}

function newItem(){

  const nameLocation = document.getElementById("name");

  alert("Seu nome é: " + nameLocation.value);
}





