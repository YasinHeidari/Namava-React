import React, { useState, useEffect } from "react";
import { img_300 } from "../../../helpers/api";
import { unavailable } from "../../../helpers/api";
import Loading from "../../Loading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Navigation } from "swiper/modules";
import ratingDecimal from "../../../helpers/ratingdecimal";
import "./index.css";
import MovieInfoHomePage from "../MovieInfo";
import IMDB from "../../../images/IMDB.svg";
import PreloadStyles from "../../Loading/PreLoader";
import SubScript from "../../../images/subScript.svg";

const apiKey = "4fba95dbf46cd77d415830c228c9ef01";

export default function SliderMovie({ genreId, title }) {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [isInfoVisible, setIsInfoVisible] = useState(false); // State to control visibility of movie info
    const [selectedSliderIndex, setSelectedSliderIndex] = useState(null);

    useEffect(() => {
        async function fetchMovies() {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch movies");
                }
                const data = await response.json();
                setMovies(data.results || []);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        }
        fetchMovies();
    }, [genreId]);

    const handleMovieSelect = (movie, index) => {
        setSelectedMovie(movie);
        setIsInfoVisible(true); // Show movie info when a movie is selected
        setSelectedSliderIndex(index);
    };

    const handleInfoToggle = () => {
        setIsInfoVisible(false); // Hide movie info when the button is clicked
        setSelectedSliderIndex(null);
    };

    return (
        <div className="w-100">
            <PreloadStyles href='./index.css' as='style'/>
            <div className="d-flex flex-column align-center gap-2">
                <div className="container">
                    {loading ? (
                        <Loading />
                    ) : (
                        <div className="d-flex flex-column justify-center align-start gap-2">
                            <h3 className="white-color">{title}</h3>
                            <Swiper
                                grabCursor={true}
                                keyboard={{
                                    enabled: true,
                                }}
                                spaceBetween={15}
                                navigation={true}
                                slidesPerView={3.1}
                                slidesOffsetAfter={20}
                                slidesOffsetBefore={0}
                                slidesPerGroup={7}
                                watchOverflow={true}
                                speed={800}
                                modules={[Navigation, Keyboard]}
                                breakpoints={{
                                    576: {
                                        slidesPerView: 3.1,
                                    },
                                    768: {
                                        slidesPerView: 4.1,
                                    },
                                    992: {
                                        slidesPerView: 5.1,
                                    },
                                    1200:{
                                        slidesPerView: 7.1,
                                    },
                                    2560:{
                                        slidesPerView: 9.1
                                    }
                                }}
                                className="mySwiper SliderContainer col-12 d-flex flex-row justify-evenly align-center"
                            >
                                {movies.length > 0 ? (
                                    movies.map((movie, index) => (
                                        <SwiperSlide
                                            key={movie.id}
                                            className={`movieSlider h-auto d-flex flex-column align-center ${
                                                selectedSliderIndex === index
                                                    ? "selected"
                                                    : ""
                                            }`}
                                            onClick={() =>
                                                handleMovieSelect(movie, index)
                                            }
                                        >
                                            <div className="movieSliderLink d-flex flex-column gap-1 position-relative">
                                                <div className="movieSliderItem w-100 h-100 position-relative z-0">
                                                    <img
                                                        loading="lazy"
                                                        className="w-100 h-100 border-radius-5 object-cover"
                                                        src={
                                                            movie.poster_path
                                                                ? `${img_300}/${movie.poster_path}`
                                                                : unavailable
                                                        }
                                                        alt={movie.title}
                                                    />
                                                    <div className="darkMovieCover position-absolute z-1 top-0 right-0 w-100 h-100 d-flex flex-column justify-end align-start gap-1 border-radius-5">
                                                        <div className="d-flex justify-center align-center">
                                                            <div>
                                                                <img
                                                                    src={IMDB}
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <p className="white-color font-14">
                                                                {ratingDecimal(
                                                                    movie.vote_average
                                                                )}
                                                            </p>
                                                        </div>
                                                        <div className="d-flex justify-center align-center">
                                                            <div>
                                                                <img
                                                                    src={
                                                                        SubScript
                                                                    }
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <p className="white-color font-12">
                                                                {" "}
                                                                زیرنویس{" "}
                                                            </p>
                                                        </div>
                                                        <div className="d-flex justify-center align-center">
                                                            <p className="white-color font-12">
                                                                فیلم -{" "}
                                                                {movie.release_date.substring(
                                                                    0,
                                                                    4
                                                                )}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h5 className="white-color line-height-28">
                                                    {movie.title}
                                                </h5>
                                                {selectedSliderIndex ===
                                                    index && (
                                                    <button
                                                        onClick={
                                                            handleInfoToggle
                                                        }
                                                        className="hideInfoButton border-radius-4 d-flex align-self-center"
                                                        style={{
                                                            margin: "2.5rem 0 2rem",
                                                        }}
                                                    ></button>
                                                )}
                                            </div>
                                        </SwiperSlide>
                                    ))
                                ) : (
                                    <p>No movies available for this genre</p>
                                )}
                            </Swiper>
                        </div>
                    )}
                </div>
            </div>
            {selectedMovie && isInfoVisible && (
                <MovieInfoHomePage movie={selectedMovie} />
            )}
        </div>
    );
}