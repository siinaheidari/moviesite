import React from 'react';

const MovieList = ({title,poster_path,overview,vote_average}) => {
    return (
        <div className="movie">
            <img src={"https://image.tmdb.org/t/p/w500/" + poster_path} alt={title}/>
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={"vote"}>{vote_average}</span>
            </div>
            <div className="movie-over">
                <h2>overview:</h2>
                <p>{overview}</p>
            </div>
        </div>
    );
};

export default MovieList;
