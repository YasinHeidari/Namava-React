import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Navigation } from "swiper/modules";
import Loading from "../../Loading";
import { Link } from "react-router-dom";
import "./index.css";

const apiKey = "4fba95dbf46cd77d415830c228c9ef01";

export default function StarsSlider({ title }) {
    const [stars, setStars] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchStars() {
            try {
                // Fetch a list of movies
                const response = await fetch(
                    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
                );
                const data = await response.json();
                const movies = data.results;

                // Fetch cast for each movie and accumulate stars
                const starsArray = [];
                for (const movie of movies) {
                    const castResponse = await fetch(
                        `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${apiKey}`
                    );
                    const castData = await castResponse.json();
                    const cast = castData.cast.filter(
                        (actor) => actor.profile_path !== null
                    );
                    starsArray.push(...cast);
                }
                setStars(starsArray);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching stars data:", error);
                setLoading(false);
            }
        }

        fetchStars();
    }, []);

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
                        slidesPerView={3.1}
                        slidesPerGroupAuto={true}
                        modules={[Navigation, Keyboard]}
                        breakpoints={{
                            576: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 4,
                            },
                            992: {
                                slidesPerView: 7,
                            },
                                }}
                        className="mySwiper SliderContainer col-12 d-flex flex-row justify-evenly align-center gap-4"
                    >
                        {stars.map((star, index) => (
                            <SwiperSlide
                                key={index}
                                className="StarsSlider h-100"
                            >
                                <Link
                                    to="/"
                                    className="d-flex flex-column align-center gap-2"
                                >
                                    <img
                                        loading="lazy"
                                        src={`https://image.tmdb.org/t/p/w500/${star.profile_path}`}
                                        alt={star.name}
                                        className="col-lg-12 col-9 starImg border-radius-50 object-cover"
                                    />
                                    <h5 className="white-color">{star.name}</h5>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
        </div>
    );
}
