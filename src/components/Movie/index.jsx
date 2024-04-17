import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ratingDecimal from "../../helpers/ratingdecimal";
import "./index.css";

const apiKey = '4fba95dbf46cd77d415830c228c9ef01';

export default function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [stars, setStars] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [logoUrl, setLogoUrl] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US&append_to_response=images&include_image_language=en,jp,null`)
      .then(response => response.json())
      .then(data => {
        setMovie(data);
        // Extract logo URL from images object
        const logoUrl = data.images?.logos[0]?.file_path;
        setLogoUrl(logoUrl);
      })
      .catch(error => console.error('Error fetching movie:', error));

      fetch(`https://api.themoviedb.org/3/movie/${id}/images?api_key=${apiKey}&language=en`)
      .then(response => response.json())
      .then(data => {
        setImages(data.backdrops);
      })
      .catch(error => console.error('Error fetching movie images:', error));

    if (movie && movie.id) {
      fetch(`https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
          const topStars = data.cast.slice(0, 5).map(actor => actor.name);
          setStars(topStars);
          const directorsList = data.crew.filter(member => member.job === "Director").map(director => director.name);
          setDirectors(directorsList);
        })
        .catch(error => console.error('Error fetching movie credits:', error));
    }
  }, [id, movie]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const getGenreNames = () => {
    return movie.genres.map(genre => genre.name).join(", ");
  };

  return (
    <div>
    <div className="containerMovie position-relative z-0" style={{ backgroundImage: `url(https://media.themoviedb.org/t/p/original/${movie.backdrop_path})`, backgroundSize: 'cover', backgroundPosition: 'left top', marginBottom:'5rem'}}>
      <div className="dark-cover w-100 h-100 position-absolute top-0 right z-1"></div>
      <div className="container">
        <div className="d-flex flex-column justify-btw align-start h-100">
            <div className="d-flex justify-center align-center align-self-center position-relative z-3 h-100">
            <div className="col-4 d-flex flex-column justify-center align-start align-self-center gap-2 container-padding-2 h-100">
                <Link to={`/movie/${movie.id}`}>
                {logoUrl && <img src={`https://image.tmdb.org/t/p/w300/${logoUrl}`} alt={movie.name || movie.title} />}
                </Link>
                <h1 className="font-xl-12 white-color">{movie.title || movie.name}</h1>
                <div className="d-flex justify-start align-center gap-2">
                <div className="d-flex justify-center align-center">
                    <div>
                    <img src={require("../../images/IMDB.svg").default} alt="" />
                    </div>
                    <p className="white-color font-14">
                    {ratingDecimal(movie.vote_average)}
                    </p>
                </div>
                <div className="d-flex justify-center align-center">
                    <div>
                    <img src={require("../../images/subScript.svg").default} alt="" />
                    </div>
                    <p className="white-color font-12"> زیرنویس </p>
                </div>
                <div className="d-flex justify-center align-center">
                    <p className="white-color font-12">
                    {movie.release_date.substring(0, 4)}
                    </p>
                </div>
                </div>
                <p className="white-color font-12 font-weight-normal">{movie.overview}</p>
                <div className="d-flex  align-center justify-center gap-1">
                    <Link to="/" className="movieInnerBtn white-bgc d-flex flex-row align-center gap-1 border-radius-12  line-height-42">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" class="Component-icon-0-1-456"><path d="M14.66 8.347l-8.537-4.93c-.502-.287-1.12-.286-1.62.005s-.81.825-.81 1.404v9.858c-.001.58.307 1.115.808 1.406s1.12.293 1.62.005l8.537-4.93a1.64 1.64 0 0 0 0-2.82z"></path>
                    </svg>
                    <span className="black-color font-12 font-weight-normal">خرید اشتراک</span>
                    </Link>
                    <Link to="/" className="movieInnerMore  border-radius-12 line-height-42">
                    <span className="white-color font-12 font-weight-normal">پیش نمایش</span>
                    </Link>
                </div>
                <p className="light-white-font font-12 font-weight-normal">
                ستارگان: {stars.join(" - ")}
                </p>
                <p className="light-white-font font-12 font-weight-normal">
                کارگردان: {directors.join(" - ")}
                </p>
                <p className="genres light-white-font font-12 font-weight-normal">
                دسته بندی ها: {getGenreNames()}
                </p>
            </div>
            <div className="col-8">
            </div>
            </div>
        </div>
      </div>
    </div>
            <div className="d-flex justify-center align-center gap-2" style={{marginTop:'-1rem'}}>
            {images.map(image => (
                <div className="col-2">
                    <img className="w-100 h-auto object-cover" key={movie.id} src={`https://image.tmdb.org/t/p/original/${image.file_path}`} alt={image.file_path} />
                </div>
              ))}
            </div>
</div>
  );
}
