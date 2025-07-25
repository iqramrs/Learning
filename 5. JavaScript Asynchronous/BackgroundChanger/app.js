const delayedBackgroundChanger = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

delayedBackgroundChanger('red', 1000)
    .then (() => delayedBackgroundChanger('blue', 1000))
    .then (() => delayedBackgroundChanger('green', 1000))
    .then (() => delayedBackgroundChanger('yellow', 1000))
    .then (() => delayedBackgroundChanger('purple', 1000));

