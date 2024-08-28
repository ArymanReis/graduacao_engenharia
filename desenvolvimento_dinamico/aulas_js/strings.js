const name = "Aryman";
let size = name.length;
console.log(size);

result = size > 10 ? "Obrigado" : "Por favor preencha o nome completo";

console.log(result);

const upper = name.toUpperCase();
console.log(upper);

const game = "Fla vs Flu";
const position = game.indexOf("Flu");
console.log(position);

const cut = game.slice(0,4);
console.log(cut);

const validate = game.includes("Fla");
console.log(validate);

const greetingA = "Hello";
const greetingB = " Word";

const greeting = greetingA.concat(greetingB);

console.log(greeting);

let phrase = "     Olá! Você pratica qual esporte?   ";
console.log(phrase.trim());

let num = "1,2,3,4,5,6,7,8";
let arr = num.split(",");

console.log(arr);