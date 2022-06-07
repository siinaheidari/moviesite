import React from 'react';
import Header from "./components/header";
import Movies from "./components/movies";
import Footer from "./components/footer";

const App = () => {
    return (
        <div>
            <Header/>
            <Movies/>
            <Footer/>
        </div>
    );
};

export default App;
