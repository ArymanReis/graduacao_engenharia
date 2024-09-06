class Person {

  constructor(name, surname) {
    this.name = name,
    this.surname = surname
  }

  toSpeak () {
    console.log("Olá " + this.name)
  }

  get fullName() {
    console.log("Engenheiro FrontEnd " + this.name + " " + this.surname)
  }
}

const personOne = new Person("Aryman", "Garcia Reis");

personOne.fullName;

personOne.toSpeak();