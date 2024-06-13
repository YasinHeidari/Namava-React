import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ratingDecimal from "../../helpers/ratingdecimal";
import StarInner from "./StarSliderInnerMovie";
import DirectorInner from "./DirectorInner";
import SliderMovieInner from "./SliderMovieInnerMovie";
import CinemaSlider from "../CinemaSlider";
import CommentContainer from "./MovieInnerComment";
import IMDB from '../../images/IMDB.svg';
import SubScript from '../../images/subScript.svg';
import ScrollToTop from "../../helpers/ScrollToTop";
import "./index.css";
import SpinnerLoading from "../Loading/SpinnerLoading";
import MovieToolTiplg from "./MovieTooltip/MovieTooltiplg";
import MovieToolTipsm from "./MovieTooltip/MovieTooltipsm";
import getResponsiveBackgroundImageMovie from "../../helpers/ResponsiveBgImageMovie";

const apiKey = '4fba95dbf46cd77d415830c228c9ef01';

export default function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [stars, setStars] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [logoUrl, setLogoUrl] = useState(null);
  const [images, setImages] = useState([]);
  const [posters, setPosters] = useState([]);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const movieResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US&append_to_response=images&include_image_language=en,fa,jp,null`);
        const movieData = await movieResponse.json();
        setMovie(movieData);

        const imagesResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}/images?api_key=${apiKey}&language=en-US&append_to_response=images&include_image_language=en,jp,null`);
        const imagesData = await imagesResponse.json();
        setImages(imagesData.backdrops);
        const logoUrls = imagesData?.logos.map(logo => logo.file_path).filter(path => path);
        const firstNonNullLogoUrl = logoUrls.find(url => url !== null);
        setLogoUrl(firstNonNullLogoUrl);
        setPosters(imagesData.posters);

        const creditsResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US&append_to_response=images&include_image_language=fa,jp`);
        const creditsData = await creditsResponse.json();
        const topStars = creditsData.cast.slice(0, 5).map(actor => actor.name);
        setStars(topStars);
        const directorsList = creditsData.crew.filter(member => member.job === "Director").map(director => director.name);
        setDirectors(directorsList);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching movie data:', error);
        setLoading(false);
      }
    };

    fetchMovieData();
  }, [id]);

  useEffect(() => {
    if (!loading && movie) {
      updateBackgroundImage();
      window.addEventListener('resize', updateBackgroundImage);
      return () => {
        window.removeEventListener('resize', updateBackgroundImage);
      };
    }
  }, [loading, movie]);

  const updateBackgroundImage = () => {
    const heroSection = document.querySelector('.movieSlider');
    if (heroSection && movie) {
      heroSection.style.backgroundImage = getResponsiveBackgroundImageMovie(movie);
    }
  };

  if (loading || movie === null) {
    return <SpinnerLoading />;
  }

  const getGenreNames = () => {
    return movie.genres.map(genre => genre.name).join(" ، ");
  };

  return (
    <div style={{ margin: '-5rem 0 7rem', paddingTop: '80px' }}>
      <ScrollToTop />
      <div className="containerMovie heroSectionMovie movieSlider" data-movie-id={movie.id}>
        <div className="container">
          <div className="heroSectionMovieInfo d-flex flex-column justify-btw align-start h-100">
            <div className="col-md-6 col-12 d-flex flex-column justify-center align-lg-start align-center align-self-lg-start align-self-center gap-2 container-padding-2 h-100">
              <Link to={`/movie/${movie.id}`} className="col-xl-9 col-lg-6 d-lg-block d-none h-auto">
                {logoUrl && <img loading="lazy" className="logoImg w-100" src={`https://image.tmdb.org/t/p/w300/${logoUrl}`} alt={movie?.name || movie?.title} />}
              </Link>
              <h1 className="font-xl-20 font-md-18 font-14 white-color">{movie?.title || movie?.name}</h1>
              <div className="d-flex justify-start align-center gap-2">
                <div className="d-flex justify-center align-end vertical-middle">
                  <img loading="lazy" className="d-inline-block" src={IMDB} alt="IMDB" />
                  <p className="white-color font-14">
                    {ratingDecimal(movie.vote_average)}
                  </p>
                </div>
                <div className="d-flex justify-center align-center vertical-middle">
                  <img loading="lazy" className="d-inline-block" src={SubScript} alt="subScript" />
                  <p className="white-color font-xl-12 font-xs-10 font-sm-10 "> زیرنویس </p>
                </div>
                <p className="white-color font-xl-12 font-xs-10 font-sm-10">
                  {movie.release_date.substring(0, 4)}
                </p>
                <p className="white-color font-xl-14 font-sm-12 font-xs-12 font-weight-normal">{movie?.runtime} دقیقه</p>
              </div>
              <p className="white-color font-12 font-weight-normal" style={{ lineHeight: '1.75' }}>
                {movie.overview.length > 50 ? `${movie.overview.substring(0, 50)}...` : movie.overview}
              </p>
              <div className="d-flex align-center justify-evenly gap-2">
                <Link to="/" className="movieInnerBtn white-bgc d-flex flex-row align-center gap-1 border-radius-12 line-height-42">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M14.66 8.347l-8.537-4.93c-.502-.287-1.12-.286-1.62.005s-.81.825-.81 1.404v9.858c-.001.58.307 1.115.808 1.406s1.12.293 1.62.005l8.537-4.93a1.64 1.64 0 0 0 0-2.82z"></path></svg>
                  <span className="black-color font-12 font-weight-normal">خرید اشتراک</span>
                </Link>
                <Link to="/" className="movieInnerMore border-radius-12 line-height-42">
                  <span className="white-color font-12 font-weight-normal">پیش نمایش</span>
                </Link>
                <MovieToolTiplg />
              </div>
              <p className="d-md-block d-none light-white-font font-12 font-weight-normal">
                ستارگان: {stars.join(" ، ")}
              </p>
              <p className="d-md-block d-none light-white-font font-12 font-weight-normal">
                کارگردان: {directors.join(" - ")}
              </p>
              <p className="d-md-block d-none light-white-font font-12 font-weight-normal">
                دسته بندی ها: {getGenreNames()}
              </p>
              <MovieToolTipsm />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column gap-8">
        <div className="container">
          <div className="d-flex flex-column gap-3">
            <h3 className="white-color font-lg-18 font-16">تصاویر و جزییات</h3>
            <div className="d-flex align-self-start gap-xl-2 justify-lg-evenly flex-lg-nowrap flex-wrap" style={{ marginBottom: "1rem" }}>
              {images.slice(0, 5).map(image => (
                <div className="col-md-3 col-4" key={image.file_path} style={{ padding: '.2rem' }}>
                  <img loading="lazy" className="w-100 h-auto object-cover border-radius-4" key={movie.id} src={`https://image.tmdb.org/t/p/original${image.file_path}`} alt={image.file_path} />
                </div>
              ))}
            </div>
          </div>
          <div className="d-flex flex-column gap-4">
            <h2 className="white-color font-md-14 font-12 font-weight-normal">{movie?.name || movie?.title}</h2>
            <h2 className="white-color font-lg-18 font-16 font-weight-normal">درباره فیلم {movie?.name || movie?.title}</h2>
            <p className="light-white-font font-md-14 font-12 font-weight-normal" style={{ lineHeight: '2' }}>{movie?.overview}</p>
            <p className="white-color font-lg-14 font-12 font-weight-normal">
              دسته بندی ها: {getGenreNames()}
            </p>
            <div className="d-flex justify-start align-start gap-3">
              <p className="white-color font-14 font-weight-normal">صدا: انگلیسی</p>
              <p className="white-color font-14 font-weight-normal">زیرنویس: ندارد</p>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column gap-4">
          <div className="d-flex flex-column justify-center align-start gap-3">
            <h3 className="white-color containerInnerMovie font-md-18 font-16">بازیگران فیلم {movie?.name || movie?.title}</h3>
            <StarInner movieId={id} />
          </div>
          <div className="d-flex flex-column justify-center align-start gap-3">
            <h3 className="white-color containerInnerMovie font-md-18 font-16">عوامل فیلم {movie?.name || movie?.title}</h3>
            <DirectorInner movieId={id} />
          </div>
          <div className="d-flex flex-column justify-center align-start gap-3">
            <CinemaSlider />
          </div>
          <div className="d-flex flex-column justify-center align-start gap-3">
            <h3 className="white-color containerInnerMovie font-md-18 font-16">بر اساس "{movie?.name || movie?.title}"</h3>
            <SliderMovieInner movies={movies} genreId={28} />
          </div>
        </div>
        <CommentContainer movieId={movie.id} />
      </div>
    </div>
  );
}

