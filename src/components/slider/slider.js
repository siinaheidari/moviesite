import React, {useEffect, useState} from 'react';
import "./carousel.scss"
import {Link} from "react-router-dom";
import axios from "axios";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';

const Slider = () => {
    const [sliders, setSliders] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
            axios.get("https://api.themoviedb.org/3/movie/popular?api_key=52b33e11a515541a13e265b567d5b8be&language=en-US&page=1")
                .then(response => {
                    setLoading(true)
                    setTimeout(() => {
                        setSliders(response.data.results)
                        setLoading(false)
                        console.log(response.data.results)
                    }, 3000)
                })
                .catch(err => {
                    console.log(err)
                })
    }, []);

    return (
        <div className={"carousel"}>
            <Fade>
                {!loading &&  sliders.length>0?
                    sliders.map(slider => {
                        return <Link to={`/movies/${slider.id}`} key={slider.id}>
                            <div className={"back-img "} style={{
                                backgroundImage: `url(https://image.tmdb.org/t/p/original//${slider.backdrop_path})`
                            }}>
                            </div>
                            <div className={"baby-slider"}>
                                <img src={"https://image.tmdb.org/t/p/original" + slider.poster_path} alt=""/>
                            </div>
                        </Link>
                    }) : <div className="cards">
                        <SkeletonTheme color="red" highlightColor="#444">
                            <Skeleton className={"skeleton-slider"}/>
                        </SkeletonTheme>
                    </div>
                }
            </Fade>
        </div>
    );
};

export default Slider;
