import React, {useState} from 'react';
import axios from "axios";
import "./search.scss"
import SearchList from "./searchlist";
import CloseIcon from '@mui/icons-material/Close';
import {CircularProgress} from "@mui/material";

const SearchMovies = ({handleSearch}) => {
    const [newMovies, setNewMovies] = useState([]);
    const [search, setSearch] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get("https://api.themoviedb.org/3/search/multi?api_key=52b33e11a515541a13e265b567d5b8be&language=en-US&page=1&query=" + search)
            .then(response => {
                setNewMovies(response.data.results)
                console.log(response.data.results)
            })
            .catch(err => {
                console.log(err)
            })
        setSearch("")
    }

    return (
        <div className={"search"}>
            <div className={"search-items"}>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder={"Search for movies, person ..."}
                           value={search}
                           onChange={e => setSearch(e.target.value)}/>

                </form>
                <CloseIcon sx={{fontSize: "33px"}} color={"error"} onClick={handleSearch}/>
            </div>

            <div className={"search-movies"}>
                {
                newMovies.map(newMovie => {
                return <SearchList key={newMovie.id} newMovie={newMovie} handleSearch={handleSearch}/> })
                }
            </div>

        </div>
    );
};

export default SearchMovies;
