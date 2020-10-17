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
    const sortedMovie = movies.sort((a, b) => b.rt_score - a.rt_score);
    return (
        sortedMovie.map(movie => {
            return (
                <article className="movie" key={movie.id}>
                    <header>
                        <h3>{movie.title}<small className="text_small">{movie.release_date}</small></h3>
                    </header>
                    <p>{movie.description}</p>
                    <p className="score">{movie.rt_score}</p>
                    <p className="director">{movie.director}</p>
                    <p>Movie</p>
                </article>
            )
        })
    )

}

export default Movie;