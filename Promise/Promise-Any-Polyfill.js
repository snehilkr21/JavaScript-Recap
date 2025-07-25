// Promise.any takes the array of promise and resturn the first resolve and if all promise is not resolved then it return array of
// failure which contain failure message inside it
const Promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("1st Promise");
  }, 3000);
});
const Promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("2nd Promise");
  }, 1000);
});
const Promise3 = Promise.reject("3rd Promise");
Promise.myAny = function (values) {
  return new Promise(function (resolve, reject) {
    let count = 0;
    let errors = [];
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
Promise.myAny([Promise1, Promise2, Promise3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.errors);
  });
