import React, {useEffect, useState} from 'react';
import "./top.scss"
import axios from "axios";
import MoviesList from "../movies/movieslist";
import LoadingEffect from "../skeleton/skeleton";
import TopMovieList from "./toplist";
import {Link} from "react-router-dom";

const TopRated = () => {
    const [topMovies, setTopMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
            axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=52b33e11a515541a13e265b567d5b8be")
                .then(response => {
                    setLoading(true)
                    setTimeout(() => {
                        setTopMovies(response.data.results)
                        setLoading(false)
                    }, 3000)
                    console.log(response.data.results)
                })
                .catch(err => {
                    console.log(err)
                })
    }, []);

    return (
        <div className={"top-container"} data-aos="fade-zoom-in">
            <h2>Trending</h2>
            <div className={'trending'} data-aos="ease-in-sine">
                {!loading && topMovies.length > 0 ?
                    topMovies.map(topMovie => {
                        return <TopMovieList key={topMovie.id} topMovie={topMovie} loading={loading}/>
                    }) : <LoadingEffect/>
                }
            </div>
        </div>
    );
};

export default TopRated;
