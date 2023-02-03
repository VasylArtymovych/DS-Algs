//todo: debounce calls a function when a user hasn’t carried out an event in a specific amount of time:
const fetchUrl = function (url) {
  console.log(`fetching ${url}...`, this.firstname);
};

const user = {
  firstname: 'Bob',

  func(data) {
    console.log(data);
  },
};

const debounce = (callback, delay) => {
  // Initialise a timer variable that controls when to run a callback function
  let timer = null;

  return function (...args) {
    // Reset the timer function every time the user starts an action
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      // bind context if callback calls as a method of object
      callback.apply(this, args);
    }, delay);
  };
};

const fetchingDebounce = debounce(fetchUrl.bind(user), 500);
user.func = debounce(user.func, 1000);

//* result of debounce
for (let i = 1; i < 10; i++) {
  fetchingDebounce(i);
  user.func('user method call: ' + i);
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

      //throttlePause is set to false once the function has been called,
      // allowing the throttle function to loop
      throttlePause = false;
    }, time);
  };
};

//todo: THROTTLE with binded context:
function throttle(func, ms) {
  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {
    if (isThrottled) {
      // memo last arguments to call after the cooldown
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    // otherwise go to cooldown state
    func.apply(this, arguments);
    isThrottled = true;

    // plan to reset isThrottled after the delay
    setTimeout(function () {
      isThrottled = false;
      if (savedArgs) {
        // if there were calls, savedThis/savedArgs have the last one
        // recursive call runs the function and sets cooldown again
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

const fetchingThrottle = throttle(fetchData, 500);
//* result of throttle:
// let int = setInterval(() => {
//   console.log('interval time 200');
//   fetchingThrottle(777);
// }, 200);

// setTimeout(() => {
//   clearInterval(int);
// }, 3000);
