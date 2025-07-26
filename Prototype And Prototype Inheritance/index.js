// when we create an object(array, object, function) automatically JS engine add the object to it.
//that object is known as prototype.
//suppose if we create array and we need to find push method. we use __proto__ and so on to find it.
// this dig to find that element till null is known as prototype inheritance.

const arr = [1, 2, 3];
console.log(arr.__proto__); //same array prototype
console.log(arr.__proto__.__proto__); //same object prototype
console.log(arr.__proto__.__proto__.__proto__); //equivalent to null

const obj = {
  firstName: "snehil",
  lastName: "kumar",
};
console.log(obj.__proto__); //same as object prototype
console.log(obj.__proto__.__proto__); //equivalent to null

function abc() {}
console.log(abc.__proto__); //same as function prototype
console.log(abc.__proto__.__proto__) //same as object prototype
console.log(abc.__proto__.__proto__.__proto__) //equivalent to null
