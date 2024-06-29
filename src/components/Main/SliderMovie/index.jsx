import React, { useState, useEffect } from "react";
import { img_300, unavailable } from "../../../helpers/api";
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
import SubScript from "../../../images/subScript.svg";
import { useNavigate, Link } from "react-router-dom";

const apiKey = "4fba95dbf46cd77d415830c228c9ef01";

export default function SliderMovie({ genreId, title }) {
    const [loading, setLoading] = useState(true);
    const [expanded, setExpanded] = useState(true);
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [isInfoVisible, setIsInfoVisible] = useState(false);
    const [selectedSliderIndex, setSelectedSliderIndex] = useState(null);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchMovies() {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=fa-IR&with_genres=${genreId}`
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

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMovieSelect = (movie, index) => {
        if (screenWidth < 992) {
            navigate(`/movie/${movie.id}`);
        } else {
            setSelectedMovie(movie);
            setIsInfoVisible(true);
            setSelectedSliderIndex(index);
        }
    };

    const toggleHeight = () => {
        setExpanded((prevExpanded) => !prevExpanded);
        console.log("Button clicked. Expanded:", !expanded);
    };
    const handleInfoToggle = () => {
        setIsInfoVisible(false);
        setSelectedMovie(null);
        setSelectedSliderIndex(null);
    };

    const handleSeeAllClick = () => {
        navigate('/SeeAll', { state: { movies, title } });
    };

    return (
        <div className="w-100">
            
                <div className="container">
                    {loading ? (
                        <Loading />
                    ) : (
                        <div className="d-flex flex-column justify-center align-start gap-2">
                        <div className="sliderTitle col-md-5 col-12 d-flex justify-start align-center gap-1">
                                <h3 className=" white-color" style={{width:'fit-content'}}>{title}</h3>
                                <button onClick={handleSeeAllClick} className="seeAllButton col-md-5 d-flex align-center gap-1">
                                    <p>مشاهده همه</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="40" viewBox="10 0 20 40" fill="#fff"><path d="M14.77 18.793c0-.493.196-.967.545-1.315l6.2-6.2a1.86 1.86 0 0 1 2.626 2.633l-4.88 4.882 4.88 4.88a1.86 1.86 0 0 1-2.63 2.63l-6.2-6.2c-.347-.348-.54-.82-.54-1.31z" style={{transform: 'translateY(2px)',}}></path></svg>
                                </button>
                            </div>
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
                                slidesPerGroupAuto={true}
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
                                    1200: {
                                        slidesPerView: 7.1,
                                    },
                                    2560: {
                                        slidesPerView: 9.1,
                                    }
                                }}
                                className="mySwiper SliderContainer col-12 d-flex flex-row justify-evenly align-center"
                            >
                                {movies.length > 0 ? (
                                    movies.map((movie, index) => (
                                        <SwiperSlide
                                            key={movie.id}
                                            className={`movieSlider h-auto d-flex flex-column align-center ${screenWidth >= 992 && selectedSliderIndex === index ? "selected" : ""}`}
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
                                                {selectedSliderIndex === index && (
                                                    <button onClick={toggleHeight} className="hideInfoButton border-radius-4 d-flex align-self-center" style={{ margin: "2.5rem 0 2rem" }}></button>
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
            
            {selectedMovie && isInfoVisible && screenWidth >= 992 && (
                <MovieInfoHomePage movie={selectedMovie} />
            )}
        </div>
    );
}

