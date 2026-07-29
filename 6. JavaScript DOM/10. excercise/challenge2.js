const h1text = document.querySelector('#title');
const button = document.querySelector('#btn');
const list = document.querySelector('#list');

// let counter = 1;

button.addEventListener('click', () => {
    // Solution 1
    // const newList = document.createElement('li');
    // newList.textContent = `Item ${counter}`;
    // list.append(newList);
    // counter++;
    
    // Solution 2
    const newList = document.createElement('li');
    newList.textContent = `Item ${list.childElementCount + 1}`; // list.childElementCount gives the number of child elements in the list, so we can use it to determine the next item number.
    list.append(newList);

    if (h1text.textContent === 'Button Clicked') {
        h1text.textContent = 'Hello World';
    } else {
        h1text.textContent = 'Button Clicked';
    }
});
