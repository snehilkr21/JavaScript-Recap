//call, apply, bind is used for function borrowing from the another object

//inside call we pass the value to which this keyword points to
const obj = {
  firstName: "Snehil",
  lastName: "kumar",
  printFullName: function (homeTown, pincode) {
    console.log(
      this.firstName +
        " " +
        this.lastName +
        " from " +
        homeTown +
        `(${pincode})`
    );
  },
};
const student1 = {
  firstName: "Shashank",
  lastName: "Raj",
};
obj.printFullName.call(student1, "Bihar", "844101");

//the difference between call and apply is that is takes the paramter in the form of array
obj.printFullName.apply(student1, ["Bihar", "844101"]);

//for bind we pass the data in same way as of call. in bind it donot directly call the method , it copy the function and
//bind the object with the function (which is passed as an argument), we need to call it further as per requirment
const fn = obj.printFullName.bind(student1, "Bihar", "844101");
fn();
