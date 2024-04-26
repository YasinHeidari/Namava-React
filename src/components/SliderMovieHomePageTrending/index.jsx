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
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [isInfoVisible, setIsInfoVisible] = useState(false); // State to control visibility of movie info
    const [selectedSliderIndex, setSelectedSliderIndex] = useState(null);

    useEffect(() => {
        async function getApi() {
            setLoading(true);
            try {
                const response = await fetch(`${baseUrl}/trending/all/day?${apiKey}`);
                const jsonData = await response.json();
                setMovies(jsonData.results);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
            setLoading(false);
        }
        getApi();
    }, []);
    const handleMovieSelect = (movie , index) => {
        setSelectedMovie(movie);
        setIsInfoVisible(true); // Show movie info when a movie is selected
        setSelectedSliderIndex(index);
      };
    
      const handleInfoToggle = () => {
        setIsInfoVisible(false); // Hide movie info when the button is clicked
        setSelectedSliderIndex(null); 
      };

    return (
    <div className="w-100" >
      <div className="d-flex flex-column align-center gap-2">
        <div className="container">
          {loading ? (
            <Loading />
          ) : (
            <div className="d-flex flex-column justify-center align-start gap-2" >
              <h3 className="white-color">{title}</h3>
              <Swiper
                grabCursor={true}
                keyboard={{
                  enabled: true,
                }}
                spaceBetween={15}
                navigation={true}
                slidesPerView={7.2}
                slidesOffsetAfter={20}
                slidesOffsetBefore={0}
                slidesPerGroup={7}
                watchOverflow={true}
                speed={800}
                modules={[Navigation, Keyboard]}
                className="mySwiper SliderContainer col-12 d-flex flex-row justify-evenly align-center"
              >
                {movies.length > 0 ? (
                  movies.map((movie , index) => (
                    <SwiperSlide key={movie.id} className={`movieSlider h-auto d-flex flex-column align-center ${selectedSliderIndex === index ? 'selected' : ''}`} onClick={() => handleMovieSelect(movie,index)}>
                      <div className="movieSliderLink d-flex flex-column gap-1 position-relative">
                        <div className="movieSliderItem w-100 h-100 position-relative z-0">
                          <img
                            className="w-100 h-100 border-radius-5 object-cover"
                            src={movie.poster_path ? `${img_300}/${movie.poster_path}` : unavailable}
                            alt={movie.title}
                          />
                          <div className="darkMovieCover position-absolute z-1 top-0 right-0 w-100 h-100 d-flex flex-column justify-end align-start gap-1 border-radius-5">
                            <div className="d-flex justify-center align-center"><div><img src={require("../../images/IMDB.svg").default} alt=""/></div><p className="white-color font-14">{ratingDecimal(movie.vote_average)}</p></div>
                            <div className="d-flex justify-center align-center"><div><img src={require("../../images/subScript.svg").default} alt=""/></div><p className="white-color font-12"> زیرنویس </p></div>
                            <p className="white-color font-12">فیلم - {movie.release_date ? movie.release_date.substring(0,4) : 'N/A'}</p>

                          </div>
                        </div>
                        <h5 className="white-color line-height-28">{movie.title || movie.name}</h5>
                        {selectedSliderIndex === index && (  
                          <button onClick={handleInfoToggle} className="hideInfoButton border-radius-4 d-flex align-self-center" style={{margin:'2.5rem 0 2rem'}}>
                          </button>
                        )}
                      </div>
                    </SwiperSlide>
                  ))
                ) : (
                  <p>No movies available for this genre</p>
                )}
              </Swiper>
            </div>
          )}
        </div>
      </div>
      {selectedMovie && isInfoVisible && <MovieInfoHomePage movie={selectedMovie} />}
    </div>
  );
    
}