import { Fragment } from "react";
import "./main.css";
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

const swiper = new Swiper();

export default function Main(){
    
        return (
          <Fragment>
            <Swiper
              spaceBetween={30}
              effect={'fade'}
              navigation={true}
              modules={[EffectFade, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                
              </SwiperSlide>
              <SwiperSlide>
                
              </SwiperSlide>
              <SwiperSlide>
                
              </SwiperSlide>
              <SwiperSlide>
                
              </SwiperSlide>
            </Swiper>
          </Fragment>
        );

}