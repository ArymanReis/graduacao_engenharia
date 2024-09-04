const person = {
  name: "Aryman",
  surname: "Garcia Reis"
}

console.log(person["surname"]);
console.log(person);


const employee = new Object();
employee.name = "Bruna";
employee.surname = "Reis";

console.log(employee.name);

function createPerson (name, surname, i) {
  return {
    name,
    surname,
    age: i,

    get fullName() {
      return `${this.name} ${this.surname} ${this.age} Anos`
    }
  }
}

const personOne = createPerson("Bruna", "Reis", 30);
const personTwo = createPerson("Aryman", "Reis", 38);

console.log(personOne.fullName);
console.log(personTwo.fullName);