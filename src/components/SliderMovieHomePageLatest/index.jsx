import React, { useState, useEffect } from "react";
import { img_300 } from "../../helpers/api";
import { unavailable } from "../../helpers/api";
import Loading from "../Loading";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Navigation } from "swiper/modules";
import ratingDecimal from "../../helpers/ratingdecimal";
import "./index.css";
import MovieInfoHomePage from "../MovieInfoHomePage";

const apiKey = '4fba95dbf46cd77d415830c228c9ef01'; 

export default function LatestMoviesSlider({ title }) {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchLatestMovies() {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch latest movies');
                }
                const data = await response.json();
                setMovies(data.results); // Assuming 'data.results' is an array of movies
                setLoading(false);
            } catch (error) {
                console.error('Error fetching latest movies:', error);
            }
        }
        fetchLatestMovies();
    }, []);
     // Empty dependency array to ensure the effect runs only once

    return (
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
                        spaceBetween={30}
                        navigation={true}
                        slidesPerView={7}
                        modules={[Navigation, Keyboard]}
                        className="mySwiper SliderContainer col-12 d-flex flex-row justify-evenly align-center gap-4"
                    >
                        {movies.length > 0 ? (
                            movies.map((movie) => (
                                <SwiperSlide key={movie.id} className="movieSlider h-auto">
                                    <Link
                                        className="movieSliderLink d-flex flex-column gap-2 position-relative"
                                        to=""
                                    >
                                        <div className="movieSliderItem w-100 h-100 position-relative z-0">
                                            <img
                                                className="w-100 h-100 border-radius-5 object-cover"
                                                src={movie.poster_path ? `${img_300}/${movie.poster_path}` : unavailable}
                                                alt={movie.title}
                                            />
                                            <div className="darkMovieCover position-absolute z-1 top-0 right-0 w-100 h-100 d-flex flex-column justify-end align-start gap-1 border-radius-5">
                                                <div className="d-flex justify-center align-center"><div><img src={require("../../images/IMDB.svg").default} alt=""/></div><p className="white-color font-14">{ratingDecimal(movie.vote_average)}</p></div>
                                                <div className="d-flex justify-center align-center"><div><img src={require("../../images/subScript.svg").default} alt=""/></div><p className="white-color font-12"> زیرنویس </p></div>
                                                <div className="d-flex justify-center align-center">
                                                    <p className="white-color font-12">فیلم - {movie.release_date ? movie.release_date.substring(0, 4) : 'Release Date Not Available'}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <h5 className="white-color">{movie.title}</h5>
                                    </Link>
                                </SwiperSlide>
                            ))
                        ) : (
                            <p>No latest movies available</p>
                        )}
                    </Swiper>
                </div>
            )}
            <MovieInfoHomePage/>
        </div>
    );
}
