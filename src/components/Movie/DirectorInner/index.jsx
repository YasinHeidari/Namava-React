import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Navigation } from "swiper/modules";
import Loading from "../../Loading";
import { Link } from "react-router-dom";

const apiKey = '4fba95dbf46cd77d415830c228c9ef01'; // Replace with your actual API key

export default function DirectorInner({ movieId }) {
    const [directors, setDirectors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchDirectorsFromMovie() {
            try {
                if (!movieId) return;

                // Fetch credits for the given movie ID
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`
                );
                const data = await response.json();
                const directorsInMovie = data.crew.filter(member => member.job  && member.profile_path !== null);

                setDirectors(directorsInMovie);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching directors data:", error);
                setLoading(false);//yh
            }
        }

        fetchDirectorsFromMovie();
    }, [movieId]);

    return (
        <div className="container">
            {loading ? (
                <Loading />
            ) : (
                <Swiper
                    grabCursor={true}
                    keyboard={{
                        enabled: true,
                    }}
                    spaceBetween={30}
                    navigation={true}
                    slidesPerView={3}
                    watchOverflow={true}
                    breakpoints={{
                        576: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        992: {
                            slidesPerView: 5,
                        },
                        1440:{
                            slidesPerView:7,
                        },
                        2560:{
                            slidesPerView:11,
                        }
                    }}
                    modules={[Navigation, Keyboard]}
                    className="mySwiper SliderContainer col-12 d-flex flex-row justify-evenly align-center gap-4"
                >
                    {directors.map((director, index) => (
                        <SwiperSlide key={index} className="DirectorsSlider h-100">
                            <Link to="/" className="d-flex flex-column align-center gap-2">
                                {director.profile_path ? (
                                    <img loading="lazy"
                                        src={`https://image.tmdb.org/t/p/w500/${director.profile_path}`}
                                        alt={director.name}
                                        className="col-lg-12 col-9  DirectorImg object-cover border-radius-50"
                                    />
                                ) : (
                                    <p className="white-color">No image available</p>
                                )}
                                <h5 className="white-color">{director.name}</h5>
                                <p className="font-lg-14 line-height-lg-24 light-white-font font-weight-normal">{director.job}</p>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
}
