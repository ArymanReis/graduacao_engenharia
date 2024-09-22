const person = {
  name: "João",
  age: 25,
  profession: "Front-End"
}

const personJson = JSON.stringify(person);

console.log(personJson);

const personObj = JSON.parse(personJson);
console.log(personObj);

