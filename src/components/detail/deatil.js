import React, {useEffect, useState} from 'react';
import "./detail.scss"
import {useParams} from "react-router-dom";
import axios from "axios";
import DetailList from "./detaillist";

import Images from "./images/images";
import Recome from "../recommendation/recome";
import Footer from "../footer/footer";
import Actors from "../actors/actors";


const Detail = () => {
    const [details, setDetail] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [trailer, setTrailer] = useState([]);
    const [actors, setActors] = useState([]);


    const {id} = useParams()

    useEffect(() => {
            axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=52b33e11a515541a13e265b567d5b8be&language=en-US`)
                .then(response => {
                    setTimeout(() => {
                        setDetail(response.data)
                        setLoading(true)
                    }, 3000)
                    console.log(response.data)
                }).catch(err => {
                console.log(err)
            })

    }, []);

    useEffect(() => {

            axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=52b33e11a515541a13e265b567d5b8be&language=en-US`)
                .then(response => {
                    setTimeout(() => {
                        setDetail(response.data)
                        setLoading(true)
                    }, 3000)
                    console.log(response.data)
                }).catch(err => {
                console.log(err)
            })

    }, []);

    useEffect(() => {

            axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=52b33e11a515541a13e265b567d5b8be&language=en-US`)
                .then(response => {
                    setTimeout(() => {
                        setActors(response.data.cast)
                    }, 3000)
                    console.log(response.data.cast)
                }).catch(err => {
                console.log(err)
            })

    }, []);

    useEffect(() => {

            axios.get(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=52b33e11a515541a13e265b567d5b8be&language=en-US`)
                .then(response => {
                    setTimeout(() => {
                        setActors(response.data.cast)
                    }, 3000)
                    console.log(response.data.cast)
                }).catch(err => {
                console.log(err)
            })

    }, []);

    useEffect(() => {

            axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=52b33e11a515541a13e265b567d5b8be&language=en`)
                .then(response => {
                    setLoading2(true)
                    setTrailer(response.data.results)
                    setLoading2(false)
                    console.log(response.data.results)
                })
                .catch(err => {
                    console.log(err)
                })

    }, []);

    useEffect(() => {

            axios.get(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=52b33e11a515541a13e265b567d5b8be&language=en`)
                .then(response => {
                    setLoading2(true)
                    setTrailer(response.data.results)
                    setLoading2(false)
                    console.log(response.data.results)
                })
                .catch(err => {
                    console.log(err)
                })

    }, []);


    return (
        <div className={"detail"}>
            <div>
                <DetailList key={details.id} detail={details} trailer={trailer} setTrailer={setTrailer}
                            loading={loading}/>
                <Actors key={actors.id} actors={actors} loading={loading}/>
                <Images/>
            </div>
            <Recome/>
            <div>
                <Footer/>
            </div>
        </div>

    );
};

export default Detail;
