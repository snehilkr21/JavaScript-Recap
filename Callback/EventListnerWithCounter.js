function Increment() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function () {
    console.log("count ", ++count);
  });
}
Increment();
