// function to change the background color after a delay using promises
const backgroundChanger = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    });
}

backgroundChanger('red', 1000)
    .then(() => backgroundChanger('green', 1000))
    .then(() => backgroundChanger('blue', 1000))
    .then(() => backgroundChanger('yellow', 1000))
    .then(() => backgroundChanger('orange', 1000));