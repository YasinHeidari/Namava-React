import React, { useState, useEffect } from "react";
import { Link , useNavigate } from "react-router-dom";
import { img_300 } from "../../../helpers/api";
import { unavailable } from "../../../helpers/api";
import Loading from "../../Loading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Navigation } from "swiper/modules";
import PreloadStyles from "../../Loading/PreLoader";
import "./index.css";

const apiKey = "4fba95dbf46cd77d415830c228c9ef01";

export default function LatestShow({ title }) {
    const [loading, setLoading] = useState(true);
    const [shows, setShows] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchAiringTodayShows() {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/tv/airing_today?api_key=${apiKey}`
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch TV shows airing today");
                }
                const data = await response.json();
                setShows(data.results); // Assuming 'data.results' is an array of TV shows
                setLoading(false);
            } catch (error) {
                console.error("Error fetching TV shows airing today:", error);
            }
        }
        fetchAiringTodayShows();
    }, []); // Empty dependency array to ensure the effect runs only 
    const handleSeeAllClick = () => {
        navigate('/SeeAllShows', { state: { shows, title } });
    };

    return (
        <div className="w-100">
        <PreloadStyles href='./index.css' as='style'/>
            <div className="d-flex flex-column align-center gap-2">
                <div className="container">
                    {loading ? (
                        <Loading />
                    ) : (
                        <div className="d-flex flex-column justify-center align-start gap-3">
                        <div className="sliderTitle col-md-5 col-12 d-flex justify-start align-center gap-1">
                                <h3 className="col-xl-4 col-md-6 col-4 white-color">{title}</h3>
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
                                    1200:{
                                        slidesPerView: 7.1,
                                    },
                                    2560:{
                                        slidesPerView: 9.1
                                    }
                                }}
                                className="mySwiper SliderContainer col-12 d-flex flex-row justify-evenly align-center"
                            >
                                {shows.length > 0 ? (
                                    shows.map((show) => (
                                        <SwiperSlide
                                            key={show.id}
                                            className="showSlider h-auto d-flex flex-column align-center"
                                        >
                                            <Link to={`/show/${show.id}`} className="showSliderLink d-flex flex-column gap-1 position-relative">
                                                <div className="showSliderItem w-100 h-100 position-relative z-0">
                                                    <img
                                                        loading="lazy"
                                                        className="w-100 h-100 border-radius-5 object-cover"
                                                        src={
                                                            show.poster_path
                                                                ? `${img_300}/${show.poster_path}`
                                                                : unavailable
                                                        }
                                                        alt={show.name}
                                                    />
                                                    <div className="darkShowCover position-absolute z-1 top-0 right-0 w-100 h-100 d-flex flex-column justify-center align-center gap-1 border-radius-5">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="60"
                                                            height="60"
                                                            viewBox="0 0 60 60"
                                                            fill="#fff"
                                                        >
                                                            <g
                                                                id="Group_2003"
                                                                data-name="Group 2003"
                                                                transform="translate(-875 -712)"
                                                            >
                                                                <circle
                                                                    id="Ellipse_163"
                                                                    data-name="Ellipse 163"
                                                                    cx="30"
                                                                    cy="30"
                                                                    r="30"
                                                                    transform="translate(875 712)"
                                                                    opacity="0.952"
                                                                ></circle>
                                                                <path
                                                                    fill="#000"
                                                                    data-name="Path 4933"
                                                                    d="M18.972,8.879,4.2.351A2.807,2.807,0,0,0,0,2.792V19.848a2.807,2.807,0,0,0,4.2,2.441l14.769-8.528A2.838,2.838,0,0,0,18.972,8.879Z"
                                                                    transform="translate(896.238 730.481)"
                                                                ></path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <h5 className="white-color line-height-28">
                                                    {show.name}
                                                </h5>
                                            </Link>
                                        </SwiperSlide>
                                    ))
                                ) : (
                                    <p>No TV shows available for this genre</p>
                                )}
                            </Swiper>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
