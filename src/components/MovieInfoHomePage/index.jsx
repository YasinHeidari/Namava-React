import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import ratingDecimal from "../../helpers/ratingdecimal";
import "./index.css";

const MovieInfoHomePage = ({ movie }) => {
  const [expanded, setExpanded] = useState(false);
  const buttonRef = useRef(null);

  const toggleHeight = () => {
    setExpanded(prevExpanded => !prevExpanded); // Toggle the expanded state
    console.log('Button clicked. Expanded:', !expanded);
  };

  console.log('Expanded:', expanded); // Log the current value of expanded

  if (!movie) {
    return null;
  }

  return (
    <div className={`container containerMovieInfo ${expanded ? "expanded" : ""}`}>
      <div className="movieInfoContainer d-flex flex-column justify-center align-start container-padding-2 w-100" style={{background:`url(${movie.poster_path}) center cover`,}}>
        <Link>{}</Link>
        <div className=" w-100 h-100 d-flex  justify-evenly align-start gap-2">
          <div className="d-flex justify-center align-center">
            <div>
              <img src={require("../../images/IMDB.svg").default} alt="" />
            </div>
            <p className="white-color font-14">
              {movie.vote_average ? ratingDecimal(movie.vote_average) : "N/A"}
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
              فیلم - {movie.release_date ? movie.release_date.substring(0, 4) : "Release Date Not Available"}
            </p>
          </div>
        </div>
        <p>{/* Render additional content */}</p>
        <div className="d-flex justify-evenly align-center gap-2">
          <button ref={buttonRef} onClick={toggleHeight}>Toggle Height</button>
          {/* Render additional content */}
        </div>
      </div>
    </div>
  );
};

export default MovieInfoHomePage;
