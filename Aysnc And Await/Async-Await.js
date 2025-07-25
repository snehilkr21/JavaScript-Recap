// Async and await are new way of handling Promise (It is syntax sugar of promise), it usepromise behind the secen.
//   if promise is not settled (either failure or fulfilled) then it suspended over there only .
//    it prevent us from using nested promise chaining , we need to pass the response down the chain

const p = new Promise(function (resolve, rejct) {
  setTimeout(() => {
    resolve("Hello World");
  }, 1000);
});

//calling function with async and await
function getData() {
  p.then((res) => {
    console.log("res ", res);
  }).catch((err) => {
    console.log("err ", err);
  });
}
getData();

//using async and await
async function getData1() {
  const res = await p;
  console.log("res1 ", res);
}
getData1();
