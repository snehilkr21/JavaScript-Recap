function a() {
  for (let b = 1; b <= 5; b++) {
    setTimeout(function () {
      console.log(b);
    }, b * 1000);
  }
}
a();
