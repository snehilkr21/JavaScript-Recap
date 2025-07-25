// Promise.allsettled takes an array of Promise, it return the array of result(means the status, message) in the same order in
// which it is passed . we need to use it when promise are not depenedent on each other. we need to sent the rejected message also
const Promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("1st resolved");
  }, 3000);
});
const Promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {resolve("2nd Promise")}, 2000);
});
const Promse3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("3rd Promise");
  }, 1000);
});
Promise.mySettled = function (values) {
  return new Promise(function (resolve, reject) {
    let count = 0;
    let results = [];
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
Promise.mySettled([Promise1, Promise2, Promse3]).then((res) => {
  console.log("res ", res);
});
