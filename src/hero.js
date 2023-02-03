import React from 'react';
import Slider from "./components/slider/slider";
import Movies from "./components/movies/movies";
import TopRated from "./components/trending/top";
import People from "./components/people/people";



const Hero = () => {
    return (
        <div>
            <Slider/>
            <Movies/>
            <TopRated/>
            <People/>
        </div>
    );
};

export default Hero;
