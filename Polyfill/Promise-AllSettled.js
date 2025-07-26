const Promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("1st Promise");
  }, 2000);
});
const Promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("2nd Promise");
  });
});
Promise.myAllSettled = function (values) {
  return new Promise(function (resolve, reject) {
    let results = [];
    let count = 0;
    values.forEach((value, index) => {
      Promise.resolve(value)
        .then((res) => {
          count++;
          results[index] = {
            status: "fulfilled",
            result: res,
          };
        })
        .catch((err) => {
          count++;
          results[index] = {
            status: "rejected",
            result: err,
          };
        })
        .finally(() => {
          if (count == values.length) {
            resolve(results);
          }
        });
    });
  });
};
Promise.myAllSettled([Promise1, Promise2]).then((res) => {
  console.log("res ", res);
});
