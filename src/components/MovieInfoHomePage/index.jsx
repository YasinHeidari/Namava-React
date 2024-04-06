import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ratingDecimal from "../../helpers/ratingdecimal";
import "./info.css";

const MovieInfoHomePage = ({ movie, buttonContent }) => {
  const [expanded, setExpanded] = useState(true); // Initially expanded

  useEffect(() => {
    // Reset expanded state when movie prop changes
    setExpanded(true);
  }, [movie]);

  const toggleHeight = () => {
    setExpanded(prevExpanded => !prevExpanded); // Toggle the expanded state
    console.log('Button clicked. Expanded:', !expanded);
  };

  if (!movie) {
    return null;
  }

  return (
    <div>
      {expanded && (
        <div className="containerMovieInfo" style={{ background: `url(https://image.tmdb.org/t/p/w300//${movie.backdrop_path}) left/cover` }}>
          <div className=" d-flex flex-column justify-center align-start gap-2 container-padding-2 col-6 h-100" style={{}} >
                <Link to="/" className="font-20 white-color">{movie.title || movie.name}</Link>
            
            <div className="d-flex justify-start align-center gap-2">
              <div className="d-flex justify-center align-center">
                <div>
                  <img src={require("../../images/IMDB.svg").default} alt="" />
                </div>
                <p className="white-color font-14">
                  {ratingDecimal(movie.vote_average)}
                </p>
              </div>
              <div className="d-flex justify-center align-center">
                <div>
                  <img src={require("../../images/subScript.svg").default} alt="" />
                </div>
                <p className="white-color font-12"> زیرنویس </p>
              </div>
              <div className="d-flex justify-center align-center">
                <p className="white-color font-12">
                  { movie.release_date.substring(0, 4)}
                </p>
              </div>
            </div>
            <p className="white-color">{movie.overview}</p> 
            <div className="d-flex justify-evenly align-center gap-2">
              {buttonContent && <button onClick={toggleHeight}>{buttonContent}</button>} 
              
            </div>
            <Link to="/" className="white-bgc d-flex flex-row-reverse align-center border-radius-5"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" class="Component-icon-0-1-456"><path d="M14.66 8.347l-8.537-4.93c-.502-.287-1.12-.286-1.62.005s-.81.825-.81 1.404v9.858c-.001.58.307 1.115.808 1.406s1.12.293 1.62.005l8.537-4.93a1.64 1.64 0 0 0 0-2.82z"></path></svg><span className="">خرید اشتراک</span></Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieInfoHomePage;
