import React, {useContext, useEffect, useState} from 'react';
import {CartContext} from "../context/moviecontext";
import "./cart.scss"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Swal from "sweetalert2";
import {Link} from "react-router-dom";


const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
    const [counter, setCounter] = useState(1);

    // const removeLocalStorage = (cart) => {
    //     localStorage.removeItem("add");
    // }

    //
    // useEffect(() => {
    //     return () => {
    //         const data = localStorage.getItem('add');
    //         if (data) {
    //             setCart(JSON.parse(data));
    //         }
    //     };
    // }, []);

    const deleteItems = (id) => {
        // setCart(cart.filter((cart) => cart.id !== id))
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(() => {
            if (setCart(cart.filter((cart) => cart.id !== id))) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
        // removeLocalStorage()
    }
    useEffect(() => {
        localStorage.setItem('add2', JSON.stringify(cart))
    }, [cart]);

    const totalPrice = cart.reduce((prevValue, currValue) => {
        return prevValue + currValue.popularity
    }, 0)

    const round = Math.round(totalPrice)

    return (
        <div className={"cart1"}>
            <div className={"cart-list"}>
                <div className={"cart-container"}>
                    {
                        cart.length === 0 ? <h3>): No Movies Added Yet</h3> :
                            cart.map((cart) =>

                                <div className={"cart-list2"}>
                                    <Link to={`/movies/${cart.id}`}>
                                        <div className={"img"}>
                                            <img src={"https://image.tmdb.org/t/p/original" + cart.poster_path} alt=""/>
                                        </div>
                                    </Link>
                                    <div className={"title-container2"}>
                                        <Link to={`/movies/${cart.id}`}>
                                            <div className={"title"}>
                                                <h2>{cart.title}</h2>
                                            </div>
                                        </Link>
                                        <div className={"counter"}>
                                            <AddIcon sx={{color: "black", fontSize: "28px"}}
                                                     onClick={() => setCounter(counter + 1)}/>
                                            <h2>{counter}</h2>
                                            <RemoveIcon sx={{color: "black", fontSize: "28px"}}
                                                        onClick={() => setCounter(counter - 1)}/>
                                        </div>
                                        <div className={"popularity"}>
                                            <p>{`${cart.popularity}$`}</p>
                                        </div>
                                        <div className={"icon"}>
                                            <DeleteOutlineIcon sx={{color: "crimson", fontSize: "32px"}}
                                                               onClick={() => deleteItems(cart.id)}/>
                                        </div>
                                    </div>
                                </div>
                            )}
                </div>
                <div className={"price"}>
                    <h2>Total Price : {round}$</h2>
                  <a href={"https://www.instagram.com/siinaheidari"} target={"_blank"}><button>Pay Money</button></a>
                </div>
            </div>
        </div>
    );
};

export default Cart;
