//todo: debounce calls a function when a user hasn’t carried out an event in a specific amount of time:
const fetchUrl = function (url) {
  console.log(`fetching ${url}...`, this.firstname);
};

const user = {
  firstname: 'Bob',
};

const debounce = (callback, delay) => {
  // Initialise a timer variable that controls when to run a callback function
  let timer = null;

  return (...args) => {
    // Reset the timer function every time the user starts an action
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

const fetchingDebounce = debounce(fetchUrl.bind(user), 500);
//* result of debounce
for (let i = 1; i < 10; i++) {
  fetchingDebounce(i);
}

//todo: throttle calls a function at intervals of a specified amount of time,
//todo:  while the user is carrying out an event.
const fetchData = function (url) {
  console.log(`fetchingData ${url}...`);
};
//initialize throttlePause variable outside throttle function
const throttle = (callback, time) => {
  let throttlePause;
  return (...args) => {
    //don't run the function if throttlePause is true
    if (throttlePause) return;
    //set throttlePause to true after the if condition. This allows the function to be run once
    throttlePause = true;

    //setTimeout runs the callback within the specified time
    setTimeout(() => {
      callback(...args);

      //throttlePause is set to false once the function has been called, allowing the throttle function to loop
      throttlePause = false;
    }, time);
  };
};

const fetchingThrottle = throttle(fetchData, 500);
//* result of throttle:
let int = setInterval(() => {
  console.log('interval time 200');
  fetchingThrottle(777);
}, 200);

setTimeout(() => {
  clearInterval(int);
}, 3000);
