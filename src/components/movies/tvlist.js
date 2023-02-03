import React from 'react';
import {Link} from "react-router-dom";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

const TvList = ({tv}) => {
    return (
        <>
            {
                <div className={"tv-list"}>
                    <Link to={`/tv/${tv.id}`}>
                        <div className={"vote"}>
                            {
                                tv.backdrop_path ? <div>
                                        <img src={"https://image.tmdb.org/t/p/original" + tv.backdrop_path} alt=""/>
                                    </div> :
                                    <div className={"img2"}>
                                        <img src={"https://image.tmdb.org/t/p/original" + tv.poster_path}
                                             alt=""/>
                                    </div>
                            }
                            <span>
                                <CircularProgressbar className={"allMovie-progress"}
                                                     value={(tv.vote_average * 10).toFixed(0)}
                                                     text={`${(tv.vote_average * 10).toFixed(0)}%`}
                                                     background={true}
                                                     strokeWidth={11}
                                                     styles={buildStyles({
                                                         pathColor: tv.vote_average < 7 ? "red" : "" ||
                                                         tv.vote_average >= 7 && tv.vote_average < 7.8 ? "orange" : "" ||
                                                         tv.vote_average >= 7.8 ? "green" : "",
                                                         trailColor: '#303315',
                                                         textColor: '#FFFFFF',
                                                         textSize: "33px",
                                                         strokeLinecap: "butt",
                                                         backgroundColor: "#081C22",
                                                     })}
                                />
                                </span>
                        </div>
                        <div className={"tv-title"}>
                            <div>
                                <h4>{tv.name}</h4>
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

export default TvList;
