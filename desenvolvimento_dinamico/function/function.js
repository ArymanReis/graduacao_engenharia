function multiply(x, y) {
  return x * y
}

let result = multiply(5, 4);
console.log(result);

function sum(a, b = 2, c = 3) {
  let total = a + b + c;
  return total
}

let sumResult = sum(2);
console.log(sumResult);

let calc = function(a,b,c) {
  return a + b + c;
}

console.log(calc(4,6,8));

const newSum = (num1, num2) => {
  return num1 / num2;
}

console.log(newSum(50,5));

const number = [3, 4, 5, 6, 7];
const values = number.map((num) => num * num );

console.log(values);

let productList = ["Strep", "Quilha", "Deck", "GoPro"];
let capitalLetter = productList.map((letter) => letter.toUpperCase());

console.log(capitalLetter);