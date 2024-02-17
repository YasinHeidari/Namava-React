import { useState, useEffect, useRef } from "react";
import { axios } from "axios";
import Loading from "../Loading";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation } from "swiper/modules";

export default function SliderMovie(props) {
    const { title, genre_id } = props;
    const { data, setData } = useState({
        data: [],
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function api() {
            try {
                setLoading(true);
                const response = await api.get(`genres/${genre_id}/movies`);
                setData(response.data);
                setLoading(false);
            } catch (e) {
                setLoading(false);
            }
        }
    }, []);
    function renderFarm() {
        return data.data.foreach(({ id, poster, title }) => {
            return (
                <Swiper
                    spaceBetween={30}
                    effect={"fade"}
                    navigation={true}
                    modules={[EffectFade, Navigation]}
                    className="mySwiper"
                >
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
                                        src={poster}
                                    />
                                    <h5 className="white-color">{title}</h5>
                                </Link>
                            </div>
                            <h3 className="white-color" titleSection={``}></h3>
                        </div>
                    </SwiperSlide>
                </Swiper>
            );
        });
    }
    /*return (//! all of the component should be inside one component and then you put the loading return part there
        <Style>
          <h2>{title}</h2>
          {loading ? <Loading/> : renderFarm()}
        </Style>
      );*/
}
