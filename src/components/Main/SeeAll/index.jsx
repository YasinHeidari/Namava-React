import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { img_300, unavailable } from "../../../helpers/api";
import MovieInfoHomePage from "../MovieInfo";
import IMDB from "../../../images/IMDB.svg";
import ratingDecimal from "../../../helpers/ratingdecimal";
import SubScript from "../../../images/subScript.svg";
import "./index.css";

export default function SeeAll() {
    const location = useLocation();
    const { movies, title } = location.state || { movies: [], title: "Movies" };
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [isInfoVisible, setIsInfoVisible] = useState(false);
    const [selectedSliderIndex, setSelectedSliderIndex] = useState(null);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMovieSelect = (movie, index) => {
        console.log("Selected Movie:", movie);
        if (screenWidth < 992) {
            navigate(`/movie/${movie.id}`);
        } else {
            setSelectedMovie(movie);
            setIsInfoVisible(true);
            setSelectedSliderIndex(index);
        }
    };

    const handleInfoToggle = () => {
        setIsInfoVisible(false);
        setSelectedMovie(null);
        setSelectedSliderIndex(null);
    };

    return (
        <div className="container d-flex flex-column gap-5" style={{ marginTop: '5rem' }}>
            <h2 className="white-color">{title}</h2>
            <div className="d-flex flex-wrap">
                {movies.map((movie, index) => (
                    <div
                        key={movie.id}
                        className="col-xxl-2 col-md-3 col-sm-4 col-xs-4 movieLink"
                        onClick={() => handleMovieSelect(movie, index)}
                    >
                        <div className="movieSliderLink d-flex flex-column gap-1 position-relative">
                            <div className="movieSliderItem w-100 h-100 position-relative z-0">
                                <img
                                    loading="lazy"
                                    className="w-100 h-100 border-radius-5 object-cover"
                                    src={movie?.poster_path ? `${img_300}/${movie?.poster_path}` : unavailable}
                                    alt={movie?.title}
                                />
                                <div className="darkMovieCover position-absolute z-1 top-0 right-0 w-100 h-100 d-flex flex-column justify-end align-start gap-1 border-radius-5">
                                    <div className="d-flex justify-center align-end  vertical-middle">
                                        <img className="d-inline-block" src={IMDB} alt="" />
                                        <p className="white-color font-14">
                                            {ratingDecimal(movie?.vote_average)}
                                        </p>
                                    </div>
                                    <div className="d-flex justify-center align-center vertical-middle">
                                        <img className="d-inline-block" src={SubScript} alt="" />
                                        <p className="white-color font-12"> زیرنویس </p>
                                    </div>
                                    <div className="d-flex justify-center align-center">
                                        <p className="white-color font-12">
                                            فیلم - {movie?.release_date.substring(0, 4)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <h5 className="white-color line-height-28">
                                {movie?.title || movie?.name}
                            </h5>
                            {selectedSliderIndex === index && screenWidth >= 992 && (
                                <button onClick={handleInfoToggle} className="hideInfoButton border-radius-4 d-flex align-self-center" style={{ margin: "2.5rem 0 2rem" }}>Hide Info</button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            {selectedMovie && isInfoVisible && screenWidth >= 992 && (
                <MovieInfoHomePage movie={selectedMovie} />
            )}
        </div>
    );
}


