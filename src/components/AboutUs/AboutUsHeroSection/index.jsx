import React from 'react';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { EffectFade ,Autoplay } from 'swiper/modules';
import "./index.css";
export default function AboutUsHeroSection(){

    const backDropImg=[
        {   key:1,
            backdrop: 'https://static.namava.ir/Content/Upload/Images/5cd23d48-78e2-43dd-a92c-12274a1ba2b8.jpg'},
        {   key:2,
            backdrop: 'https://static.namava.ir/Content/Upload/Images/2e777998-457b-45b8-806f-7b843f4759e4.jpg'},
        {   key:3,
            backdrop: 'https://static.namava.ir/Content/Upload/Images/294cfd61-05a6-4b09-a40a-341f4b87c7a7.jpg'},
        {   key:4,
            backdrop: 'https://static.namava.ir/Content/Upload/Images/37123f84-742d-4412-b8bb-fcbf2c9b828d.jpg'},
        {   key:5,
            backdrop: 'https://static.namava.ir/Content/Upload/Images/3b1b0faa-2d01-4750-a47d-e40c7d1d9da4.jpg'}
    ]
    return(
        <div className="aboutUsHeroSectionImg d-flex flex-column justify-end align-center gap-2 col-12 ">
            <Swiper
            slidesPerView={1}
            autoplay={{ delay: 4500 }}
            effect={'fade'}
            loop={true}
            pagination={{ clickable: true }}
            
            modules={[ EffectFade, Autoplay]}
            className="mySwiper col-12 d-lg-none h-100"
            >
                {backDropImg.map((image) => (
                    <SwiperSlide key={image.key} className='col-12' style={{
                            backgroundImage: `url(${image.backdrop})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat:'no-repeat',
                            height:'50vh',
                        }}>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="d-flex flex-column justify-end align-center gap-2 col-md-12 col-9" style={{marginTop:'5vh'}}>
                    <h2 className="white-color font-xl-28 font-md-20 font-18 text-center font-weight-normal">
                        تماشای آنلاین فیلم، سریال، انیمیشن و مسابقات ورزشی
                    </h2>
                    <p className="white-color font-xl-18 font-md-16 font-12 text-center">
                        تماشای آنلاین جدیدترین فیلم ها، سریال ها، انیمیشن ها و
                        همچنین پخش زنده‌ مسابقات ورزشی در نماوا.
                        <br />
                        برای مشاهده‌ی محتوای دلخواهتان ثبت‌نام کنید.
                    </p>
                    <Link
                        to="/"
                        className="aboutUsIntroLink d-flex justify-center align-center text-center white-color font-xl-16 font-md-14 font-12 border-radius-12"
                    >
                        <span>تماشای فیلم و سریال</span>
                    </Link>
            </div>
        </div>
    )
}