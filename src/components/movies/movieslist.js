import React from 'react';
import 'react-loading-skeleton/dist/skeleton.css'
import {Link} from "react-router-dom";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

const MoviesList = ({movie}) => {

    return (
        <>
            {
                <div className={"movies-list"}>
                    <Link to={`/movies/${movie.id}`}>
                        <div className={"vote"}>
                            <img src={"https://image.tmdb.org/t/p/original" + movie.poster_path} alt=""/>
                            <span>
                                <CircularProgressbar className={"allMovie-progress"}
                                                     value={(movie.vote_average * 10).toFixed(0)}
                                                     text={`${(movie.vote_average * 10).toFixed(0)}%`}
                                                     background={true}
                                                     strokeWidth={11}
                                                     styles={buildStyles({
                                                         pathColor: movie.vote_average < 7 ? "red" : "" ||
                                                         movie.vote_average >= 7 && movie.vote_average < 7.8 ? "orange" : "" ||
                                                         movie.vote_average >= 7.8 ? "green" : "",
                                                         trailColor: '#303315',
                                                         textColor: '#FFFFFF',
                                                         textSize: "33px",
                                                         strokeLinecap: "butt",
                                                         backgroundColor: "#081C22",
                                                     })}
                                />
                                </span>
                        </div>
                        <div className={"movie-title"}>
                            <div>
                                <h4>{movie.title.slice(0,24)}</h4>
                                <p>{movie.release_date}</p>
                            </div>
                       <div>
                       </div>
                            <ThumbUpOffAltIcon/>
                        </div>
                    </Link>
                </div>
            }
        </>
    );
};
export default MoviesList;
