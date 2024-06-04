import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './index.css';
import { Link } from 'react-router-dom';

export default function AboutUsSlider() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMoviesAndGenres() {
      try {
        const movieResponse = await axios.get('https://api.themoviedb.org/3/trending/all/week', {
          params: {
            api_key: '4fba95dbf46cd77d415830c228c9ef01',
          },
        });

        setMovies(movieResponse.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchMoviesAndGenres();
  }, []);

  return (
      <div className='col-12 d-flex flex-column justify-start align-start gap-2 aboutUsSlider'>
      <div className='container' style={{paddingTop:'20px'}}>
        <h3 className='font-md-16 font-14 line-height-md-28 line-height-24 white-color '>سریال‌های اختصاصی نماوا</h3>
      </div>
      <Swiper
        a11y={false}
        freeMode= {true}
        slidesPerView='auto' // Number of slides visible at once
        spaceBetween={5} // Space between slides
        loop={true}
        autoplay={{
          delay: 0.5, // Delay between transitions
          disableOnInteraction: false,
        }}
        speed={11000} // Transition speed (milliseconds)
        modules={[Autoplay]}
        loopAdditionalSlides={25}
        breakpoints={{
          0: {
            spaceBetween: 30,
          },
          480: {
            spaceBetween: 30,
          },
          767: {
            spaceBetween: 40,
          },
          992: {
            spaceBetween: 40,
          },
        }}
        className="mySwiper aboutUsSliderContainer col-12 d-flex justify-evenly align-center gap-2"
      >
        {movies.map((item) => (
          <SwiperSlide key={item.id} className='h-auto' style={{ width: '200px' }}>
            <Link to={item.media_type === 'movie' ? `/movie/${item.id}` : `/show/${item.id}`}>
              <img className='w-100 h-auto' src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title || item.name} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
