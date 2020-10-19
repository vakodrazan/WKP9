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

    const sortedMovie = movies.sort((a, b) => b.rt_score - a.rt_score);
    return (
        sortedMovie.map(movie => {
            return (
                <article className="movie" key={movie.id}>
                    <header>
                        <h3>{movie.title}</h3>
                        <small className="text_small">{movie.release_date}</small>
                    </header>
                    <p>{movie.description}</p>
                    <div className="movie__about">
                        <p className="score">{movie.rt_score}</p>
                        <p className="director">{movie.director}</p>
                    </div>
                    <footer>
                        <p className="desc">Movie</p>
                    </footer>
                </article>
            )
        })
    )

}

export default Movie;