function a() {
  let a1 = 10;
  function b() {
    console.log(a1);
  }
  return b;
}
let c = a();
console.log(c, c());
