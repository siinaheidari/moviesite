import React from 'react';
import "./actors.scss"
import {Link} from "react-router-dom";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";

const Actors = ({actors, loading}) => {


    return (
        <div className={"actors"}>
            <h2>Actors</h2>
            <div className={"actors-container"} data-aos="fade-up">
                {loading && actors.length>0?
                    actors.slice(0, 30).map((actor) =>
                        <div className={"actors-list"} key={actor.id}>
                            <Link to={`/actors/${actor.id}`}>
                                <img src={"https://image.tmdb.org/t/p/original" + actor.profile_path} alt={""}/>
                               <div className={"actor-name"}>
                                   <p>{actor.name}</p>
                               </div>
                            </Link>
                        </div>
                    ) :
                    <div className={"actor-skeleton"}>
                        <SkeletonTheme highlightColor="#444">
                            <Skeleton count={4} inline={true} circle={true} height={75} width={75}/>
                        </SkeletonTheme>
                    </div>

                }

            </div>
        </div>

    );
};

export default Actors;
