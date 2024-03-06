import { useState, useEffect } from "react";
import { img_300 } from "../../helpers/api";
import { unavailable } from "../../helpers/api";
import Loading from "../Loading";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Navigation } from "swiper/modules";

export default function SliderMovie(props) {
    const apiKey = "api_key=4fba95dbf46cd77d415830c228c9ef01";
    const baseUrl = "https://api.themoviedb.org/3";
    const { title , genre_id } = props;
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getMovies() {
            setLoading(true);
            try {
                const response = await fetch(
                    `${baseUrl}/genre/movie/list?${apiKey}`/*&callback=jQuery22408132628371243029_1471207855881&_=1471207855884*/
                );
                const jsonData = await response.json();
                setMovies(jsonData.genres);
                console.log(jsonData, "hi")
            } catch (error) {
                console.error("Error fetching data:", error);
            }
            setLoading(false);
        }
        getMovies();
    }, []);

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
                    slidesPerView={7}
                    modules={[Navigation, Keyboard]}
                    className="mySwiper sliderMovieSwiper movieSliderItems col-12 d-flex flex-row justify-evenly align-center gap-4"
                >
                    {movies &&
                        movies.map((movie) => (
                            <SwiperSlide
                                key={movie.id}
                                className="col-2 white-color"
                            >
                                <Link
                                    className="movieSliderItemLink d-flex flex-column gap-2 position-relative"
                                    to=""
                                >
                                    <div className="darkMovieCover movieSliderItem">
                                        <img
                                            className="w-auto h-auto border-radius-5 object-cover"
                                            src={
                                                movie.poster_path
                                                    ? `${img_300}/${movie.poster_path}`
                                                    : unavailable
                                            }
                                            alt=""
                                        />
                                        <h5 className="white-color">
                                            {movie.title}
                                        </h5>
                                    </div>
                                </Link>
                                <div className="d-flex flex-row justify-content align-center gap-4">
                                    <h3
                                        className="white-color"
                                        titlesection=""
                                    ></h3>
                                    <Link to="/">
                                        <p className="d-none">مشاهده همه</p>
                                        <img src="" alt="" />
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
            )}
        </div>
    );
}
