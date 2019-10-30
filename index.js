var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 99 + 1)
  var newItem = {[item]: price}
  cart.push(newItem)
  return cart
}

function viewCart() {
  if(cart.length == 0) {
    console.log('Your shopping cart is empty.')
  } else {
    var message = 'In your cart, you have '
    var item = cart[0]
    var itemName = Object.keys(item)[0]
    var itemPrice = item[itemName]
    message += `${itemName} at $${itemPrice}`
    if(cart.length == 2) {
      var item2 = cart[1]
      var itemName2 = Object.keys(item2)[0]
      var itemPrice2 = item2[itemName2]
      message += ` and ${itemName2} at $${itemPrice2}`
    } else if(cart.length >= 3) {
      for(let i = 1; i < cart.length - 1; i++) {
        var varItem = cart[i]
        var varItemName = Object.keys(varItem)[0]
        var varItemPrice = varItem[varItemName]
        message += `, ${varItemName} at $${varItemPrice}`
      }
      var lastItem = cart[cart.length - 1]
      var lastItemName = Object.keys(lastItem)[0]
      var lastItemPrice = lastItem[lastItemName]
      message += `, and ${lastItemName} at $${lastItemPrice}`
    }
    message += '.'
    console.log(message)
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
