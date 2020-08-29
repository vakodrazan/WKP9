const container = document.querySelector('.container');


async function fetchMovies(query) {
    // fetch the data
    const movieData = await fetch("https://ghibliapi.herokuapp.com/films");
    // convert it into object
    const data = movieData.json();
    console.log(data);
    return data; // return the data
}

async function fetchMovieAndDisplay(query) {
    // call the function and wait for it to served
    const movies = await fetchMovies(query);
    console.log(movies)
    // Sort the movies from the higher score to the least
    movies.sort(function(a, b) {
        return b.rt_score - a.rt_score;
    });
    // then display that value so that the value will turn into an html
    displayMovieList(movies);
    
}


function displayMovieList(movies) {
    console.log('Movie list', movies)
    // map through the list of film then create an html file for that
    const html = movies.map(movie => {
        return `
            <article class="movie" id="${movie.id}">
                <header>
                    <h3>${movie.title}</h3>
                    <time datetime="${movie.release_date}">${movie.release_date}</time>
                    <small>${movie.rt_score}</small>
                </header>
                <p class="description">${movie.description}</p>
                <div class="crew">
                    <span>${movie.director}</span>
                    <span>${movie.producer}</span>
                </div>
            </article>
        `;
    }).join("");
    // append it inside of the div container in the html file 
    container.innerHTML = html;
}

fetchMovieAndDisplay();
