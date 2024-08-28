const url = "http://minhaempresa.com.br/filme?nome=poder&atores=Lucas,Guilherme";
const parameters = url.split("?")[1];
console.log(parameters);

const values = parameters.split("&");

for(let i = 0; i < values.length; i++) {
  if(values[i].startsWith("atores=")) {
    values[i] = "atores=" + values[i].substring(7).toUpperCase();
  }
}

console.log(values);