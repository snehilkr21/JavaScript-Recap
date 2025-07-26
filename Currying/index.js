//Currying is a phenomenon by which we can break down a function with multiple arguments into
//sequence of function whcih take one argument at a time
// we can create a create currying using bind method and clousers

//using bind
function multiply(x, y) {
  console.log(x * y);
}
const temp = multiply.bind(this, 5);
temp(3);

//using closures
function addition(x) {
  return function (y) {
    console.log(x + y);
  };
}
const temp1 = addition(3);
temp1(4);
