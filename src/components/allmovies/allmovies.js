import React, {useContext, useEffect, useState} from 'react';
import {Pagination} from "@mui/material";
import axios from "axios";
import {Link} from "react-router-dom";
import "./allmovies.scss"
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import Vertical from "../skeleton/vertical skeleton";
import Slider from "../slider/slider";


const AllMovies = () => {
    const [allMovies, setAllMovies] = useState([]);
    const [page, setPage] = useState([1]);
    const [loading, setLoading] = useState(false);
    const [option, setOption] = useState();

    useEffect(() => {
        if (option === undefined || option === "popular") {
            axios.get(` https://api.themoviedb.org/3/movie/popular?api_key=4e4e139bc1828f7b1070fca1cecfbf74&language=en-US&page=${page}`)
                .then(response => {
                    setLoading(true)
                    setTimeout(() => {
                        setLoading(false)
                        setAllMovies(response.data.results)
                    }, 3000)
                    console.log(response.data.results)
                })
                .catch(err => {
                    alert("poor connection")
                })
        } else if (option === "top_rated") {
            axios.get(` https://api.themoviedb.org/3/movie/top_rated?api_key=4e4e139bc1828f7b1070fca1cecfbf74&language=en-US&page=${page}`)
                .then(response => {
                    setLoading(true)
                    setTimeout(() => {
                        setLoading(false)
                        setAllMovies(response.data.results)
                    }, 3000)
                    console.log(response.data.results)
                })
                .catch(err => {
                    alert("poor connection")
                })
        } else if (option === "upcoming") {
            axios.get(` https://api.themoviedb.org/3/movie/upcoming?api_key=4e4e139bc1828f7b1070fca1cecfbf74&language=en-US&page=${page}`)
                .then(response => {
                    setLoading(true)
                    setTimeout(() => {
                        setLoading(false)
                        setAllMovies(response.data.results)
                    }, 3000)
                    console.log(response.data.results)
                })
                .catch(err => {
                    alert("poor connection")
                })
        }
    }, [page, option]);
    console.log(option)


    const handlePaginationChange = (page) => {
        setPage(page);
        window.scroll(0, 0)
    }


    return (
        <>
            <div className={"allmovies-slider"}>
                <Slider/>
            </div>
            <div className={"allmovies"}>
                <div className={"category"}>
                    <h1>All sinaflix movies</h1>
                    <select value={option} onChange={e => setOption(e.target.value)}>
                        <option disabled>category</option>
                        <option value={"popular"}>popular</option>
                        <option value={"top_rated"}>top rated</option>
                        <option value={"upcoming"}>upcoming</option>
                    </select>
                </div>

                <div className={"allmovies-container"}>
                    {!loading && allMovies.length > 0 ?
                        allMovies.map((allMovie) =>
                            <div className={"allmovies-list"} key={allMovie.id}>
                                <div className={"vote"} key={allMovie.id}>
                                    <Link to={`/allmovies/${allMovie.id}`}>
                                        {allMovie.backdrop_path ?
                                            <img src={"https://image.tmdb.org/t/p/original" + allMovie.backdrop_path}
                                                 alt=""/>
                                            :
                                            <img src={"https://image.tmdb.org/t/p/original" + allMovie.poster_path}
                                                 alt=""/>
                                        }
                                        <span>
                                              <CircularProgressbar className={"allMovie-progress"}
                                                                   value={(allMovie.vote_average * 10).toFixed(0)}
                                                                   text={`${(allMovie.vote_average * 10).toFixed(0)}%`}
                                                                   background={true}
                                                                   strokeWidth={11}
                                                                   styles={buildStyles({
                                                                       pathColor: allMovie.vote_average < 7 ? "red" : "" ||
                                                                       allMovie.vote_average >= 7 && allMovie.vote_average < 7.8 ? "orange" : "" ||
                                                                       allMovie.vote_average >= 7.8 ? "green" : "",
                                                                       trailColor: '#303315',
                                                                       textColor: '#FFFFFF',
                                                                       textSize: "33px",
                                                                       strokeLinecap: "butt",
                                                                       backgroundColor: "#081C22",
                                                                   })}/>
                                      </span>
                                    </Link>
                                </div>
                                <div className={"allmovies-title"}>
                                    <h4>{allMovie.title}</h4>
                                    <p>{allMovie.release_date}</p>
                                </div>
                            </div>
                        ) : <Vertical/>

                    }
                </div>
                {
                    <div className={"pagination"}>
                        <Pagination count={16} shape="rounded" color={"primary"}
                                    onChange={(e) => handlePaginationChange(e.target.textContent)}/>
                    </div>
                }
            </div>
        </>
    );
};

export default AllMovies;
