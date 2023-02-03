import React, {useState} from 'react';
import {CircularProgress} from "@mui/material";


const SearchList = ({newMovie, handleSearch}) => {

    return (
        <>
                <div className={handleSearch ? "search-list" : "search-list-close"}>
                    {
                        newMovie.media_type === "movie" ?
                            <div>
                                <a href={`/movies/${newMovie.id}`} onClick={handleSearch}>
                                    <img src={"https://image.tmdb.org/t/p/w500/" + newMovie.poster_path} alt=""/>
                                    <h4>{newMovie.title}</h4>
                                    <p>{newMovie.release_date}</p>
                                </a>
                            </div> : ""
                    }
                    {
                        newMovie.media_type === "person" ?
                            <div>
                                <a href={`/actors/${newMovie.id}`} onClick={handleSearch}>
                                    <img src={"https://image.tmdb.org/t/p/w500/" + newMovie.profile_path} alt=""/>
                                    <h4>{newMovie.name}</h4>
                                </a>
                            </div> : ""
                    }
                    {
                        newMovie.media_type === "tv" ?
                            <div>
                                <a href={`/tv/${newMovie.id}`} onClick={handleSearch}>
                                    <img src={"https://image.tmdb.org/t/p/w500/" + newMovie.poster_path} alt=""/>
                                    <h4>{newMovie.name}</h4>
                                </a>
                            </div> : ""
                    }
                </div>
            </>
            );
            };

            export default SearchList;
