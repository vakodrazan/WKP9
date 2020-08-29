const container = document.querySelector('.container');


async function fetchMovies(query) {
    // fetch the data
    const movieData = await fetch("https://ghibliapi.herokuapp.com/films");
    // convert it into object
    const data = movieData.json();
    return data;
    
}

async function fetchMovieAndDisplay(query) {
    // call the function and wait for it to served
    const movies = await fetchMovies(query);
    console.log(movies)
    // then display that value so that the value will turn into an html
    movies.sort(function(a, b) {
        return b.rt_score - a.rt_score;
    })
    displayMovieList(movies);
    
}


function displayMovieList(movies) {
    // loop through the list of film then create an html file for that
    const html = movies.map(movie => {
        return `
            <article class="movie" id="${movie.id}">
                <header>
                    <h3>${movie.title}</h3>
                    <small>${movie.release_date}</small>
                    <p>${movie.rt_score}</p>
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
