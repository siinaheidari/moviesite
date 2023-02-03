import React from 'react';
import {Link} from "react-router-dom";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";

const TopMovieList = ({topMovie}) => {
    return (
        <>
            {
                <div className={"trending-list"}>
                    <Link to={`/movies/${topMovie.id}`}>
                        <div className={"vote"}>
                            <img src={"https://image.tmdb.org/t/p/original" + topMovie.backdrop_path} alt=""/>
                            <span>
                            <CircularProgressbar className={"allMovie-progress"}
                                                 value={(topMovie.vote_average * 10).toFixed(0)}
                                                 text={`${(topMovie.vote_average * 10).toFixed(0)}%`}
                                                 background={true}
                                                 strokeWidth={11}
                                                 styles={buildStyles({
                                                     pathColor: topMovie.vote_average < 7 ? "red" : "" ||
                                                     topMovie.vote_average >= 7 && topMovie.vote_average < 7.8 ? "orange" : "" ||
                                                     topMovie.vote_average >= 7.8 ? "green" : "",
                                                     trailColor: '#303315',
                                                     textColor: '#FFFFFF',
                                                     textSize: "33px",
                                                     strokeLinecap: "butt",
                                                     backgroundColor: "#081C22",
                                                 })}
                            />
                         </span>
                        </div>
                        <div className={"title-container"}>
                            <h4>{topMovie.title}</h4>
                            <h4>{topMovie.name}</h4>
                            <p>{topMovie.release_date}</p>
                        </div>
                    </Link>
                </div>
            }
        </>
    );
};

export default TopMovieList;
