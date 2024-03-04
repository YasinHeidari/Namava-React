/*import { useState, useEffect, useRef } from "react";
import { img_300 } from "../../helpers/api";
import { unavailable } from "../../helpers/api";
import Loading from "../Loading";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Keyboard, Navigation } from "swiper/modules";

export default function SliderMovie(props) {
    const apiKey = 'api_key=4fba95dbf46cd77d415830c228c9ef01'; 
    const baseUrl = 'https://api.themoviedb.org/3';
    const { Title, genre} = props;
    const { data, setData } = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getApi() {
            const data = await fetch(`${baseUrl}/trending/all/day?api_key=${apiKey}`);
            const dataJ = await data.json(); 
            setData(dataJ.results);
          };
    }, []);
    
    function renderFarm({Title}) {
        return data.map((Val) => {
            const {
              name,
              title,
              poster_path,
              first_air_date,
              release_date,
              media_type,
              id,
            } = Val;
            
            return (
                <div className="d-flex flex-column-reverse justify-evenly gap-4">
                    <Swiper
                        grabCursor={true}
                        keyboard={{
                        enabled: true,
                        }}
                        spaceBetween={30}
                        navigation={true}
                        modules={[ Navigation , Keyboard]}
                        className="mySwiper">
                        <SwiperSlide className="d-flex flex-column-reverse justify-evenly gap-4">
                            <div className="movieSliderItems col-12 d-flex flex-row justify-evenly align-center gap-4">
                                <div
                                    key={id}
                                    className="darkMovieCover movieSliderItem col-2 white-color"
                                >
                                    <Link
                                        to={``}
                                        className="d-flex flex-column gap-2"
                                    >
                                        <img
                                            className="w-100 h-auto border-radius-5 object-cover"
                                            src={poster_path ? `${img_300}/${poster_path}`: unavailable} alt=""
                                        />
                                        <h5 className="white-color">{name}</h5>
                                    </Link>
                                </div>
                                <h3 className="white-color" titleSection={``}></h3>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <h3 className="white-color">${Title}</h3>
                </div>
            );
        });
    }
    return (//! all of the component should be inside one component and then you put the loading return part there
        <>
          {loading ? <Loading/> : renderFarm()}
        </>
      );
}
*/
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
    const apiKey = 'api_key=4fba95dbf46cd77d415830c228c9ef01'; 
    const baseUrl = 'https://api.themoviedb.org/3';
    const { title } = props;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getApi() {
            setLoading(true);
            try {
                const response = await fetch(`${baseUrl}/genre/movie/list?${apiKey}`);
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
                <Swiper
                    grabCursor={true}
                    keyboard={{
                        enabled: true,
                    }}
                    spaceBetween={30}
                    navigation={true}
                    slidesPerView= {7}
                    modules={[Navigation, Keyboard]}
                    className="mySwiper sliderMovieSwiper movieSliderItems col-12 d-flex flex-row justify-evenly align-center gap-4"
                >
                    {data.map((val) => (
                        <SwiperSlide key={val.id} className="col-2 white-color">
                                <Link className="movieSliderItemLink d-flex flex-column gap-2 position-relative" to="">
                                    <div className="darkMovieCover movieSliderItem">
                                        <img
                                            className="w-auto h-auto border-radius-5 object-cover"
                                            src={val.poster_path ? `${img_300}/${val.poster_path}` : unavailable}
                                            alt=""
                                        />
                                        <h5 className="white-color">{val.name}</h5>
                                    </div>
                                </Link>
                                <div className="d-flex flex-row justify-content align-center gap-4">
                                    <h3 className="white-color" titlesection=""></h3>
                                    <Link to="/">
                                        <p>مشاهده همه</p>
                                        <img src="" alt=""/>
                                    </Link>
                                </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
}
