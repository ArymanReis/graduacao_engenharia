const button = document.querySelector("#send"); 


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
    console.log(`Meu nome é: ${this.name}, Tenho: ${this.age} anos, sou: ${this.position} do departamento de ${this.department}`);
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



button.addEventListener("click" , (e) => {
  e.preventDefault();
  
  const userName = document.querySelector("#employee").value;
  const ageUser = document.querySelector("#age").value;
  const positionUser = document.querySelector("#position").value;
  const departmentUser = document.querySelector("#department").value;
  const linguageProg = document.querySelector("#linguage").value;

  const developerSenior = new Developer(userName, ageUser, positionUser, linguageProg);
  const managerPerson = new Manager(userName, ageUser, positionUser, departmentUser, linguageProg);

  developerSenior.program();
  managerPerson.manage();

});






