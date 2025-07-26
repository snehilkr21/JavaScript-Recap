//Debouncing and Throatling are used for performance optmization by using the rate of limiting the function call.
//Debouncing :- In debouncing the we can the function call when the time gap between two event garter than threshold time
//Throatling :- In throating we can make the function call every after certain interval of time
function getData() {
  console.log("Data fetched");
}
function Debounce(fn, d) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, d);
  };
}
const debounceFunction = Debounce(getData, 1000);

function Throatling(fn, d) {
  let timer = true;
  return function () {
    if (timer) {
      timer = false;
      setTimeout(() => {
        timer = true;
        fn();
      }, d);
    }
  };
}
const throatlingFunction = Throatling(getData, 2000);
