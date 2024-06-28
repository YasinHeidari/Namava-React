import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Autoplay , Pagination } from "swiper/modules";
import getResponsiveBackgroundImage from "../../../helpers/ResponsiveBgImage";
import Loading from "../../Loading";
import IMDB from "../../../images/IMDB.svg";
import ratingDecimal from "../../../helpers/ratingdecimal";
import "./index.css";

const apiKey = "4fba95dbf46cd77d415830c228c9ef01";

export default function HeroSectionSlider() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchHeroData = async () => {
            try {
                const upcomingResponse = await fetch(
                    `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&append_to_response=images,credits&include_image_language=en,jp,null`
                );
                const upcomingData = await upcomingResponse.json();

                const moviesWithDetails = await Promise.all(
                    upcomingData.results.map(async (movie) => {
                        const movieResponse = await fetch(
                            `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${apiKey}&language=en-US&append_to_response=images,credits&include_image_language=en,jp,null`
                        );
                        const movieData = await movieResponse.json();
                        const logo = movieData.images?.logos[0]?.file_path;
                        return {
                            ...movie,
                            credits: movieData.credits,
                            logoUrl: logo,
                        };
                    })
                );

                setMovies(moviesWithDetails);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchHeroData();
        
    }, [id]);
    const updateBackgroundImage = () => {
        const slides = document.querySelectorAll('.movieSlider');
        slides.forEach(slide => {
            const movieId = slide.getAttribute('data-movie-id');
            const movie = movies.find(movie => movie.id === Number(movieId));
            if (movie) {
                slide.style.backgroundImage = getResponsiveBackgroundImage(movie);
            }
        });
    };

    useEffect(() => {
        if (!loading) {
            updateBackgroundImage();
            window.addEventListener('resize', updateBackgroundImage);
            return () => {
                window.removeEventListener('resize', updateBackgroundImage);
            };
        }
    }, [loading, movies]);
    

    return (
        <div className="heroSectionContainer w-100 h-100">
        
            {loading ? (
                <Loading />
            ) : (
                
                <Swiper
                    grabCursor={true}
                    navigation={true}
                    slidesPerView={1}
                    effect={"fade"}
                    autoplay={{ delay: 4500 }}
                    loop={true}
                    pagination={true}
                    modules={[Navigation, EffectFade, Autoplay, Pagination]}
                    className="mySwiper heroSectionSlider col-12 d-flex flex-row justify-evenly align-center"

                >
                    {movies.length > 0 ? (
                        movies.map((movie) => (
                            <SwiperSlide
                                key={movie.id}
                                data-movie-id={movie.id}
                                className="w-100 movieSlider h-auto d-flex flex-column align-center"
                            >
                                <div className="container heroSectionInfo">
                                    <div className="d-flex flex-column justify-btw align-md-start align-sm-center align-xs-center h-100">
                                        <div className=" col-md-7 col-sm-12 col-xs-12 d-flex flex-column justify-center align-md-start align-sm-center align-xs-center align-self-start gap-4 gap-xxxl-7 gap-xs-3 container-padding-2 h-100">
                                            <Link
                                                to={`/movie/${movie.id}`}
                                                className="col-md-5 col-sm-3 col-xs-3"
                                            >
                                                {movie.logoUrl && (
                                                    <img
                                                        loading="lazy"
                                                        className="w-100 h-auto object-cover"
                                                        src={`https://image.tmdb.org/t/p/original/${movie.logoUrl}`}
                                                        alt={
                                                            movie.name ||
                                                            movie.title
                                                        }
                                                    />
                                                )}
                                            </Link>
                                            <h1 className="font-xxxl-24 font-xl-20 font-16 font-xs-14 white-color">
                                                {movie.title || movie.name}
                                            </h1>
                                            <div className="d-lg-flex d-sm-none d-xs-none justify-start align-center gap-2">
                                                <div className="d-flex justify-center align-end  vertical-middle">
                                                    
                                                        <img className="d-inline-block"
                                                            src={IMDB}
                                                            alt="IMDB"
                                                        />
                                                    
                                                    <p className="white-color font-14">
                                                        {ratingDecimal(
                                                            movie.vote_average
                                                        )}
                                                    </p>
                                                </div>
                                                <div className="d-flex justify-center align-center border-radius-12 " style={{
                                                            background: `linear-gradient(rgb(255, 213, 76) 0%, rgb(222, 171, 0) 100%)`,
                                                            width:'37px',
                                                            height:'24px'
                                                        }}>
                                                    <p
                                                        className="ageRestriction black-color font-xl-14 "
                                                        
                                                    >
                                                        {" "}
                                                        ۱۲+{" "}
                                                    </p>
                                                </div>
                                                <div className="d-flex justify-center align-center">
                                                    <p className="white-color font-12">
                                                        {movie.release_date.substring(
                                                            0,
                                                            4
                                                        )}
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="white-color font-xxxl-16 font-xl-14 font-md-12 font-weight-normal d-lg-block d-sm-none d-xs-none">
                                                {movie.overview.length > 100
                                                    ? `${movie.overview.substring(
                                                          0,
                                                          150
                                                      )}...`
                                                    : movie.overview}
                                            </p>
                                            <div className="d-flex align-center justify-evenly gap-2">
                                                <Link
                                                    to={`/movie/${movie.id}`}
                                                    className="movieInnerBtn white-bgc d-flex flex-row align-center gap-1 border-radius-12 line-height-42"
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
                                                    className="movieInnerMore border-radius-12 line-height-42"
                                                >
                                                    <span className="white-color font-12 font-weight-normal">
                                                        پیش نمایش
                                                    </span>
                                                </Link>
                                                <Link
                                                    to={`/movie/${movie.id}`}
                                                    className="movieInfoInnerMore d-md-flex d-sm-none d-xs-none flex-row align-center gap-1 border-radius-12 line-height-42"
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
                                            <p className="light-white-font font-xxxl-14 font-xl-12 font-10 d-md-block d-sm-none d-xs-none font-weight-normal">
                                                ستارگان :{" "}
                                                {movie.credits &&
                                                    movie.credits.cast &&
                                                    movie.credits.cast
                                                        .slice(0, 5) // Display only top 5 cast members
                                                        .map(
                                                            (actor) =>
                                                                actor.name
                                                        )
                                                        .join(", ")}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    ) : (
                        <p>No movies available</p>
                    )}
                </Swiper>
            )}
        </div>
    );
}
