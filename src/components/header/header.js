import React, {useContext, useState} from 'react';
import "./header.scss"
import {Link} from "react-router-dom";
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import SearchMovies from "../search/search";
import Search from '@mui/icons-material/Search';
import {CartContext} from "../context/moviecontext";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Header = () => {

    const [searchModal, setSearchModal] = useState(false);
    const [cart, setCart] = useContext(CartContext);

    const handleSearch = () => {
        setSearchModal(!searchModal)
    }

    return (
        <div className={"navbar"}>
            <div className="container">
                <div className={"shopping-cart2"}>
                    <Link to={"/cart"}>
                        <AddShoppingCartIcon className="icon"/>
                        <span>{cart.length}</span>
                    </Link>
                </div>
                <div className="left">
                    <Link to={"/"}>
                        <img
                            src="/img/sinaflix.png"
                            alt=""
                        />
                    </Link>
                    <div className={"left-span"}>
                        <Link to={"/"}><span>Homepage</span></Link>
                        <Link to={"/"}> <span>Series</span></Link>
                        <Link to={"/"}> <span>Movies</span></Link>
                        <Link to={"/"}> <span>Watch Later</span></Link>
                    </div>
                </div>
                <div className="right">
                    <div className="icon">
                        <Search  onClick={handleSearch}/>
                    </div>

                    <div className={"shopping-cart"}>
                        <Link to={"/cart"}>
                            <AddShoppingCartIcon className="icon"/>
                            <span>{cart.length}</span>
                        </Link>
                    </div>

                    <div className="profile">
                        <div className="icon">
                        <ArrowDropDown/>
                        </div>
                        <div className="options">
                            <span>Register</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={searchModal ? "modal-open" : "modal-close"}>
                <div className={"modal"}>
                    <SearchMovies handleSearch={handleSearch}/>
                </div>
            </div>
        </div>
    );
};

export default Header;
