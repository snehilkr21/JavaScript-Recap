const arr = [1, 2, 3, 5];
Array.prototype.myReduce = function (callback, initialValue) {
  let result = initialValue;
  for (let i = 0; i < this.length; i++) {
    result = !result ? this[0] : callback(result, this[i]);
  }
  return result;
};
console.log(
  arr.myReduce(function (acc, curr) {
    return acc + curr;
  }, 0)
);
