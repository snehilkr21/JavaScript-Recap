//Event bubling and capturing are the ways for event propogation in the DOM tree
//In event bubling when we click on any element it start to bubble outside till parent
//In event capturing/delegation when we click on any element then event start move from parent to that element
document.getElementById("grandParent").addEventListener(
  "click",
  (e) => {
    console.log("grandParent");
  },
  false
);
document.getElementById("parent").addEventListener(
  "click",
  (e) => {
    console.log("parent");
  },
  false
);
document.getElementById("child").addEventListener(
  "click",
  (e) => {
    console.log("child");
  },
  false
);
