let randomNumber = [1, 3, 4, 5, 55, 66, 765];

let num = randomNumber.map(function(value) {
  return value + 2;
});

console.log(num);

const employees = [
  {nome: "Aryman", idade: 38},
  {nome: "Abraão", idade: 1},
  {nome: "Bruna", idade: 30},
  {nome: "Abigail", idade: 1}
]

const names = employees.map(person => person.nome);

console.log(names);

let counter = 0;
for(let i = 0; i < randomNumber.length; i++) {
  counter += randomNumber[i];
}

console.log(counter);

let total = randomNumber.reduce(function(total, number){
  return total + number;
}, 0);

console.log(total);
