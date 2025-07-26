// The value of this keyword depends on in normal function
// 1)if it is used in non-strict mode this keyword is window object according to this substituion , it also depend on calling obj
// 2)if it is in strict mode , the value is undefined . the value also depend on calling obj
function a() {
  console.log("a ", this);
}
a();

//in arrow function , it does not have it's own this value
//if it is non-strcit mode the value depends on calling obj. there the calling ob is window obj
//in strict mode the value will be window obj , and calling obj also
const b = () => {
  console.log("c ", this);
};
b();

//normal function inside nested object
//if it is on non-strict mode the value depends on the calling obj.
//if it is in strict mode the value depends on the calling obj.
const obj = {
  firstName: "Snehil",
  getFirstName: function () {
    console.log("obj ", this.firstName);
  },
};
obj.getFirstName();

//if it is arrow function
//if it is non-strict mode the value will be undefined
//in strcit mode the value will be undefined
const obj1 = {
  firstName: "snehil",
  getFirstName: () => {
    console.log("firstName ", this.firstName);
  },
};
obj1.getFirstName();

//the value of this keyword depends where the arrow function alctually present , here it is present inside obj
const obj2 = {
  lastName: "kumar",
  getLastName: function () {
    const temp = () => {
      console.log("obj2 ", this);
    };
    temp();
  },
};
obj2.getLastName();

//call, apply, bind is used to when we want to share the function
//the value depends on what we pass on arguments
const obj3 = {
  firstName: "shashank",
};
obj.getFirstName.call(obj3);
