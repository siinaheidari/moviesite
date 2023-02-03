import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Movies from "./components/movies/movies";
import {CartProvider, MovieProvider} from "./components/context/moviecontext";
import Detail from "./components/detail/deatil";
import ActorsList from "./components/actors/actorlist";
import Cart from "./components/cart/cart";
import AllMovies from "./components/allmovies/allmovies";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Hero from "./hero";

function App() {
    return (
        <div className="App">
           <BrowserRouter>
               <CartProvider>
                   <MovieProvider>
                       <Header/>
                       <Routes>
                           <Route path="/*" element={<Hero/>}/>
                           <Route path={"/movies/:id"} element={<Detail/>}/>
                           <Route path="/allmovies" element={<AllMovies/>}/>
                           <Route path="/allmovies/:id" element={<Detail/>}/>
                           <Route path={"/tv/:id"} element={<Detail/>}/>
                           <Route path={"/actors/:id"} element={<ActorsList/>}/>
                           <Route path={"/cart"} element={<Cart/>}/>
                       </Routes>
                       <Footer/>
                   </MovieProvider>
               </CartProvider>
           </BrowserRouter>
        </div>
    );
}

export default App;
