import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import SpinnerLoading from "../Loading/SpinnerLoading";
import Error from "../Error";
import { Link } from "react-router-dom";
import ratingDecimal from "../../helpers/ratingdecimal";
import SubScript from "../../images/subScript.svg";
import IMDB from "../../images/IMDB.svg";
import "./index.css"
import ScrollToTop from "../../helpers/ScrollToTop";

const apiKey = "4fba95dbf46cd77d415830c228c9ef01";

export default function Stars() {
  const [data, setData] = useState(null);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [moviesLoading, setMoviesLoading] = useState(true);
  const [error, setError] = useState(null);
  const [moviesError, setMoviesError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);   
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const [selectedSliderIndex, setSelectedSliderIndex] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const navigate = useNavigate(); 
  const { id } = useParams();

  useEffect(() => {
    async function fetchStar() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}&language=fa-IR`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch star data");
        }
        const data = await res.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    async function fetchMovies() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${apiKey}&language=fa-IR`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await response.json();
        setMovies(
          data.cast.filter((movie) => movie.poster_path && movie.title)
        );
      } catch (error) {
        setMoviesError(error.message);
      } finally {
        setMoviesLoading(false);
      }
    }

    fetchStar();
    fetchMovies();
  }, [id]);

  
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  if (loading) {
    return <SpinnerLoading/>;
  }

  if (error) {
    return <Error/>;
  }


  const handleMovieSelect = (movie, show, index) => {
    const mediaType = movie.media_type;
    const urlPath =
      mediaType === "movie" ? `/movie/${movie.id}` : `/show/${show.id}`;
    if (screenWidth < 992) {
      navigate(urlPath); // Navigate to movie details
    } else {
      setSelectedMovie(movie);
      setIsInfoVisible(true);
      setSelectedSliderIndex(index);
    }
  };

  const handleInfoToggle = () => {
    setIsInfoVisible(false); // Hide movie info when the button is clicked
    setSelectedSliderIndex(null);
  };


  return (
    <div className="d-flex flex-column gap-8 container" style={{ paddingTop: "80px" }}>
    <ScrollToTop/>
      <div className="d-flex flex-lg-row flex-column justify-lg-start justify-center align-center gap-lg-2 gap-4 ">
        <div className="col-xl-2 col-lg-3 col-6  d-flex justify-center align-center">
          <img
            src={`https://image.tmdb.org/t/p/w500${data?.profile_path}`}
            className="col-lg-11 col-md-6 col-8 col-xs-12 star-img border-radius-50 object-cover"
            alt={data?.name}
          />
        </div>
        <div className="col-lg-10 col-11 d-flex flex-column gap-4 justify-start align-lg-start align-center">
          <h2 className="font-md-24 white-color">بیوگرافی {data?.name}</h2>
          <p
            className="white-color line-height-28 text-lg-right text-center" style={{textWrap: 'wrap'}}
          >
            {data?.biography?.length > 0
              ? data?.biography
              : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."}
          </p>
        </div>
      </div>
      <div className="col-12 h-100 d-flex flex-column align-start gap-4 container">
        <h3 className="white-color font-xxl-16 ">فیلم های {data?.name} </h3>

        {moviesLoading ? (
          <SpinnerLoading />
        ) : (
          <div className="starsMovieContainer  gap-md-3 gap-1" style={{marginBottom:'2rem'}}>
            {movies.map((movie) => (
              <Link
                to={`/movie/${movie?.id}`}
                key={movie?.id}
                className="starSliderLinkContainer col-sm-12"
              >
                <div className="starMovieSliderLink col-12 d-flex flex-column gap-1 position-relative">
                  <div className="movieSliderItem col-12 w-100 h-100 position-relative z-0">
                    <div className="starSliderLink">
                      <img
                        src={`https://image.tmdb.org/t/p/w200${movie?.poster_path}`}
                        alt={movie?.title || movie?.name}
                        className="w-100 h-100 border-radius-5 object-cover"
                      />
                    </div>
                    <div className="darkMovieCover position-absolute z-1 top-0 right-0 w-100 h-100 d-flex flex-column justify-end align-start gap-1 border-radius-5">
                      <div className="d-flex justify-center align-end  vertical-middle">
                        <img className="d-inline-block" src={IMDB} alt="" />
                        <p className="white-color font-14">
                          {ratingDecimal(movie?.vote_average)}
                        </p>
                      </div>
                      <div className="d-flex justify-center align-center vertical-middle">
                        <img
                          className="d-inline-block"
                          src={SubScript}
                          alt=""
                        />
                        <p className="white-color font-12"> زیرنویس </p>
                      </div>
                      <div className="d-flex justify-center align-center">
                        <p className="white-color font-12">
                          فیلم - {movie?.release_date.substring(0, 4)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <h5 className="white-color line-height-28">
                    {movie?.title || movie?.name}
                  </h5>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
