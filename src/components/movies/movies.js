import React, {useContext, useEffect, useState} from 'react';
import "./movies.scss"
import axios from "axios";
import {MovieContext} from "../context/moviecontext";
import MoviesList from "./movieslist";
import LoadingEffect from "../skeleton/skeleton";
import {Link} from "react-router-dom";
import TvList from "./tvlist";
import "./tv.scss"

const Movies = () => {

    const [movies, setMovies] = useContext(MovieContext);
    const [tv, setTv] = useState([]);
    const [loading, setLoading] = useState(true);
    const [chosen1, setChosen1] = useState(true);
    const [chosen2, setChosen2] = useState(false);

    useEffect(() => {
            axios.get(` https://api.themoviedb.org/3/movie/upcoming?api_key=52b33e11a515541a13e265b567d5b8be&language=en-US&page=1`)
                .then(response => {
                    setLoading(true)
                    setTimeout(() => {
                        setMovies(response.data.results)
                        setLoading(false)
                    }, 3000)
                    console.log(response.data.results)
                })
                .catch(err => {
                    console.log(err)
                })
    }, []);


    useEffect(() => {
            axios.get("https://api.themoviedb.org/3/tv/top_rated?api_key=52b33e11a515541a13e265b567d5b8be&language=en-US&page=1")
                .then(response => {
                    setLoading(true)
                    setTimeout(() => {
                        setTv(response.data.results)
                        setLoading(false)
                    }, 3000)
                    console.log(response.data.results)
                })
                .catch(err => {
                    console.log(err)
                })
    }, []);


    const handleChosen1 = () => {
        setChosen1(!chosen1)
        setChosen2("")
    }
    const handleChosen2 = () => {
        setChosen2(!chosen2)
        setChosen1("")
    }


    return (
        <>
            <div className={"movies-container"}>
                <div className={"movies-title"}>
                    <div className={"chosen-title"}>
                        <h2>What's Popular</h2>
                        <div className={"chosen-title2"}>
                            <button className={chosen1 ? "movie-button-active" : "movie-button-not-active"}
                                    onClick={handleChosen1}> Movies
                            </button>
                            <button className={chosen2 ? "tv-button-active" : "tv-button-not-active"}
                                    onClick={handleChosen2}>Series
                            </button>
                        </div>
                    </div>
                    <Link to={"/allmovies"}>
                        <button className={"view-all"}>View All</button>
                    </Link>
                </div>
                <div className={chosen1 ? "movies" : "hide-movies"}>
                    {!loading && movies.length > 0 ?
                        movies.map(movie => {
                            return <MoviesList key={movie.id} movie={movie} loading={loading}/>
                        }) : <LoadingEffect/>
                    }
                </div>
                <div className={chosen2 ? "tv" : "hide-tv"}>
                    {!loading && movies.length > 0 ?
                        tv.map(tv => {
                            return <TvList key={tv.id} tv={tv} loading={loading}/>
                        }) : <LoadingEffect/>
                    }
                </div>
            </div>
        </>
    );
};

export default Movies;