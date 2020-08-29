const container = document.querySelector('.container');

async function fetchMovies(query) {
    const movieData = await fetch("https://ghibliapi.herokuapp.com/films");
    const data = movieData.json();
    return data;
    
}

async function fetchMovieAndDisplay(query) {
    const movies = await fetchMovies(query);
    console.log(movies)

}

fetchMovieAndDisplay();
