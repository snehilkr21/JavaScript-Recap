const cart = ["Kurta", "Trouser", "Shirt"];

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    const temp = false;
    if (temp) {
      resolve(1234);
    } else {
      const err = new Error("Cart is not valid");
      reject(err);
    }
  });
  return pr;
}

createOrder(cart)
.then(function (orderId) {
  console.log(orderId);
})
.catch(function (err) {
  console.log(err);
});
