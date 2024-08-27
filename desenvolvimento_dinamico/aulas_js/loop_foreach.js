/*let searchForValues = [20, 30, 50, 40, 90];

for (let values of searchForValues) {
  console.log(values);
}

searchForValues.forEach(value => console.log(value));


const image1 = "Natureza";
const image2 = "Animal";
const image3 = "Carros";

let images = [image1, image2, image3];

console.log(images);

let counter = 0;
searchForValues.forEach(values => {
  counter += values;
})

console.log(counter);

searchForValues.forEach(function(value, i, array) {
  console.log(array[i]);
})

const car = [
    { modelo: "Audio A3", marca: "Audi", ano: "2000" },
    { modelo: "Compass", marca: "Jeep", ano: "2020" }

  ]

  for(let caracteristica in car) {
    console.log(car[caracteristica]);
  }

  for(let ano of car) {
    console.log(ano.ano);
  }

  let count = 0;

  while (count <= 10) {
    console.log(count);
    count++;
  }

//let _count = 0;

  //do {
  //  console.log(_count)
  //} while ( _count < 6)

  const carro = {

    modelo: 'Audi A3',
  
    marca: 'Audi',
  
    ano: 2020
  
  };
  
  for (let caracteristica in carro) {
  
    console.log(caracteristica + ': ' + carro[caracteristica]);
  
  }*/

    const carros = [

      { modelo: 'Audi A3', marca: 'Audi', ano: 2020 },
    
      { modelo: 'Jeep Compact', marca: 'Jeep', ano: 2021 }
    
    ];
    
    for (let indice in carros) {
    
      console.log('Carro ' + (parseInt(indice) + 1) + ':');
    
      for (let atributo in carros[indice]) {
    
        console.log(atributo + ': ' + carros[indice][atributo]);
    
      }
    
      console.log('-----');
    
    }

    const numeros = [2, 4, 6, 8, 10];

let soma = 0;

for (let i = 0; i < numeros.length; i++) {

  if (numeros[i] % 2 === 0) {

    soma += numeros[i];

  }

}

console.log(soma);