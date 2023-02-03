import React, {useEffect, useState} from 'react';
import "./people.scss"
import axios from "axios";
import LoadingEffect from "../skeleton/skeleton";
import PeopleList from "./peoplelist";

const People = () => {
    const [peoples, setPeoples] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
            axios.get("https://api.themoviedb.org/3/person/popular?api_key=52b33e11a515541a13e265b567d5b8be&language=en-US&page=1")
                .then(response => {
                    setLoading(true)
                    setTimeout(() => {
                        setPeoples(response.data.results)
                        setLoading(false)
                    }, 3000)
                    console.log(response.data.results)
                })
                .catch(err => {
                    console.log(err)
                })
    }, []);

    return (
        <div className={"people-container"} data-aos="fade-zoom-in">
            <h2>Popular Actors</h2>
            <div className={'people'} data-aos="ease-in-sine">
                {!loading && peoples.length > 0 ?
                    peoples.map(people => {
                        return <PeopleList key={people.id} people={people} loading={loading}/>
                    }) : <LoadingEffect/>
                }
            </div>
        </div>
    );
};

export default People;
