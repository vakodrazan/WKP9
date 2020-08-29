const container = document.querySelector('.container');
const searchMovie = document.querySelector('input#search');
const resetBtn = document.querySelector('button.reset');

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

// Create a function that will contains all the html so that I can use it again later
const movieList = listOfMovie => {
    // map through the list of film then create an html file for that
    return listOfMovie.map(movie => {
        return `
            <article class="movie" id="${movie.id}">
                <header>
                    <div class="heading">
                        <h3>${movie.title}</h3>
                        <time datetime="${movie.release_date}"><strong>Released date:</strong> ${movie.release_date}</time>
                    </div>
                    
                    <span><strong>Score:</strong> ${movie.rt_score}</span>
                </header>
                <p class="description">${movie.description}</p>
                <div class="crew">
                    <span class="director"><strong>Director:</strong> ${movie.director}</span>
                    <span><strong>Producer:</strong> ${movie.producer}</span>
                </div>
            </article>
        `;
    }).join("");

}


function displayMovieList(movies) {
    // Call the function that I used before but use the parameter in it
    const listOfMovies = () => {
        const html = movieList(movies);
        // append it inside of the div container in the html file 
        container.innerHTML = html;
    }

    listOfMovies();


    // nest a function that will the list when the user search for it
    const searchInput = () => {
        const input = searchMovie.value;
        const searchByTitle = movies.filter(movie => movie.title.toLowerCase().includes(input.toLowerCase()));
        // recall the function for the html using the filter variables as a parameter
        const myHtml = movieList(searchByTitle);
        container.innerHTML = myHtml;
    }

    // reset the filter list
    const handleResetBtn = () => {
        listOfMovies();
    }
    resetBtn.addEventListener('click', handleResetBtn);

    // listen to a search event
    searchMovie.addEventListener('input', searchInput);
}


fetchMovieAndDisplay();

