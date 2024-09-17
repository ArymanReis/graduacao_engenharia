const valueTotal = [0, 0];
let valueProduct = [50.00, 30.00];
let qnt = [0, 0];

function addItem(item) {

  let qnts = document.getElementById("qnt" + item);
  let total = document.getElementById("total" + item);

  qnt[item] += 1;

  valueTotal[item] = Number.parseFloat(valueProduct[item]) * qnt[item];

  qnts.innerHTML = qnt[item];

  total.innerHTML = valueTotal[item].toFixed(2);
  valueToBuy();

};

function removeItem(item) {
  if(qnt[item] > 0) {
    qnt[item] -=1;

    let qnts = document.getElementById("qnt" + item);
    let total = document.getElementById("total" + item);

    valueTotal[item] = Number.parseFloat(valueProduct[item]) * qnt[item];

    qnts.innerHTML = qnt[item];
  
    total.innerHTML = valueTotal[item].toFixed(2);
    valueToBuy();

  }
};

function valueToBuy() {

  let totalPurchaseValue = document.getElementById("total-purchase-value");

  let count = 0;

  for(let i = 0; i < valueTotal.length; i++) {

    count += valueTotal[i];

  }

  totalPurchaseValue.innerHTML = count.toFixed(2);

}