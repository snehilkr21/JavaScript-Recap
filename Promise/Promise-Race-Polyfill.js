// Promise.race take the array of promise and return the first settled message (either reject or resolved). Suppose there are
// two promise which settled at same time (one is settled and other is rejected) then it shows the settled message

const Promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("1st promise");
  }, 2000);
});
const Promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("2nd Promise");
  }, 1000);
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
