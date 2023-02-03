import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import "./recome.scss"
import RecomeList from "./recomelist";
import 'react-loading-skeleton/dist/skeleton.css'
import LoadingEffect from "../skeleton/skeleton";

const Recome = () => {
    const [recomes, setRecomes] = useState([]);
    const [loading, setLoading] = useState(false);
    const {id} = useParams()

    useEffect(() => {

            axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=52b33e11a515541a13e265b567d5b8be&language=en-US&page=1`)
                .then(response => {
                    setTimeout(() => {
                        setRecomes(response.data.results)
                        setLoading(true)
                    }, 3000)
                    console.log(response.data.results)

                }).catch(err => {
                console.log(err)
            })

    }, []);

    useEffect(() => {

            axios.get(`https://api.themoviedb.org/3/tv/${id}/similar?api_key=52b33e11a515541a13e265b567d5b8be&language=en-US&page=1`)
                .then(response => {
                    setTimeout(() => {
                        setRecomes(response.data.results)
                        setLoading(true)
                    }, 3000)
                    console.log(response.data.results)

                }).catch(err => {
                console.log(err)
            })

    }, []);

    return (
        <div className={"full-recome"}>
            <div className={"recome-container"}>
                <h2>Recommendation</h2>
                <div className={"recome"}>
                    {loading?
                        recomes.map(recome => {
                            return <RecomeList key={recome.id} recome={recome}/>
                        }) : <LoadingEffect loading={loading} recom={recomes}/>
                    }
                    {
                        recomes.length > 1 ?"" : <h3 className={"no-recome"}>No recommendations found</h3>
                    }
                </div>
            </div>
        </div>

    );
};
export default Recome;

