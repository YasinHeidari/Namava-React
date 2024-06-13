import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Navigation } from "swiper/modules";
import "./index.css";
import MovieInfoHomePage from "../Main/MovieInfo";

export default function CinemaSlider() {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [isInfoVisible, setIsInfoVisible] = useState(false);

    const handleMovieSelect = (movie) => {
        setSelectedMovie(movie);
        setIsInfoVisible(true);
    };

    const handleInfoToggle = () => {
        setIsInfoVisible(false);
    };

    return (
        <div className="w-100">
            <div className="d-flex flex-column align-center gap-2">
                <div className="container">
                    <div className="d-flex flex-column justify-center align-start gap-2">
                        <h3 className="white-color ">پردیس نماوا</h3>
                        <Swiper
                            grabCursor={true}
                            keyboard={{
                                enabled: true,
                            }}
                            spaceBetween={15}
                            navigation={true}
                            slidesPerView={1}
                            slidesOffsetAfter={20}
                            slidesOffsetBefore={0}
                            slidesPerGroup={2}
                            watchOverflow={true}
                            speed={800}
                            modules={[Navigation, Keyboard]}
                            breakpoints={{
                                576: {
                                    slidesPerView: 2.1,
                                },
                                1280:{
                                    slidesPerView:3,
                                }
                            }}
                            className="mySwiper SliderContainer col-12 d-flex flex-row justify-evenly align-center"
                        >
                            {/* First Slide */}
                            <SwiperSlide
                                className={`movieSlider col-4 d-flex flex-column align-center ${
                                    selectedMovie === 1 ? "selected" : ""
                                }`}
                                onClick={() => handleMovieSelect(1)}
                            >
                                <div className="position-relative">
                                    <img
                                        loading="lazy"
                                        src="https://static.namava.ir/Content/Upload/Images/fb7430f2-e826-4d44-a911-7b57795d8c5f.jpg?anchor=middlecenter&amp;crop=auto&amp;scale=both&amp;w=360&amp;h=171"
                                        alt="احمد به تنهایی"
                                        title="احمد به تنهایی"
                                        className="w-100 h-100 border-radius-5 object-cover"
                                    />

                                    <div className="darkMovieCover position-absolute top-0 left-0 w-100 h-100 d-flex flex-column justify-end align-start gap-1 border-radius-5">
                                        <div className="d-flex justify-center align-center">
                                            <div>
                                                <img
                                                    loading="lazy"
                                                    src={
                                                        require("../../images/IMDB.svg")
                                                            .default
                                                    }
                                                    alt=""
                                                />
                                            </div>
                                            <p className="white-color font-14">
                                                6.4
                                            </p>
                                        </div>
                                        <div className="d-flex justify-center align-center">
                                            <div>
                                                <img
                                                    loading="lazy"
                                                    src={
                                                        require("../../images/subScript.svg")
                                                            .default
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
                                                فیلم - ۱۴۰۰
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <h5 className="white-color line-height-28">
                                    احمد به تنهایی
                                </h5>
                            </SwiperSlide>

                            {/* Second Slide */}
                            <SwiperSlide
                                className={`movieSlider col-4 d-flex flex-column align-center ${
                                    selectedMovie === 2 ? "selected" : ""
                                }`}
                                onClick={() => handleMovieSelect(2)}
                            >
                                <div className="position-relative">
                                    <img
                                        loading="lazy"
                                        src="https://static.namava.ir/Content/Upload/Images/2983f2aa-b689-45a5-9f16-5fb7db02985f.jpg?anchor=middlecenter&amp;crop=auto&amp;scale=both&amp;w=360&amp;h=171"
                                        alt="آبجی"
                                        title="آبجی"
                                        className="w-100 h-100 border-radius-5 object-cover"
                                    />

                                    <div className="darkMovieCover position-absolute top-0 left-0 w-100 h-100 d-flex flex-column justify-end align-start gap-1 border-radius-5">
                                        <div className="d-flex justify-center align-center">
                                            <div>
                                                <img
                                                    loading="lazy"
                                                    src={
                                                        require("../../images/IMDB.svg")
                                                            .default
                                                    }
                                                    alt=""
                                                />
                                            </div>
                                            <p className="white-color font-14">
                                                6.4
                                            </p>
                                        </div>
                                        <div className="d-flex justify-center align-center">
                                            <div>
                                                <img
                                                    loading="lazy"
                                                    src={
                                                        require("../../images/subScript.svg")
                                                            .default
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
                                                فیلم - ۱۳۹۴
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <h5 className="white-color line-height-28">
                                    آبجی
                                </h5>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            {selectedMovie && isInfoVisible && (
                <MovieInfoHomePage movie={selectedMovie} />
            )}
        </div>
    );
}
