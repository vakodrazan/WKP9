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
    console.log("These are the movies list", movies)
}

fetchMovieAndDisplay();
