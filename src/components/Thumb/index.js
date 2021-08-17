import React from "react";
import { Link } from "react-router-dom";

import { Image } from "./Thumb.style";

const Thumb=({image, movieId,clickAble})=>(
    <>
    {clickAble ? (
        <Link to={`/${movieId}`}>
            <Image src={image} alt="movie-thumb"/>
        </Link>
    ) : (
        <Image src={image} alt="movie-thumb"/>
    )}
    </> 
);

export default Thumb;