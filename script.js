async function fetchMovies(query) {
    const movieData = await fetch("https://ghibliapi.herokuapp.com/films");
    const data = movieData.json();
    console.log(data)
    return data;
    
}

fetchMovies();