const Promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("1t Promise");
  }, 1000);
});
const Promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("2nd Promise");
  }, 2000);
});
const Promise3 = Promise.reject("3rd Promise");
Promise.myAll = function (values) {
  return new Promise(function (resolve, reject) {
    let result = [];
    let count = 0;
    values.forEach((value, index) => {
      Promise.resolve(value)
        .then((res) => {
          count++;
          result[index] = res;
          if (values.length == count) {
            resolve(result);
          }
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
