const button = document.querySelector('#btn');
const jokes = document.querySelector('#jokes');

const addJoke = async () => {
    const jokeText = await getJokes();
    const newLI = document.createElement('li');
    newLI.append(jokeText);
    jokes.append(newLI);
};

const getJokes = async () => {
    try {
        const config = {
            headers: {
                Accept: 'application/json',
            },
        };
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;
    } catch (error) {
        return error.message;
    }
};

button.addEventListener('click', () => {
    while (jokes.childElementCount > 0) {
        jokes.removeChild(jokes.lastElementChild);
    }
    addJoke();
});