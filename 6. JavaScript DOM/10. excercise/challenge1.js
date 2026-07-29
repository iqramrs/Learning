const h1text = document.querySelector('#title');
const button = document.querySelector('#btn');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    h1text.textContent = "Button Clicked";
    const newList = document.createElement('li');
    newList.textContent = "Item added";
    list.append(newList);
});