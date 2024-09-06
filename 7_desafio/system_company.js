class Employee {

  constructor(name, age, position) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  introduceYourself() {
    console.log("Meu nome é: " + this.name + " Tenho: " + this.age + " Anos");
  }

  toWork() {
    console.log("Eu sou: " + this.position);
  }
}

class Manager extends Employee {

  constructor(name, age, position, department) {
    super(name, age, position);
    this.department = department;
  }

  manage() {
    console.log("Gerencio o departamento de: " + this.department);
  }
}

class Developer extends Employee {

  constructor(name, age, position, linguage) {
    super(name, age, position);
    this.linguage = linguage;
  }

  program() {
    console.log("Meu nome é: " + this.name + " Tenho: " + this.age + " Anos" + " Utilizo a linguagem: " + this.linguage);
  }
}

const ManagerSenior = new Employee("Aryman", 38, "Gerente Senior");

const developerSenior = new Developer("Abraão", 20, "Gerente Senior", "JavaScript");

ManagerSenior.introduceYourself();
ManagerSenior.toWork();

developerSenior.program();

