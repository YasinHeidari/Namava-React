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
import ratingDecimal from "../../helpers/ratingdecimal";
import "./index.css";
import MovieInfoHomePage from "../MovieInfoHomePage";

export default function SliderMovieTrending({title}) {
    const apiKey = 'api_key=4fba95dbf46cd77d415830c228c9ef01'; 
    const baseUrl = 'https://api.themoviedb.org/3';
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getApi() {
            setLoading(true);
            try {
                const response = await fetch(`${baseUrl}/trending/all/day?${apiKey}`);
                const jsonData = await response.json();
                setData(jsonData.results);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
            setLoading(false);
        }
        getApi();
    }, []);

    return (
        <div className="container">
            {loading ? <Loading /> : (
                <div className="d-flex flex-column justify-center align-start gap-2">
                <h3 className="white-color">{title}</h3>
                <Swiper
                    grabCursor={true}
                    keyboard={{
                        enabled: true,
                    }}
                    spaceBetween={30}
                    navigation={true}
                    slidesPerView= {7}
                    modules={[Navigation, Keyboard]}
                    className="mySwiper SliderContainer  col-12 d-flex flex-row justify-evenly align-center gap-4"
                >
                    {data.map((val) => (
                        
                        <SwiperSlide key={val.id} className="trendingMovieSlider h-auto">
                                <Link className="trendingMovieSliderLink d-flex flex-column gap-2 position-relative" to="">
                                    <div className="trendingMovieSliderItem w-100 h-100 position-relative z-0">
                                        <img
                                            className="w-100 h-100 border-radius-5 object-cover"
                                            src={val.poster_path ? `${img_300}/${val.poster_path}` : unavailable}
                                            alt={val.title}
                                        />
                                        <div className="darkMovieCover position-absolute z-1 top-0 right-0 w-100 h-100 d-flex flex-column justify-end align-start gap-1 border-radius-5">
                                                <div className="d-flex justify-center align-center"><div><img src={require("../../images/IMDB.svg").default} alt=""/></div><p className="white-color font-14">{ratingDecimal(val.vote_average)}</p></div>
                                                <div className="d-flex justify-center align-center"><div><img src={require("../../images/subScript.svg").default} alt=""/></div><p className="white-color font-12"> زیرنویس </p></div>
                                                {val.release_date && <div className="d-flex justify-center align-center"><p className="white-color font-12">فیلم - {val.release_date.substring(0,4)}</p></div>}
                                            </div>
                                    </div>
                                        <h5 className="white-color">{val.name || val.title}</h5>
                                </Link>
                                
                        </SwiperSlide>
                    ))}
                </Swiper>
                </div>
            )}
            <MovieInfoHomePage/>
        </div>
    );
    
}