import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Navigation } from "swiper/modules";
import Loading from "../../Loading";
import { unavailable } from "../../../helpers/api";
import { Link } from "react-router-dom";
import "./index.css";

const apiKey = "4fba95dbf46cd77d415830c228c9ef01"; // Replace with your actual API key

export default function DirectorsSlider({ title }) {
    const [directors, setDirectors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchDirectorsFromAllMovies() {
            try {
                // Fetch a list of movies
                const response = await fetch(
                    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=fa-IR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
                );
                const data = await response.json();
                const movies = data.results;

                // Iterate through each movie and fetch its credits
                const directorsArray = [];
                for (const movie of movies) {
                    const creditsResponse = await fetch(
                        `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${apiKey}`
                    );
                    const creditsData = await creditsResponse.json();
                    const directorsInMovie = creditsData.crew.filter(
                        (member) =>
                            member.job === "Director" &&
                            member.profile_path !== null
                    );
                    directorsArray.push(...directorsInMovie);
                }

                setDirectors(directorsArray);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching directors data:", error);
                setLoading(false);
            }
        }

        fetchDirectorsFromAllMovies();
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
                        slidesPerView={2.1}
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
                        {directors.map((director, index) => (
                            <SwiperSlide
                                key={index}
                                className="DirectorsSlider h-100"
                            >
                                <Link
                                    to="/"
                                    className="d-flex flex-column align-center gap-2"
                                >
                                    {director.profile_path ? (
                                        <img
                                            loading="lazy"
                                            src={`https://image.tmdb.org/t/p/w500/${director.profile_path}`}
                                            alt={director.name}
                                            className="DirectorImg object-cover border-radius-50"
                                        />
                                    ) : (
                                        <p className="white-color">
                                            No image available
                                        </p>
                                    )}
                                    <h5 className="white-color">
                                        {director.name}
                                    </h5>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
        </div>
    );
}
