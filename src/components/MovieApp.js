import React from 'react';
import SearchBar from './SearchBar';
import Lottie from "lottie-react";
import loadingAnimation from "../lottie/loadingAnimation.json";
import { MovieList } from './MovieList';
import { useSelector } from 'react-redux';
import { Header } from './Header';
import { Footer } from './Footer';

const MovieApp=()=>{
    const loading = useSelector(state=>state.loading);
    const error = useSelector(state => state.error);
    return(
    <div className= "container">
        <Header/>
        <h3 style={{marginTop: 80}}>Title:</h3>
        
         <SearchBar/>

         {loading && <Lottie animationData={loadingAnimation} loop={true} style={{width: 200, height:200}} />}
         {error && <p>{error}</p>}

         <MovieList/>
         <Footer/>
    </div>);
}

export default MovieApp;