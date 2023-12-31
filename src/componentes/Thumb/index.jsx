import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
//Styles
import { Image } from "./Thumb.styles";

const Thumb = ({ image, movieID, clickable}) => (
    <div>
        {clickable ? (
            <Link to={`/${movieID}`} >
              <Image src={image} alt="movie-thumb" />  
            </Link>
        ) : (
            <Image src={image} alt="movie-thumb" /> 
         )}     
    </div>
);

Thumb.propTypes = {
    image: PropTypes.string,
    movieID: PropTypes.number,
    clickable: PropTypes.bool, 
};

export default Thumb;