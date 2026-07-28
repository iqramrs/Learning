const container = document.querySelector('#container');
const button = document.querySelector('#changeColor');

button.addEventListener('click', function (evt) {
    container.style.backgroundColor = generateRandomColor();
    evt.stopPropagation(); // Stops the event from bubbling up to the container
});

container.addEventListener('click', function () {
    container.classList.toggle('hide');
    console.log('Container clicked');
});

const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
};
