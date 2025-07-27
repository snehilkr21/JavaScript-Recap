const Promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("1st Promise");
  }, 2000);
});
const Promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("2nd Promise");
  }, 3000);
});
Promise.myAny = function (values) {
  return new Promise(function (resolve, reject) {
    let errors = [];
    let count = 0;
    values.forEach((value, index) => {
      Promise.resolve(value)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          count++;
          errors[index] = err;
          if (count == values.length) {
            reject(new AggregateError(errors));
          }
        });
    });
  });
};
Promise.myAny([Promise1, Promise2])
  .then((res) => {
    console.log("res ", res);
  })
  .catch((err) => {
    console.log("err ", err.errors);
  });
