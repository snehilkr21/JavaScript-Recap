// Promise.all takes the array of Promise, it return the array which contains the value which is returned by promise (in the
// same order in which it is passed)
// it rejct as soon when any promise fails with the failure message

const Promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("1st Promise");
  });
});
const Promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("2nd Prmise");
  });
});

const Promise3 = Promise.resolve("3rd Promise");

const Promise4 = Promise.reject("4th Promise");

Promise.myAll = function (values) {
  return new Promise(function (resolve, reject) {
    let results = [];
    let count = 0;
    values.forEach((value, index) => {
      Promise.resolve(value)
        .then((res) => {
          count++;
          results[index] = res;
          if (count == values.length) resolve(results);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

Promise.myAll([Promise1, Promise2, Promise3])
  .then((res) => {
    console.log("res ", res);
  })
  .catch((err) => {
    console.log("err ", err);
  });
