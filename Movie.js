import React, { useEffect, useState } from 'react';

function Movie() {
    const [movies, setMovies] = useState([])
    
    async function fetchFilm() {
        const response = await fetch("https://ghibliapi.herokuapp.com/films");
        const data = await response.json();
        setMovies(data)
    }

    useEffect(() => {
        fetchFilm();
    })
    
    // console.log(movies);
    // const container = document.querySelector('.container');

    return (
        movies.map(movie => {
            return (
                <article className="movie" key={movie.id}>
                    <header>
                        <h3>{movie.title}<small className="text_small">{movie.release_date}</small></h3>
                    </header>
                    <p>Movie</p>
                    <p className="score">{movie.rt_score}</p>
                    <p className="director">{movie.description}</p>
                    <p>Movie</p>
                </article>
            )
    }))

}



// async function fetchFilm() {
//     const response = await fetch(endpoint);
//     const data = await response.json();
//     return data;
// }

// async function populateMovie() {
//     // get the data
//     const movies = await fetchFilm();
//     // sort the data
//     const sortedMovie = movies.sort((a, b) => b.rt_score - a.rt_score);
//     const html = sortedMovie.map(movie => {
//         return `
//             <article class="movie">
//                 <header>
//                     <h3>${movie.title} <small class="text_small">${movie.release_date}</small></h3>
//                 </header>
//                 <p>${movie.description}</p>
//                 <p class="score">${movie.rt_score}</p>
//                 <p class="director">${movie.director}</p>
//                 <p>${movie.producer}</p>
//             </article>
//         `
//     }).join('');
//     container.innerHTML = html;
// }

// populateMovie();


export default Movie;