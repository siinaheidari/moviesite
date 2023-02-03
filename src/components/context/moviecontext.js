import {createContext, useState} from "react";

export const MovieContext = createContext();
export const MovieProvider = (props) => {

    const [movies, setMovies] = useState([]);
    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}

export const CartContext = createContext();
export const CartProvider = (props) => {
    const Add = JSON.parse(localStorage.getItem('add2')) || [];
    const [cart, setCart] = useState(Add);
    return (
        <CartContext.Provider value={[cart, setCart]}>
            {props.children}
        </CartContext.Provider>
    )
}