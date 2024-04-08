import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { img_300 } from "../../helpers/api";
import { unavailable } from "../../helpers/api";
import ratingDecimal from "../../helpers/ratingdecimal";
import "./info.css";

const apiKey = '4fba95dbf46cd77d415830c228c9ef01';

export default function MovieInfoHomePage({ movie, buttonContent }) {
  const [expanded, setExpanded] = useState(true); // Initially expanded
  const [stars, setStars] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    // Reset expanded state when movie prop changes
    setExpanded(true);

    // Fetch movie credits if movie object exists
    if (movie && movie.id) {
      fetch(`https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
          // Extracting only the names of the top 5 stars
          const topStars = data.cast.slice(0, 5).map(actor => actor.name);
          setStars(topStars);

          // Extracting directors' names
          const directorsList = data.crew.filter(member => member.job === "Director").map(director => director.name);
          setDirectors(directorsList);
        })
        .catch(error => console.error('Error fetching movie credits:', error));
    }

    // Fetching genres list
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        setGenres(data.genres);
      })
      .catch(error => console.error('Error fetching genres:', error));
  }, [movie]);

  const toggleHeight = () => {
    setExpanded(prevExpanded => !prevExpanded); // Toggle the expanded state
    console.log('Button clicked. Expanded:', !expanded);
  };

  if (!movie) {
    return null;
  }

  // Function to get genre names based on genre IDs
  const getGenreNames = () => {
    const movieGenres = genres.filter(genre => movie.genre_ids.includes(genre.id));
    return movieGenres.map(genre => genre.name).join(", ");
  };

  return (
    <div className="containerMovieInfo position-relative" style={{ backgroundImage: `url(https://media.themoviedb.org/t/p/original/${movie.backdrop_path})`, backgroundSize: 'cover', backgroundPosition: 'right 20rem top' }}>
              <div className="dark-cover w-100 h-100 position-absolute top-0 right z-1"></div>

      <div className="container h-100" >
        {expanded && (
          <div className="d-flex justify-center align-center position-relative z-3 h-100">
            <div className="col-4 d-flex flex-column justify-center align-start gap-2 container-padding-2 h-100"
              >
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
                    {movie.release_date.substring(0, 4)}
                  </p>
                </div>
              </div>
              <p className="white-color font-12 font-weight-normal">{movie.overview}</p>
              <div className="d-flex justify-evenly align-center gap-2">
                {buttonContent && <button onClick={toggleHeight}>{buttonContent}</button>}
              </div>
              <div className="d-flex  align-center justify-center gap-1">
                <Link to="/" className="movieInfoInnerBtn white-bgc d-flex flex-row align-center gap-1 border-radius-12  line-height-42">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" class="Component-icon-0-1-456"><path d="M14.66 8.347l-8.537-4.93c-.502-.287-1.12-.286-1.62.005s-.81.825-.81 1.404v9.858c-.001.58.307 1.115.808 1.406s1.12.293 1.62.005l8.537-4.93a1.64 1.64 0 0 0 0-2.82z"></path>
                  </svg>
                  <span className="black-color font-12 font-weight-normal">خرید اشتراک</span>
                </Link>
                <Link to="/" className="movieInfoInnerMore d-flex flex-row align-center gap-1 border-radius-12 line-height-42">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="#fff"><g id="Group_2349" data-name="Group 2349" transform="translate(2641 -16124)"><rect id="Rectangle_459" data-name="Rectangle 459" width="30" height="30" transform="translate(-2641 16124)" fill="none"></rect><path class="svg-c1" id="Path_5398" data-name="Path 5398" d="M1530.066-359.976a12.023,12.023,0,0,0-8.558-3.545,12.022,12.022,0,0,0-8.558,3.545,12.024,12.024,0,0,0-3.545,8.558,12.024,12.024,0,0,0,3.545,8.558,12.022,12.022,0,0,0,8.558,3.545,12.023,12.023,0,0,0,8.558-3.545A12.117,12.117,0,0,0,1530.066-359.976Zm-8.558,17a1.57,1.57,0,0,1-1.57-1.57,1.57,1.57,0,0,1,1.57-1.57,1.57,1.57,0,0,1,1.57,1.57A1.57,1.57,0,0,1,1521.508-342.98Zm1.57-7.109a1.57,1.57,0,0,1-1.57,1.57,1.57,1.57,0,0,1-1.57-1.57v-7.493a1.57,1.57,0,0,1,1.57-1.57,1.57,1.57,0,0,1,1.57,1.57Z" transform="translate(-1104.395 15787.685) rotate(180)"></path></g></svg>
                  <span className="white-color font-12 font-weight-normal">توضیحات بیشتر</span>
                </Link>
              </div>
              <p className="light-white-font font-12 font-weight-normal">
                ستارگان: {stars.join(", ")}
              </p>
              <p className="light-white-font font-12 font-weight-normal">
                کارگردان: {directors.join(", ")}
              </p>
              <p className="genres light-white-font font-12 font-weight-normal">
                دسته بندی ها: {getGenreNames()}
              </p>
            </div>
            <div className="col-8">
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
