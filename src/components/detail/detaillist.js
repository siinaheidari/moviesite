import React, {useContext, useEffect, useState} from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Swal from "sweetalert2";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import YouTube from "react-youtube";
import CloseIcon from '@mui/icons-material/Close';
import {CartContext} from "../context/moviecontext";

const DetailList = ({detail, loading, trailer}) => {

    const [cart, setCart] = useContext(CartContext);
    const [open, setOpen] = useState(false);
    const [isReadMore, setIsReadMore] = useState(true);

    const addToCart = () => {
        setCart([...cart, detail])
        Swal.fire({
            icon: 'success',
            text: 'Item Added successfully',
        }).then()
    }

    useEffect(() => {
        localStorage.setItem('add2', JSON.stringify(cart))
    }, [cart]);

    const handleTrailer = () => {
        setOpen(!open)
    }

    const ReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    const opts = {
        height: '390',
        width: "100%",
    };
    return (
        <>
            <div className={"detail-list"}>
                <div className={"back-img "}
                     style={{
                         backgroundImage: `url(https://image.tmdb.org/t/p/original//${detail.backdrop_path})`
                     }}>
                </div>
                <div className={"baby-img"}>
                    <img src={"https://image.tmdb.org/t/p/original" + detail.poster_path} alt=""/>
                </div>
                <div className={open ? "close-info" : "info"}>
                    {loading ?
                        <h1>{detail.original_title || detail.name}</h1>
                        : <div className={"skeleton-container"}>
                            <SkeletonTheme color="red" highlightColor="#444">
                                <Skeleton className={"skeleton-title"}/>
                            </SkeletonTheme></div>
                    }
                    <div>
                        {loading ?
                            <div className={"baby-info"}>
                                <p>{detail.release_date}</p>
                                <p>{detail.runtime}min</p>
                            </div>
                            : <div className={"skeleton-container"}>
                                <SkeletonTheme color="red" highlightColor="#444">
                                    <Skeleton className={"skeleton-baby-info"}/>
                                </SkeletonTheme></div>
                        }
                    </div>
                    <span className={"desc"}>
                        {
                            loading ?
                                <div className={"overview"}>
                                    <p className={"overview-p1"}>{detail.overview}</p>
                                    <p className={"overview-p2"}>
                                        {isReadMore ? detail.overview.slice(0, 120) : detail.overview}
                                        <span onClick={ReadMore} className="read-or-hide">
                                             {isReadMore ? " ...show more" : " show less"}
                                        </span>
                                    </p>
                                </div>
                                : <div className={"skeleton-container"}>
                                    <SkeletonTheme color="red" highlightColor="#444">
                                        <Skeleton count={3} className={"skeleton-overview"}/>
                                    </SkeletonTheme>
                                </div>
                        }
                </span>
                    <div>
                        {
                            loading ?
                                <div className={"progressbar"}>
                                    <div className={"baby-progress"}>
                                        <CircularProgressbar className={"progress"}
                                                             value={(detail.vote_average * 10).toFixed(2)}
                                                             text={`${(detail.vote_average * 10).toFixed(1)}%`}
                                                             background={true}
                                                             strokeWidth={9}
                                                             styles={buildStyles({
                                                                 pathColor: "#21D07A",
                                                                 trailColor: '#204529',
                                                                 textColor: '#FFFFFF',
                                                                 textSize: "25px",
                                                                 strokeLinecap: "butt",
                                                                 backgroundColor: "#081C22"
                                                             })}
                                        />
                                        <p>Vote Average</p>
                                    </div>
                                    <div className={"baby-progress"}>
                                        <CircularProgressbar className={"progress"} value={detail.vote_count}
                                                             text={`${detail.vote_count}`}
                                                             maxValue={20000}
                                                             strokeWidth={9}
                                                             background={true}
                                                             styles={buildStyles({
                                                                 pathTransitionDuration: 5,
                                                                 pathColor: "#21D07A",
                                                                 trailColor: '#204529',
                                                                 textColor: '#FFFFFF',
                                                                 textSize: "25px",
                                                                 strokeLinecap: "butt",
                                                                 backgroundColor: "#081C22"
                                                             })}
                                        />
                                        <p>Vote Count</p>
                                    </div>

                                </div>
                                : <div className={"progressbar-container"}>
                                    <div>
                                        <SkeletonTheme highlightColor="#444">
                                            <Skeleton circle={true} height={85} width={85}/>
                                        </SkeletonTheme>
                                    </div>
                                    <div>
                                        <SkeletonTheme highlightColor="#444">
                                            <Skeleton circle={true} height={85} width={85}/>
                                        </SkeletonTheme>
                                    </div>
                                </div>
                        }
                    </div>
                    <div>
                        {loading ?
                            <div className={"buttons"}>
                                <button onClick={handleTrailer} className={"play"}>
                                    <PlayArrowIcon sx={{color: "black"}}/>
                                    <p>Play trailer</p>
                                    <ToastContainer/>
                                </button>
                                <button className={"more"} onClick={addToCart}>
                                    <AttachMoneyIcon color={"info"}/>
                                    <span>{detail.popularity}</span>
                                </button>
                            </div>
                            : <div className={"skeleton-list"}>
                                <SkeletonTheme highlightColor="#444">
                                    <Skeleton className={"skeleton1"}/>
                                </SkeletonTheme>

                                <SkeletonTheme color="red" highlightColor="#444">
                                    <Skeleton className={"skeleton1"}/>
                                </SkeletonTheme>

                            </div>
                        }
                    </div>

                </div>
                {trailer.length > 0 ?
                    trailer.slice(0).map((trailer, index) =>
                        <div className={open ? "trailer-modal-open" : "close-trailer"} key={index}>
                            <div className={"trailer-container"}>
                                <span> <CloseIcon onClick={handleTrailer} sx={{fontSize: "30px"}}/></span>
                                <div>
                                    <YouTube opts={opts} videoId={trailer.key}/>
                                </div>
                            </div>
                        </div>
                    ) :
                    <div className={open ? "trailer-modal-open" : "close-trailer"}>
                        <div className={"no-trailer"}>
                            <span> <CloseIcon color={"warning"} onClick={handleTrailer} sx={{fontSize: "30px"}}/></span>
                            <h3>No Trailer Available For This Movie !</h3>
                            <img src={"/img/recording.png"} alt={""}/>
                        </div>
                    </div>
                }
            </div>

        </>
    );
};

export default DetailList;
