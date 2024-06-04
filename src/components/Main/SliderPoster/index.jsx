import React, { useState, useEffect } from "react";
import Loading from "../../Loading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Navigation } from "swiper/modules";
import PosterImages from "../../../helpers/PosterLocalApi";
import "./index.css"

export default function SliderPoster() {
    const [loading, setLoading] = useState(true);
    const [poster, setPoster] = useState([]);

    useEffect(() => {
        // Simulate fetching data from the local array
        const fetchPoster = () => {
            // Filter poster by genreId if necessary
            const filteredPoster = PosterImages; // Update this logic if you have genre filtering
            setPoster(filteredPoster);
            setLoading(false);
        };
        fetchPoster();
    }, []);

    return (
        <div className="container d-md-block d-sm-none d-xs-none">
            {loading ? (
                <Loading />
            ) : (
                <Swiper
                    grabCursor={true}
                    keyboard={{
                        enabled: true,
                    }}
                    spaceBetween={15}
                    navigation={true}
                    slidesPerView={3}
                    slidesOffsetAfter={20}
                    slidesOffsetBefore={0}
                    slidesPerGroup={3}
                    watchOverflow={true}
                    speed={800}
                    modules={[Navigation, Keyboard]}
                    breakpoints={{
                        576: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        992: {
                            slidesPerView: 3,
                        },
                    }}
                    className="mySwiper SliderPoster col-12 d-flex flex-row justify-evenly align-center"
                >
                    {poster.length > 0 ? (
                        poster.map((movie) => (
                            <SwiperSlide
                                key={movie.id}
                                className={`col-4 h-auto d-flex flex-column align-center `}
                            >
                                <div className="posterliderItem w-100 h-100  z-0">
                                    <img
                                        loading="lazy"
                                        className="w-100 h-100 border-radius-5 object-cover"
                                        src={movie.img}
                                        alt={movie.name}
                                    />
                                </div>
                            </SwiperSlide>
                        ))
                    ) : (
                        <p>No poster available</p>
                    )}
                </Swiper>
            )}
        </div>
    );
}
