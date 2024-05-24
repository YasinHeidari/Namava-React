import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Autoplay } from "swiper/modules";
import Loading from "../../Loading";
import { Link } from "react-router-dom";
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
                    `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`
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

    return (
        <div className="w-100 h-100">
            {loading ? (
                <Loading />
            ) : (
                <Swiper
                    navigation={true}
                    slidesPerView={1}
                    effect={"fade"}
                    autoplay={{ delay: 4500 }}
                    loop={true}
                    modules={[Navigation, EffectFade, Autoplay]}
                    className="mySwiper heroSectionSlider containerMovie col-12 d-flex flex-row justify-evenly align-center"
                    style={{ height: "100vh" }}
                >
                    {movies.length > 0 ? (
                        movies.map((movie) => (
                            <SwiperSlide
                                key={movie.id}
                                className="w-100 movieSlider h-auto d-flex flex-column align-center"
                                style={{
                                    backgroundImage: `linear-gradient(rgba(18, 18, 18, 0) 10vw, rgb(18, 18, 18) 46.875vw), linear-gradient(to left, rgba(18, 18, 18, 0.7), rgba(18, 18, 18, 0) 50%), url(https://media.themoviedb.org/t/p/original/${movie.backdrop_path})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "left top",
                                }}
                            >
                                <div
                                    className="container"
                                    style={{ paddingTop: "7rem" }}
                                >
                                    <div className="d-flex flex-column justify-btw align-start h-100">
                                        <div className="col-4 d-flex flex-column justify-center align-start align-self-start gap-4 container-padding-2 h-100">
                                            <Link
                                                to={`/movie/${movie.id}`}
                                                className="w-100"
                                            >
                                                {movie.logoUrl && (
                                                    <img
                                                        loading="lazy"
                                                        className="w-100 h-auto object-cover logoImg"
                                                        src={`https://image.tmdb.org/t/p/w300/${movie.logoUrl}`}
                                                        alt={
                                                            movie.name ||
                                                            movie.title
                                                        }
                                                    />
                                                )}
                                            </Link>
                                            <h1 className="font-xl-20 font-16 white-color">
                                                {movie.title || movie.name}
                                            </h1>
                                            <div className="d-flex justify-start align-center gap-2">
                                                <div className="d-flex justify-center align-center">
                                                    <div>
                                                        <img
                                                            src={IMDB}
                                                            alt="IMDB"
                                                        />
                                                    </div>
                                                    <p className="white-color font-14">
                                                        {ratingDecimal(
                                                            movie.vote_average
                                                        )}
                                                    </p>
                                                </div>
                                                <div className="d-flex justify-center align-center">
                                                    <p
                                                        className="ageRestriction white-color font-14"
                                                        style={{
                                                            background: `linear-gradient(rgb(255, 213, 76) 0%, rgb(222, 171, 0) 100%)`,
                                                        }}
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
                                            <p className="white-color font-xl-14">
                                                {movie.overview.length > 100
                                                    ? `${movie.overview.substring(
                                                          0,
                                                          150
                                                      )}...`
                                                    : movie.overview}
                                            </p>
                                            <div className="d-flex align-center justify-evenly gap-2">
                                                <Link
                                                    to="/"
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
                                                    to="/"
                                                    className="movieInnerMore border-radius-12 line-height-42"
                                                >
                                                    <span className="white-color font-12 font-weight-normal">
                                                        پیش نمایش
                                                    </span>
                                                </Link>
                                                <Link
                                                    to={`/movie/${movie.id}`}
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
