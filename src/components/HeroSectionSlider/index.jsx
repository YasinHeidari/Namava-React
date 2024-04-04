import { useState, useEffect } from "react";
import Loading from "../Loading";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation , Pagination } from "swiper/modules";
import "./index.css"

export default function HeroSectionSlider() {
    
            return (
                <div>
                { Loading ? 
                (<Loading/>) :(
                    <Swiper 
                    slidesPerView={1}
                    spaceBetween={30}
                    effect={"fade"}
                    navigation={true}
                    modules={[EffectFade, Navigation ,Pagination]}
                    loop={true}
                    pagination={{
                    clickable: true,
                    }}
                    className="mySwiper heroSectionSliderContainer"
                >
                    <SwiperSlide className="heroSectionSlider w-100 h-auto d-flex flex-column justify-center align-start">
                        <img className="object-cover w-100 h-auto" src="https://image.tmdb.org/t/p/w300//ykZ7hlShkdRQaL2aiieXdEMmrLb.jpg" alt=""/>
                    </SwiperSlide>
                    
                </Swiper>)}
                </div>
            );
        
    }
    

