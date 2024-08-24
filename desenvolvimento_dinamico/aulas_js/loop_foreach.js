let searchForValues = [20, 30, 50, 40, 90];

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