import React from 'react';
import {Link} from "react-router-dom";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";

const PeopleList = ({people}) => {
    return (
        <>
            {
                <div className={"people-list"}>
                    <Link to={`/actors/${people.id}`}>
                        <div className={"vote"}>
                            <img src={"https://image.tmdb.org/t/p/original" + people.profile_path} alt=""/>

                        </div>
                        <div className={"title-container"}>
                            <h4>{people.name}</h4>
                        </div>
                    </Link>
                </div>
            }
        </>
    );
};

export default PeopleList;
