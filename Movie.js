import React from 'react';

function Movie() {
    const endpoint = `https://ghibliapi.herokuapp.com/films`;
    console.log(endpoint);
    // const container = document.querySelector('.container');

    return (
        <article className="movie">
            <header>
                <h3>Hello<small className="text_small">117</small></h3>
            </header>
            <p>Movie</p>
            <p className="score">Movie</p>
            <p className="director">Movie</p>
            <p>Movie</p>
        </article>
    )
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