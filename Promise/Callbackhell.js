const cart = ["kurta","trouser","shirt"]

API.createOrder(cart,function(){
    API.proceedToPayment(function(){
        API.showOrderSUmmary(function(){
            API.updateWallet()
        })
    })
})

//promise chaining
createOrder(cart)
.then(function(orderId){
  return proceedToPayment(orderId)
})
.then(function(paymentId){
    return orderSummary(paymentId)
})
.then(function(){
   return updateWallet()
})