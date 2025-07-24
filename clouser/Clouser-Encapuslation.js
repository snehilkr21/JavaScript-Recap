function Outer() {
  let value = 0;
  return function Inner() {
    console.log(++value);
  };
}
let increment = Outer();
increment();
increment();
increment();

function Temp() {
  let count = 0;
  this.incrementCount = function () {
    console.log(++count);
  };
  this.decrementCount = function () {
    console.log(--count);
  };
}
let increment1 = new Temp();
increment1.incrementCount();
increment1.incrementCount();
increment1.incrementCount();
increment1.decrementCount();
