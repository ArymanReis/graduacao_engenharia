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
  constructor(name, age, position, department, linguage) {
    super(name, age, position);
    this.department = department;
    this.linguage = linguage;
  }

  manage() {
    return `Meu nome é: ${this.name}, Tenho: ${this.age} anos, sou: ${this.position} do departamento de ${this.department} e uso a linguagem ${this.linguage}`;
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

function exibirErro(userName, ageUser, positionUser, departmentUser, linguageProg) {
  if (!userName || !ageUser || !positionUser || !departmentUser || !linguageProg) {
    throw new Error("Todos os campos são obrigatórios.");
  }
}

button.addEventListener("click", (e) => {
  e.preventDefault();

  const userName = document.querySelector("#employee").value;
  const ageUser = document.querySelector("#age").value;
  const positionUser = document.querySelector("#position").value;
  const departmentUser = document.querySelector("#department").value;
  const linguageProg = document.querySelector("#linguage").value;

  try {    
    exibirErro(userName, ageUser, positionUser, departmentUser, linguageProg);

    const managerPerson = new Manager(userName, ageUser, positionUser, departmentUser, linguageProg);
    const divSummary = document.querySelector("#summary");
    const summary = document.createElement("p");

    const descriptionMan = managerPerson.manage();
    summary.innerHTML = descriptionMan;
    divSummary.innerHTML = "";  // Limpa a div antes de adicionar a nova descrição
    divSummary.append(summary);

  } catch (error) {
    console.log(`Ocorreu um erro: ${error.message}`);
    alert(`Erro: ${error.message}`);
  }
});
