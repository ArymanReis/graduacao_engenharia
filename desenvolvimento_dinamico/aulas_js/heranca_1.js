class ElectronicDevice {

  constructor(name) {
    this.name = name;

    this.connected = false;
  }
  toConnect() {
    if(this.connected) {
      console.log("Já está ligado")
      return;
    }

    this.connected = true;

  }
}

//const plug = new ElectronicDevice("Cell Phone");

class SmartPhone extends ElectronicDevice {
  constructor(name, color, model) {
    super(name);
    this.color = color;
    this.model = model;
  }
}

const newCellPhone = new SmartPhone("Samsung", "Preto", "A20");
console.log(newCellPhone);

newCellPhone.toConnect();
newCellPhone.toConnect();