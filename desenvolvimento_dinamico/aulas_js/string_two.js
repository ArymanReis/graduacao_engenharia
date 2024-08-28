const position = "JavaScript e Pyton";

const position1 = position.indexOf("Pyton");

console.log(position1);

let newString = position.substring(13, 19);
console.log(newString);

let phrase = "Hello Word";

if(phrase.startsWith("Hello")) {
  let previous = phrase.substring(4);
  let newPhrase = phrase.replace("Word", "Vibe");
  let newPhraseUppercase = newPhrase.toUpperCase();

  console.log(newPhraseUppercase);
}