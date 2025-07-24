// function a() {
//   for (var b = 1; b <= 5; b++) {
//     setTimeout(function () {
//       console.log(b);
//     }, b * 1000);
//   }
// }

function a() {
  for (var b = 1; b <= 5; b++) {
    function c(b) {
      setTimeout(() => {
        console.log(b);
      }, b * 1000);
    }
    c(b);
  }
}

a();
