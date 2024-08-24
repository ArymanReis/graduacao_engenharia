let randomNumber = [1, 3, 4, 5, 55, 66, 765, 800];

let result = randomNumber.filter(item => item % 2 == 0);

console.log(result);

let filterNumbers = randomNumber.filter(

  function(values) {
    return values > 50;
  }

);

console.log(filterNumbers);

function searchForValues (value) {
  return value > 70;
}

let search = randomNumber.filter(searchForValues);

console.log(search);

let resultSearch = randomNumber.filter((valueNew) => {
  return valueNew > 30;
});

console.log(resultSearch);

const employees = [
  {nome: "Aryman", idade: 38},
  {nome: "Abraão", idade: 1},
  {nome: "Bruna", idade: 30},
  {nome: "Abigail", idade: 1}
]

const personList = employees.filter(
  function(value2) {
    //console.log(value2.nome);
    return value2.nome.length < 6;
  });

console.log(personList);



