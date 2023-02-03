import React, {useEffect, useState} from 'react';
import "./actorslist.scss"
import {useParams} from "react-router-dom";
import axios from "axios";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import LoadingEffect from "../skeleton/skeleton";
import {Fade} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const ActorsList = () => {

    const [actorList, setActorList] = useState([]);
    const [credits, setCredits] = useState([]);
    const [image, setImage] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isReadMore, setIsReadMore] = useState(true);
    const {id} = useParams()

    useEffect(() => {

            axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=52b33e11a515541a13e265b567d5b8be&language=en-US`)
                .then(response => {
                    // setLoading(true)
                    setTimeout(() => {
                        setActorList(response.data)
                        setLoading(true)
                    }, 3000)
                    console.log(response.data)
                }).then(error => {
                console.log(error)
            })

    }, [])

    useEffect(() => {
            axios.get(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=52b33e11a515541a13e265b567d5b8be&language=en-US`)
                .then(response => {
                    setTimeout(() => {
                        setCredits(response.data.cast)
                        setLoading(true)
                        console.log(response.data.cast)
                    }, 3000)
                }).then(error => {
                console.log(error)
            })

    }, [])

    useEffect(() => {
            axios.get(`https://api.themoviedb.org/3/person/${id}/images?api_key=52b33e11a515541a13e265b567d5b8be`)
                .then(response => {
                    setTimeout(() => {
                        setImage(response.data.profiles)
                        setLoading(true)
                        console.log(response.data.profiles)
                    }, 3000)
                }).then(error => {
                console.log(error)
            })
    }, [])

    const ReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (
        <div className={"actor"}>
            <div className={"actorList"}>
                <div className={"actors-carusel"}>
                    {loading ?
                        <Fade>
                            {
                                image.map((image) =>
                                    <img src={"https://image.tmdb.org/t/p/original" + image.file_path} alt={""}/>
                                )
                            }
                        </Fade>
                        :
                        <SkeletonTheme highlightColor="#444">
                            <Skeleton className={"skeleton-1"}/>
                        </SkeletonTheme>
                    }

                </div>
                <div className={"actor-overview"}>
                    <div className={"actor-title"}>
                        <div>
                            {
                                loading ?
                                    <div>
                                        <h1>{actorList.name}</h1>
                                        <p className={"p1"}>{actorList.known_for_department}</p>
                                    </div>
                                    :
                                    <SkeletonTheme highlightColor="#444">
                                        <Skeleton className={"skeleton-2"}/>
                                    </SkeletonTheme>
                            }

                        </div>
                        <div className={"baby-progress"}>
                            {
                                loading ?
                                    <div>
                                        <CircularProgressbar className={"progress"}
                                                             value={(actorList.popularity * 1).toFixed(1)}
                                                             text={`${(actorList.popularity * 1).toFixed(1)}%`}
                                                             background={true}
                                                             styles={buildStyles({
                                                                 pathColor: "#21D07A",
                                                                 trailColor: '#204529',
                                                                 textColor: '#FFFFFF',
                                                                 textSize: "25px",
                                                                 strokeLinecap: "butt",
                                                                 backgroundColor: "#081C22"
                                                             })}
                                        />
                                        <p>popularity</p>
                                    </div> :
                                    <SkeletonTheme highlightColor="#444">
                                        <Skeleton circle={true} height={75} width={75}/>
                                    </SkeletonTheme>
                            }

                        </div>
                    </div>
                    <div className={"biography"}>
                        <h2>Biography</h2>
                        {
                            loading ?
                                <p className={"overview-p2"}>
                                    {isReadMore ? actorList.biography.slice(0, 270) : actorList.biography}
                                    <span onClick={ReadMore} className="read-or-hide">
                                             {isReadMore ? " ...show more" : " show less"}
                                        </span>
                                </p>
                                :
                                <SkeletonTheme highlightColor="#444">
                                    <Skeleton count={5} className={"skeleton-3"}/>
                                </SkeletonTheme>
                        }

                    </div>
                    <div className={"credit-container"}>
                        <h2>Videos</h2>
                        <div className={"credit"}>
                            {loading ?
                                credits.slice(0, 30).map((credit,index) =>
                                    <div className={"credit-list"} key={index}>
                                        <a href={`/movies/${credit.id}`}>
                                            <div className={"vote"} >
                                                <img src={"https://image.tmdb.org/t/p/w500/" + credit.poster_path}
                                                     alt=""/>
                                                <span
                                                    className={(credit.vote_average) <= 7 ? "bad-vote" : "" ||
                                                    credit.vote_average > 7 && credit.vote_average < 7.8 ? "medium-vote" : "" ||
                                                    credit.vote_average >= 7.8 ? "good-vote" : ""
                                                    }>  {(credit.vote_average).toFixed(1)}</span>
                                            </div>
                                            <div className={"credit-title"}>
                                                <h4>{credit.title}</h4>
                                                <p>{credit.release_date}</p>
                                            </div>
                                        </a>
                                    </div>
                                ) : <LoadingEffect/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActorsList;
