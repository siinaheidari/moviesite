import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import "./images.scss"
import LoadingEffect from "../../skeleton/skeleton";


const Images = () => {
    const [images, setImages] = useState([]);
    const [posters, setPosters] = useState([]);
    const [loading, setLoading] = useState(false);
    const [chosen1, setChosen1] = useState(true);
    const [chosen2, setChosen2] = useState(false);

    const {id} = useParams()

    useEffect(() => {
        return () => {
            axios.get(`https://api.themoviedb.org/3/movie/${id}/images?api_key=52b33e11a515541a13e265b567d5b8be`)
                .then(response => {
                    setLoading(true)
                    setTimeout(() => {
                        setImages(response.data.backdrops)
                        setLoading(false)
                    }, 3000)
                    console.log(response.data)
                }).catch(err => {
                console.log(err)
            })
        };
    }, []);

    useEffect(() => {
        return () => {
            axios.get(`https://api.themoviedb.org/3/movie/${id}/images?api_key=52b33e11a515541a13e265b567d5b8be`)
                .then(response => {
                    setLoading(true)
                    setTimeout(() => {
                        setPosters(response.data.posters)
                        setLoading(false)
                    }, 3000)
                    console.log(response.data)
                }).catch(err => {
                console.log(err)
            })
        };
    }, []);

    useEffect(() => {
        return () => {
            axios.get(`https://api.themoviedb.org/3/tv/${id}/images?api_key=52b33e11a515541a13e265b567d5b8be`)
                .then(response => {
                    setLoading(true)
                    setTimeout(() => {
                        setPosters(response.data.posters)
                        setLoading(false)
                    }, 3000)
                    console.log(response.data)
                }).catch(err => {
                console.log(err)
            })
        };
    }, []);

    useEffect(() => {
        return () => {
            axios.get(`https://api.themoviedb.org/3/tv/${id}/images?api_key=52b33e11a515541a13e265b567d5b8be`)
                .then(response => {
                    setLoading(true)
                    setTimeout(() => {
                        setImages(response.data.backdrops)
                        setLoading(false)
                    }, 3000)
                    console.log(response.data)
                }).catch(err => {
                console.log(err)
            })
        };
    }, []);

    const handleChosen1 = () => {
        setChosen1(!chosen1)
        setChosen2("")
    }
    const handleChosen2 = () => {
        setChosen2(!chosen2)
        setChosen1("")
    }

    return (
        <div className={"images"}>
            <div className={"images-container"} >
                <div className={"movies-title"}>
                    <h2>Media</h2>
                    <div className={"chosen-title2"}>
                        <button className={chosen1 ? "movie-button-active" : "movie-button-not-active"}
                                onClick={handleChosen1}>Wallpapers<span> {images.length}</span>
                        </button>
                        <button className={chosen2 ? "tv-button-active" : "tv-button-not-active"}
                                onClick={handleChosen2}>Posters<span> {posters.length}</span>
                        </button>
                    </div>
                </div>
                <div className={chosen1 ? "movies" : "hide-movies"} data-aos="fade-up">
                    {!loading ?
                        images.map((image, index) =>
                            <div className={"images-list"} key={index}>
                                <img src={"https://image.tmdb.org/t/p/original" + image.file_path} alt=""
                                     key={image.id}/>
                            </div>) : <LoadingEffect/>
                    }
                    {images.length ===0 ? <h3>Nothings Found</h3> : ""}
                </div>
                <div className={chosen2 ? "tv" : "hide-tv"}>
                    {!loading && posters.length > 0 ?
                        posters.slice(0, 10).map((poster, index) =>
                            <div className={"movies-list"} key={index}>
                                <img src={"https://image.tmdb.org/t/p/original" + poster.file_path} alt=""
                                     width={"180px"}/>
                            </div>
                        ) : <LoadingEffect/>
                    }
                </div>
            </div>
        </div>
    );
};

export default Images;
