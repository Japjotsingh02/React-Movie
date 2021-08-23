import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import { Image } from "./Thumb.style";

const Thumb=({image, movieId,clickAble})=>(
    <div>
    {clickAble ? (
        <Link to={`/${movieId}`}>
            <Image src={image} alt="movie-thumb"/>
        </Link>
    ) : (
        <Image src={image} alt="movie-thumb"/>
    )}
    </div> 
);

Thumb.propTypes={
    image:PropTypes.string,
    movieId:PropTypes.number,
    clickAble:PropTypes.bool,
}

export default Thumb;