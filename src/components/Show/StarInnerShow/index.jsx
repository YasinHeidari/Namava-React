import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Navigation } from "swiper/modules";
import Loading from "../../Loading";
import { Link } from "react-router-dom";


const apiKey = "4fba95dbf46cd77d415830c228c9ef01";

export default function StarInnerShow({ seriesId }) {
    const [stars, setStars] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchStars() {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/tv/${seriesId}/credits?api_key=${apiKey}&language=en-US&append_to_response=images&include_image_language=en,fa`
                );
                const data = await response.json();
                const cast = data.cast.filter(
                    (actor) => actor.profile_path !== null
                );
                setStars(cast);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching stars data:", error);
                setLoading(false);
            }
        }

        if (seriesId) {
            fetchStars();
        }
    }, [seriesId]);

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
                    slidesPerGroupAuto={true}
                    watchOverflow={true}
                    breakpoints={{
                        576: {
                            slidesPerView: 3.1,
                        },
                        768: {
                            slidesPerView: 4.1,
                            spaceBetween:20,
                        },
                        992: {
                            slidesPerView: 5.1,
                        },
                        1440: {
                            slidesPerView: 7.1,
                            spaceBetween:30,
                        },
                    }}
                    modules={[Navigation, Keyboard]}
                    className="mySwiper SliderContainer col-12 d-flex flex-row justify-evenly align-center gap-4"
                >
                    {stars.map((star, index) => (
                        <SwiperSlide key={index} className="StarsSlider h-100">
                            <Link
                                to="/"
                                className="d-flex flex-column align-center gap-2"
                            >
                                <img
                                    loading="lazy"
                                    src={`https://image.tmdb.org/t/p/w500/${star.profile_path}`}
                                    alt={star.name}
                                    className="col-lg-12 col-9  starImg border-radius-50 object-cover"
                                />
                                <h5 className="white-color">{star.name}</h5>
                                <p className="font-lg-14 font-12 line-height-lg-24 light-white-font font-weight-normal">
                                    Actor
                                </p>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
}
