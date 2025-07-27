const arr = [1, 2, 3, 4];
Array.prototype.myFilter = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    callback(this[i]) && result.push(this[i]);
  }
  return result;
};
console.log(arr.myFilter((el) => el > 2));
