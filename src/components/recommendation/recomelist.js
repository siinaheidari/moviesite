import React from 'react';
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";

const RecomeList = ({recome}) => {
    return (
        <>
            {
                <div className={"recome-list"} data-aos="fade-up">
                    <a href={`/movies/${recome.id}`}>
                        <div className={"vote"}>
                            <img src={"https://image.tmdb.org/t/p/w500/" + recome.poster_path} alt=""/>
                            <span>
                              <CircularProgressbar className={"allMovie-progress"}
                                                   value={(recome.vote_average * 10).toFixed(0)}
                                                   text={`${(recome.vote_average * 10).toFixed(0)}%`}
                                                   background={true}
                                                   strokeWidth={11}
                                                   styles={buildStyles({
                                                       pathColor: recome.vote_average < 7 ? "red" : "" ||
                                                       recome.vote_average >= 7 && recome.vote_average < 7.8 ? "orange" : "" ||
                                                       recome.vote_average >= 7.8 ? "green" : "",
                                                       trailColor: '#303315',
                                                       textColor: '#FFFFFF',
                                                       textSize: "33px",
                                                       strokeLinecap: "butt",
                                                       backgroundColor: "#081C22",
                                                   })}
                              />
                             </span>
                        </div>
                        <div className={"recome-title"}>
                            <h4>{recome.title.slice(0,24)||recome.name.title.slice(0,24)}</h4>
                            <p>{recome.release_date}</p>
                        </div>
                    </a>
                </div>

            }
        </>
    );
};

export default RecomeList;
