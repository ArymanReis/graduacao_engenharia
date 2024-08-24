let values = [1, 2, 3, 4, 5];
console.log(values[3]);

console.log("Array invertido: " + values.reverse());

for (let pos = 0; pos < values.length; pos++) {
  console.log("Posição: " + values[pos]);
}

const car = [];

car[0] = "Volvo";
car[1] = "Fiesta";
car[3] = "BMW";

const motorcycles = new Array("BMW", "Yamaha");

let soma = 0;
for (let pos = 0; pos < values.length ; pos++) {

  soma += values[pos];
}

let media = soma / values.length;

console.log(media);

const arr1 = [3, 6, 7, 1, 7, 10];

console.log(arr1.join(" | "));

const remove = arr1.shift();

console.log(arr1);

console.log("Posição do número 3: " + arr1.indexOf(7));

arr1.push(90);

console.log(arr1);

arr1.pop();
console.log(arr1);

let array2 = [1, 3, 5, 6, 8, 9];

array2.splice(2, 2),

console.log(array2);

const namesNew = ["João", "Pedro", "Maria", "Ricardo"];

const news = namesNew.splice(1, 1, "Luiz", "Aryman");

console.log(namesNew);

const pais = ["Brasil", "Inglaterra", "Estados Unidos"];

pais.unshift("Uruguai");

console.log(pais);

let person = ["Eduardo", "Aryman", "Abraão", "Bruna"];
let trainer = ["Marco antônio", "Jussara Peixoto"]

let personTwo = person.slice(3, 4);

console.log(person);
console.log(personTwo);

let enterprise = person.concat(trainer);

console.log(enterprise);
