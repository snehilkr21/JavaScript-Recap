const Promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Promise1");
  }, 3000);
});
const Promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("Promise2");
  }, 2000);
});
Promise.myRace = function (values) {
  return new Promise(function (resolve, reject) {
    values.forEach((value) => {
      Promise.resolve(value)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};
Promise.myRace([Promise1, Promise2])
  .then((res) => {
    console.log("res ", res);
  })
  .catch((err) => {
    console.log("err ", err);
  });
