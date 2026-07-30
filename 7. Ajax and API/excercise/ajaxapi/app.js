const list = document.querySelector('#list');
const button = document.querySelector('#btn');

async function getTitles() {
    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts',
        );
        const data = await response.json();
        const userPost = data.filter((post) => post.userId === 1);
        const postTitles = userPost.map((post) => post.title);
        for (const title of postTitles) {
            const newlist = document.createElement('li');
            newlist.textContent = `${list.childElementCount + 1}. ${title}`;
            list.append(newlist);
        }
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

button.addEventListener('click', () => {
    while (list.childElementCount > 0) {
        list.removeChild(list.lastElementChild);
    }
    getTitles();
});