import React, {useEffect, useState} from 'react';
import axios from "axios";
import MovieList from "./moviellist";


const Movie = () => {

    const [movies, setMovies] = useState([]);
    const [searchItem, setSearchItem] = useState("");

    useEffect(() => {
        axios.get(
            "https://api.themoviedb.org/3/movie/upcoming?api_key=4e4e139bc1828f7b1070fca1cecfbf74&language=en-US&page=1")
            .then(response =>{
                console.log(response)
                setMovies(response.data.results)
            })
            .catch((err) => console.log(err))
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios("https://api.themoviedb.org/3/search/movie?&api_key=4e4e139bc1828f7b1070fca1cecfbf74&query=" + searchItem)
            .then(({data}) => {
                setMovies(data.results)
            })
        reset()
    }
    const reset = () => {
        setSearchItem('')
    }
    return (
        <span>
            <form className={"search"} onSubmit={handleSubmit}>
                <input className={"searchbar"}
                       type={"search"}
                       placeholder={"Search..."}
                       value={searchItem}
                       onChange={e => setSearchItem(e.target.value)}
                />
            </form>
                    <div className={"movie-container"}>
                        {
                            movies.map(movie=>{
                                return <MovieList key={movie.id} movies={...movie}/>
                            })
                        }

        </div>
        </span>
    );
};

export default Movie;

