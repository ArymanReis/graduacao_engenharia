const shoppingCart = [];

function addItemToCart (item) {
  shoppingCart.push(item);
}

function removeItemFromCart(item) {
  const index = shoppingCart.indexOf(item);

  if(index !== -1) {
    shoppingCart.splice(index,1)

  } 
}


function viewCart() {
  if(shoppingCart.length == 0) {
    console.log("O seu carrinho está vazio");
  } else {
    console.log("Item adicionado");

    for(let i = 0; i < shoppingCart.length; i++ ) {
      console.log(`${i + 1} - ${shoppingCart[i]}`)
    }
  }
}

function clearCart() {
  shoppingCart.length = 0;
  console.log("O seu carrinho foi esvaziado");
}

addItemToCart("Prancha")
addItemToCart("Skate")
addItemToCart("Blusa")
addItemToCart("short")

viewCart();

removeItemFromCart("Prancha");

viewCart();