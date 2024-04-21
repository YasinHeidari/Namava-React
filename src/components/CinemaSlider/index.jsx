// import React, { useState, useEffect } from "react";
// import { img_300 } from "../../helpers/api";
// import { unavailable } from "../../helpers/api";
// import Loading from "../Loading";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Keyboard, Navigation } from "swiper/modules";

// import "./index.css";
// import MovieInfoHomePage from "../MovieInfoHomePage";



// export default function CinemaSlider() {
//   const [selectedMovie, setSelectedMovie] = useState(null);
//   const [isInfoVisible, setIsInfoVisible] = useState(false); // State to control visibility of movie info
//   const [selectedSliderIndex, setSelectedSliderIndex] = useState(null);

//   const handleMovieSelect = (movie , index) => {
//     setSelectedMovie(movie);
//     setIsInfoVisible(true); // Show movie info when a movie is selected
//     setSelectedSliderIndex(index);
//   };

//   const handleInfoToggle = () => {
//     setIsInfoVisible(false); // Hide movie info when the button is clicked
//     setSelectedSliderIndex(null); 
//   };

//   return (
//     <div className="w-100" >
//       <div className="d-flex flex-column align-center gap-2">
//         <div className="container">
          
//             <div className="d-flex flex-column justify-center align-start gap-2" >
              
//               <Swiper
//                 grabCursor={true}
//                 keyboard={{
//                   enabled: true,
//                 }}
//                 spaceBetween={15}
//                 navigation={true}
//                 slidesPerView={7.2}
//                 slidesOffsetAfter={20}
//                 slidesOffsetBefore={0}
//                 slidesPerGroup={7}
//                 watchOverflow={true}
//                 speed={800}
//                 modules={[Navigation, Keyboard]}
//                 className="mySwiper SliderContainer col-12 d-flex flex-row justify-evenly align-center"
//               >
//                     <SwiperSlide className={`movieSlider h-auto d-flex flex-column align-center ${selectedSliderIndex === index ? 'selected' : ''}`} onClick={() => handleMovieSelect(movie,index)}>
//                       <div className="movieSliderLink d-flex flex-column gap-1 position-relative">
//                         <div className="movieSliderItem w-100 h-100 position-relative z-0">
                            
//                             <img src="https://static.namava.ir/Content/Upload/Images/fb7430f2-e826-4d44-a911-7b57795d8c5f.jpg?anchor=middlecenter&amp;crop=auto&amp;scale=both&amp;w=360&amp;h=171" srcset="https://static.namava.ir/Content/Upload/Images/fb7430f2-e826-4d44-a911-7b57795d8c5f.jpg?anchor=middlecenter&amp;crop=auto&amp;scale=both&amp;w=360&amp;h=171 1x,https://static.namava.ir/Content/Upload/Images/fb7430f2-e826-4d44-a911-7b57795d8c5f.jpg?anchor=middlecenter&amp;crop=auto&amp;scale=both&amp;w=600&amp;h=285 2x" alt="احمد به تنهایی" title="احمد به تنهایی" className="w-100 h-100 border-radius-5 object-cover"/>
//                           <div className="darkMovieCover position-absolute z-1 top-0 right-0 w-100 h-100 d-flex flex-column justify-end align-start gap-1 border-radius-5">
//                             <div className="d-flex justify-center align-center"><div><img src={require("../../images/IMDB.svg").default} alt=""/></div><p className="white-color font-14">6.4</p></div>
//                             <div className="d-flex justify-center align-center"><div><img src={require("../../images/subScript.svg").default} alt=""/></div><p className="white-color font-12"> زیرنویس </p></div>
//                             <div className="d-flex justify-center align-center"><p className="white-color font-12">فیلم - ۱۴۰۰</p></div>
//                           </div>
//                         </div>
//                         <h5 className="white-color line-height-28">احمد به تنهایی</h5>
//                         {selectedSliderIndex === index && (  
//                           <button onClick={handleInfoToggle} className="hideInfoButton border-radius-4 d-flex align-self-center" style={{margin:'2.5rem 0 2rem'}}>
//                           </button>
//                         )}
//                       </div>
//                     </SwiperSlide>
//                     <SwiperSlide className={`movieSlider h-auto d-flex flex-column align-center ${selectedSliderIndex === index ? 'selected' : ''}`} onClick={() => handleMovieSelect(movie,index)}>
//                       <div className="movieSliderLink d-flex flex-column gap-1 position-relative">
//                         <div className="movieSliderItem w-100 h-100 position-relative z-0">
                            
//                         <img src="https://static.namava.ir/Content/Upload/Images/2983f2aa-b689-45a5-9f16-5fb7db02985f.jpg?anchor=middlecenter&amp;crop=auto&amp;scale=both&amp;w=360&amp;h=171" srcset="https://static.namava.ir/Content/Upload/Images/2983f2aa-b689-45a5-9f16-5fb7db02985f.jpg?anchor=middlecenter&amp;crop=auto&amp;scale=both&amp;w=360&amp;h=171 1x,https://static.namava.ir/Content/Upload/Images/2983f2aa-b689-45a5-9f16-5fb7db02985f.jpg?anchor=middlecenter&amp;crop=auto&amp;scale=both&amp;w=600&amp;h=285 2x" alt="آبجی" title="آبجی" className="w-100 h-100 border-radius-5 object-cover"/>
//                           <div className="darkMovieCover position-absolute z-1 top-0 right-0 w-100 h-100 d-flex flex-column justify-end align-start gap-1 border-radius-5">
//                             <div className="d-flex justify-center align-center"><div><img src={require("../../images/IMDB.svg").default} alt=""/></div><p className="white-color font-14">6.4</p></div>
//                             <div className="d-flex justify-center align-center"><div><img src={require("../../images/subScript.svg").default} alt=""/></div><p className="white-color font-12"> زیرنویس </p></div>
//                             <div className="d-flex justify-center align-center"><p className="white-color font-12">فیلم - ۱۳۹۴</p></div>
//                           </div>
//                         </div>
//                         <h5 className="white-color line-height-28">آبجی</h5>
//                         {selectedSliderIndex === index && (  
//                           <button onClick={handleInfoToggle} className="hideInfoButton border-radius-4 d-flex align-self-center" style={{margin:'2.5rem 0 2rem'}}>
//                           </button>
//                         )}
//                       </div>
//                     </SwiperSlide>
                  
//               </Swiper>
//             </div>
          
//         </div>
//       </div>
//       {selectedMovie && isInfoVisible && <MovieInfoHomePage movie={selectedMovie} />}
//     </div>
//   );
// };
