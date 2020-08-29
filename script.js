const container = document.querySelector('.container');

async function fetchMovies(query) {
    const movieData = await fetch("https://ghibliapi.herokuapp.com/films");
    const data = movieData.json();
    return data;
    
}

async function fetchMovieAndDisplay(query) {
    const movies = await fetchMovies(query);
    console.log(movies)
    displayMovieList(movies);
}


function displayMovieList(movies) {
    const html = movies.map(movie => {
        return `
            <article class="movie" id="${movie.id}">
                <header>
                    <h3>${movie.title}</h3>
                    <small>${movie.release_date}</small>
                    <p>${movie.rt_score}</p>
                </header>
                <div>
                    <p>${movie.description}</p>
                </div>
                <div>
                    <span>${movie.director}</span>
                    <span>${movie.producer}</span>
                </div>
            </article>
        `;
    }).join("");

    container.innerHTML = html;
}

fetchMovieAndDisplay();
