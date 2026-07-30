const form = document.querySelector('#searchForm');
const container = document.querySelector('#result');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
        const keyword = form.elements.query.value.trim();
        if (keyword === '') {
            const errorMessage = document.createElement('p');
            errorMessage.innerText = 'Please enter a TV show name.';
            container.append(errorMessage);
            return;
        }

        container.innerHTML = '';

        console.log(keyword);


        const config = {
            params: { q: keyword },
        };

        const response = await axios.get(
            'https://api.tvmaze.com/search/shows',
            config,
        );
        render(response.data);
    } catch (error) {
        const errorMessage = document.createElement('p');
        errorMessage.innerText = 'Unable to load TV shows.';
        container.append(errorMessage);
        console.error(error);
    }
});

function render(shows) {
    if (shows.length === 0) {
        const noResults = document.createElement('p');
        noResults.innerText = 'No results found.';
        container.append(noResults);
        return;
    }

    const resultsCount = document.createElement('p');
    if (shows.length === 1) {
        resultsCount.innerText = `Found ${shows.length} result.`;
    } else {
        resultsCount.innerText = `Found ${shows.length} results.`;
    }
    container.append(resultsCount);

    for (let result of shows) {
        const show = result.show;
        const summary = document.createElement('p');

        const showContainer = document.createElement('div');
        showContainer.classList.add('show-container');

        const name = document.createElement('h2');
        name.innerText = show.name;
        showContainer.append(name);

        if (show.image) {
            const img = document.createElement('img');
            img.src = show.image.medium;
            showContainer.append(img);
        } else {
            const noImage = document.createElement('p');
            noImage.innerText = 'No image available';
            showContainer.append(noImage);
        }

        if (show.summary) {
            summary.innerHTML = show.summary;
            showContainer.append(summary);
        } else {
            summary.innerText = 'No summary available';
            showContainer.append(summary);
        }
        container.append(showContainer);
    }
}
