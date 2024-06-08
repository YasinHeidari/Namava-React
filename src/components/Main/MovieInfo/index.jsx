import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ratingDecimal from "../../../helpers/ratingdecimal";
import IMDB from "../../../images/IMDB.svg";
import SubScript from "../../../images/subScript.svg";
import SpinnerLoading from "../../Loading/SpinnerLoading";
import "./index.css";

const apiKey = "4fba95dbf46cd77d415830c228c9ef01";

export default function MovieInfoHomePage({ movie, buttonContent }) {
    const [expanded, setExpanded] = useState(true);
    const [stars, setStars] = useState([]);
    const [directors, setDirectors] = useState([]);
    const [genres, setGenres] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false);

    let navigate = useNavigate();

    useEffect(() => {
        const fetchMovieData = async () => {
            if (movie && movie.id) {
                setLoading(true);
                setShowSpinner(true);

                const spinnerTimeout = setTimeout(() => {
                    setShowSpinner(false);
                }, 2200);

                try {
                    const [creditsResponse, genresResponse] = await Promise.all(
                        [
                            fetch(
                                `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${apiKey}`
                            ),
                            fetch(
                                `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
                            ),
                        ]
                    );

                    const creditsData = await creditsResponse.json();
                    const genresData = await genresResponse.json();

                    const topStars = creditsData.cast
                        .slice(0, 5)
                        .map((actor) => actor.name);
                    const directorsList = creditsData.crew
                        .filter((member) => member.job === "Director")
                        .map((director) => director.name);

                    setStars(topStars);
                    setDirectors(directorsList);
                    setGenres(genresData.genres);

                    setTimeout(() => {
                        setLoading(false);
                    }, 3000);
                } catch (error) {
                    console.error("Error fetching movie data:", error);
                    setLoading(false);
                    setShowSpinner(false);
                }

                return () => clearTimeout(spinnerTimeout);
            }
        };

        fetchMovieData();
    }, [movie]);

    const toggleHeight = () => {
        setExpanded((prevExpanded) => !prevExpanded);
        console.log("Button clicked. Expanded:", !expanded);
    };

    if (!movie) {
        return null;
    }

    const getGenreNames = () => {
        const movieGenres = genres.filter((genre) =>
            movie.genre_ids.includes(genre.id)
        );
        return movieGenres.map((genre) => genre.name).join(" - ");
    };

    const handleLinkClick = (e) => {
        e.preventDefault();
        navigate(`/movie/${movie.id}`);
    };

    return (
        <div
            className="containerMovieInfo position-relative"
            style={{
                backgroundImage: `url(https://media.themoviedb.org/t/p/original/${movie.backdrop_path})`,
                backgroundSize: "cover",
                backgroundPosition: "left top",
            }}
        >
            <div className="dark-cover w-100 h-100 position-absolute top-0 right z-1"></div>
            <div className="container h-100">
                {showSpinner ? (
                    <SpinnerLoading />
                ) : (
                    expanded && (
                        <div className="d-flex justify-center align-center position-relative z-3 h-100">
                            <div className="col-4 d-flex flex-column justify-center align-start gap-2 container-padding-2 h-100">
                                <Link to="/" className="font-20 white-color">
                                    {movie.title || movie.name}
                                </Link>
                                <div className="d-flex justify-start align-center gap-2">
                                    <div className="d-flex justify-center align-center">
                                        <div>
                                            <img src={IMDB} alt="" />
                                        </div>
                                        <p className="white-color font-14">
                                            {ratingDecimal(movie.vote_average)}
                                        </p>
                                    </div>
                                    <div className="d-flex justify-center align-center">
                                        <div>
                                            <img src={SubScript} alt="" />
                                        </div>
                                        <p className="white-color font-12">
                                            {" "}
                                            زیرنویس{" "}
                                        </p>
                                    </div>
                                    <div className="d-flex justify-center align-center">
                                        <p className="white-color font-12">
                                            {movie.release_date
                                                ? movie.release_date.substring(
                                                      0,
                                                      4
                                                  )
                                                : "N/A"}
                                        </p>
                                    </div>
                                </div>
                                <p className="white-color font-12 font-weight-normal">
                                    {movie.overview}
                                </p>
                                <div className="d-flex justify-evenly align-center gap-2">
                                    {buttonContent && (
                                        <button onClick={toggleHeight}>
                                            {buttonContent}
                                        </button>
                                    )}
                                </div>
                                <div className="d-flex align-center justify-center gap-1">
                                    <Link
                                        to="/"
                                        className="movieInfoInnerBtn white-bgc d-flex flex-row align-center gap-1 border-radius-12 line-height-42"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M14.66 8.347l-8.537-4.93c-.502-.287-1.12-.286-1.62.005s-.81.825-.81 1.404v9.858c-.001.58.307 1.115.808 1.406s1.12.293 1.62.005l8.537-4.93a1.64 1.64 0 0 0 0-2.82z"></path>
                                        </svg>
                                        <span className="black-color font-12 font-weight-normal">
                                            خرید اشتراک
                                        </span>
                                    </Link>
                                    <Link
                                        to={`/movie/${movie.id}`}
                                        onClick={handleLinkClick}
                                        className="movieInfoInnerMore d-flex flex-row align-center gap-1 border-radius-12 line-height-42"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="30"
                                            height="30"
                                            viewBox="0 0 30 30"
                                            fill="#fff"
                                        >
                                            <g
                                                id="Group_2349"
                                                data-name="Group 2349"
                                                transform="translate(2641 -16124)"
                                            >
                                                <rect
                                                    id="Rectangle_459"
                                                    data-name="Rectangle 459"
                                                    width="30"
                                                    height="30"
                                                    transform="translate(-2641 16124)"
                                                    fill="none"
                                                ></rect>
                                                <path
                                                    id="Path_5398"
                                                    data-name="Path 5398"
                                                    d="M1530.066-359.976a12.023,12.023,0,0,0-8.558-3.545,12.022,12.022,0,0,0-8.558,3.545,12.024,12.024,0,0,0-3.545,8.558,12.024,12.024,0,0,0,3.545,8.558,12.022,12.022,0,0,0,8.558,3.545,12.023,12.023,0,0,0,8.558-3.545A12.117,12.117,0,0,0,1530.066-359.976Zm-8.558,17a1.57,1.57,0,0,1-1.57-1.57,1.57,1.57,0,0,1,1.57-1.57,1.57,1.57,0,0,1,1.57,1.57A1.57,1.57,0,0,1,1521.508-342.98Zm1.57-7.109a1.57,1.57,0,0,1-1.57,1.57,1.57,1.57,0,0,1-1.57-1.57v-7.493a1.57,1.57,0,0,1,1.57-1.57,1.57,1.57,0,0,1,1.57,1.57Z"
                                                    transform="translate(-1104.395 15787.685) rotate(180)"
                                                ></path>
                                            </g>
                                        </svg>
                                        <span className="white-color font-12 font-weight-normal">
                                            توضیحات بیشتر
                                        </span>
                                    </Link>
                                </div>
                                <p className="light-white-font font-12 font-weight-normal">
                                    ستارگان: {stars.join(" - ")}
                                </p>
                                <p className="light-white-font font-12 font-weight-normal">
                                    کارگردان: {directors.join(" - ")}
                                </p>
                                <p className="genres light-white-font font-12 font-weight-normal">
                                    دسته بندی ها: {getGenreNames()}
                                </p>
                            </div>
                            <div className="col-8"></div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}
