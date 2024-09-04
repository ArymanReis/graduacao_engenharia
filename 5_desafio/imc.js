function Person (name, surname, height, weight) {
  return {
    name,
    surname,
    heightValue: height,
    weightValue: weight,

    calculateImc() {
      const index = this.weightValue / (this.heightValue ** 2).toFixed(1);

      if( index < 18.5 ) {
        console.log("Baixo Peso");
      } else if ( index >= 18.5 && index < 24.9 ) {
        console.log("Dentro do peso");
      } else if ( index >= 25 && index < 29.9 ) {
        console.log("Sobre Peso");
      } else if ( index >= 30 && index < 34.9 ) {
        console.log("Obesidade 1");
      } else if ( index >= 35 && index < 39.9 ) {
      console.log("Obesidade 2");
      } else if( index >= 40 ) {
      console.log("Obesidade 3");
      }
    }    
  }
}

const patient = Person("Aryman", "Garcia Reis", 1.70, 70);
patient.calculateImc();