import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ratingDecimal from "../../helpers/ratingdecimal";
import SliderMovieInner from "../Movie/SliderMovieInnerMovie";
import CinemaSlider from "../CinemaSlider";
import IMDB from "../../images/IMDB.svg";
import SubScript from "../../images/subScript.svg";
import ScrollToTop from "../../helpers/ScrollToTop";
import SpinnerLoading from "../Loading/SpinnerLoading";
import DirectorInnerShow from "./DirectorInnerShow";
import StarInnerShow from "./StarInnerShow";
import ShowCommentContainer from "./ShowInnerComment";
import Episode from "./Episodes";
import getResponsiveBackgroundImageShow from "../../helpers/ResponsiveBgImageShow";
import showTooltipsm from "./ShowTooltip/showTooltipsm";
import "./index.css";


const apiKey = "4fba95dbf46cd77d415830c228c9ef01";

export default function Show() {
    const { id } = useParams();
    const [series, setSeries] = useState(null);
    const [stars, setStars] = useState([]);
    const [directors, setDirectors] = useState([]);
    const [logoUrl, setLogoUrl] = useState(null);
    const [images, setImages] = useState([]);
    const [posters, setPosters] = useState([]); // Added posters state
    const [loading, setLoading] = useState(true);
    const [numberOfSeasons, setNumberOfSeasons] = useState(null);
    const [popularity, setPopularity] = useState(null);

    useEffect(() => {
        const fetchSeriesData = async () => {
            try {
                const seriesResponse = await fetch(
                    `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-US&append_to_response=images&include_image_language=en,fa,jp,null`
                );
                const seriesData = await seriesResponse.json();
                setSeries(seriesData);

                const imagesResponse = await fetch(
                    `https://api.themoviedb.org/3/tv/${id}/images?api_key=${apiKey}&language=en-US&append_to_response=images&include_image_language=en,jp,null`
                );
                const imagesData = await imagesResponse.json();
                setImages(imagesData.backdrops);

                const logoUrls = imagesData?.logos.map(logo => logo.file_path).filter(path => path);
                const firstNonNullLogoUrl = logoUrls.find(url => url !== null);
                setLogoUrl(firstNonNullLogoUrl);
                setPosters(imagesData.posters); // Set posters data

                const creditsResponse = await fetch(
                    `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${apiKey}&language=fa-IR&append_to_response=images&include_image_language=en,fa,jp`
                );
                const creditsData = await creditsResponse.json();
                const topStars = creditsData.cast.slice(0, 5).map(actor => actor.name);
                setStars(topStars);

                const directorsList = creditsData.crew.filter(member => member.job === "Director").map(director => director.name);
                setDirectors(directorsList);

                setNumberOfSeasons(seriesData.number_of_seasons);
                setPopularity(seriesData.popularity);

                setLoading(false); // Set loading to false after fetching data
            } catch (error) {
                console.error('Error fetching series data:', error);
                setLoading(false); // Set loading to false in case of error
            }
        };

        document.title = `سریال ${series?.name || series?.title}`;
        fetchSeriesData();
    }, [id]);

    useEffect(() => {
        if (!loading && series) {
          updateBackgroundImage();
          window.addEventListener('resize', updateBackgroundImage);
          return () => {
            window.removeEventListener('resize', updateBackgroundImage);
          };
        }
      }, [loading, series]);
    
      const updateBackgroundImage = () => {
        const heroSection = document.querySelector('.heroSectionMovie');
        if (heroSection && series) {
          heroSection.style.backgroundImage = getResponsiveBackgroundImageShow(series);
        }
      };

    

    if (loading || series === null) {
        return <SpinnerLoading />;
    }

    const getGenreNames = () => {
        if (series.genres && series.genres.length > 0) {
            return series.genres.map((genre) => genre.name).join(" ، ");
        } else {
            return 'هیچ ژانری ندارد :|';
        }
    };
    
    

    return (
        <div style={{ marginBottom: "7rem" }}>
            <ScrollToTop />
            <div
                className="containerMovie heroSectionMovie"
                data-show-id={series.id}
                
            >
                <div className="container" style={{ paddingTop: "5rem" }}>
                    <div className="d-flex flex-column justify-btw align-start h-100">
                        <div className="col-md-6 col-12 d-flex flex-column justify-center align-lg-start align-center align-self-lg-start align-self-center gap-2 container-padding-2 h-100">
                            <Link to={`/show/${series.id}`} className="col-xl-9 col-lg-6 d-lg-block d-none h-auto" >
                                {logoUrl && (
                                    <img
                                        loading="lazy"
                                        className="logoImg"
                                        src={`https://image.tmdb.org/t/p/w300/${logoUrl}`}
                                        alt={series?.name || series?.title}
                                    />
                                )}
                            </Link>
                            <h1 className="font-xl-20 white-color">
                                {series?.title || series?.name}
                            </h1>
                            <div className="d-flex justify-start align-center gap-2">
                                <div className="d-flex justify-center align-end  vertical-middle">
                                    
                                        <img className="d-inline-block"
                                            loading="lazy"
                                            src={IMDB}
                                            alt="IMDB"
                                        />
                                    
                                    <p className="white-color font-14">
                                        {ratingDecimal(series?.vote_average)}
                                    </p>
                                </div>
                                <div className="d-flex justify-center align-center vertical-middle">
                                    
                                        <img className="d-inline-block"
                                            loading="lazy"
                                            src={SubScript}
                                            alt="subScript"
                                        />
                                    
                                    <p className="white-color font-12">
                                        {" "}
                                        زیرنویس{" "}
                                    </p>
                                </div>
                                <div className="d-flex justify-center align-center">
                                    <p className="white-color font-12">
                                        {series.first_air_date?.substring(0, 4)}
                                    </p>
                                </div>
                            </div>
                            <p className="white-color font-12 font-weight-normal">
                            {series.overview && series.overview.length > 50
                                ? `${series.overview?.substring(0, 50)}...`
                                : series.overview}
                            </p>
                            <div className="d-flex align-center justify-evenly gap-2">
                                <Link
                                    to={`/series/${series.id}`}
                                    className="movieInnerBtn white-bgc d-flex flex-row align-center gap-1 border-radius-12  line-height-42"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M14.66 8.347l-8.537-4.93c-.502-.287-1.12-.286-1.62.005s-.81.825-.81 1.404v9.858c-.001.58.307 1.115.808 1.406s1.12.293 1.62.005l8.537-4.93a1.64 1.64 0 0 0 0-2.82z"></path>
                                    </svg>
                                    <span className="black-color font-12 font-weight-normal">
                                        خرید اشتراک
                                    </span>
                                </Link>
                                <Link
                                    to={`/series/${series.id}`}
                                    className="movieInnerMore  border-radius-12 line-height-42"
                                >
                                    <span className="white-color font-12 font-weight-normal">
                                        پیش نمایش
                                    </span>
                                </Link>
                                <showTooltipsm/>
                            </div>
                            <p className="light-white-font font-12 font-weight-normal">
                                ستارگان: {stars.join(" ، ")}
                            </p>
                            <p className="light-white-font font-12 font-weight-normal">
                                کارگردان: {directors.length > 0 ? directors.join(" - ") : "ندارد"}
                            </p>
                            
                            <showTooltipsm/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column gap-8">
                <div className="container">
                    <div className="d-flex flex-column gap-3">
                        <Episode seriesId={id} showName={series?.name || series?.title} numberOfSeasons={numberOfSeasons} popularity={popularity}/>
                        <h3 className="white-color font-lg-18">
                            تصاویر و جزییات
                        </h3>
                        <div
                            className="d-flex align-self-start gap-xl-2 justify-lg-evenly flex-lg-nowrap flex-wrap"
                            style={{ marginBottom: "1rem" }}
                        >
                            {images.slice(0, 5).map((image) => (
                                <div className="col-2" key={image.file_path}>
                                    <img
                                        loading="lazy"
                                        className="w-100 h-auto object-cover"
                                        key={series.id}
                                        src={`https://image.tmdb.org/t/p/original${image.file_path}`}
                                        alt={image.file_path}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="d-flex flex-column gap-4">
                        <h2 className="white-color font-md-14 font-weight-normal">
                            {series?.name || series?.title}
                        </h2>
                        <h2 className="white-color font-lg-18 font-weight-normal">
                            درباره فیلم {series?.name || series?.title}
                        </h2>
                        <p
                            className="light-white-font font-md-14 font-weight-normal"
                            style={{ lineHeight: "2" }}
                        >
                            {series?.overview}
                        </p>
                        <p className="white-color font-14 font-weight-normal">
                            دسته بندی ها: {getGenreNames()}
                        </p>
                        <div className="d-flex justify-start align-start gap-3">
                            <p className="white-color font-14 font-weight-normal">
                                صدا: انگلیسی
                            </p>
                            <p className="white-color font-14 font-weight-normal">
                                زیرنویس: ندارد
                            </p>
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-column gap-4">
                    <div className="d-flex flex-column justify-center align-start gap-3">
                        <h3 className="white-color containerInnerMovie">
                            بازیگران فیلم {series?.name || series?.title}
                        </h3>
                        <StarInnerShow seriesId={id} />
                    </div>
                    <div className="d-flex flex-column justify-center align-start gap-3">
                        <h3 className="white-color containerInnerMovie">
                            عوامل فیلم {series?.name || series?.title}
                        </h3>
                        <DirectorInnerShow seriesId={id} />
                    </div>
                    <div className="d-flex flex-column justify-center align-start gap-3">
                        <CinemaSlider />
                    </div>
                    <div className="d-flex flex-column justify-center align-start gap-3">
                        <h3 className="white-color containerInnerMovie">
                            بر اساس "{series?.name || series?.title}"
                        </h3>
                        <SliderMovieInner movies={series} genreId={28} />
                    </div>
                </div>
                <ShowCommentContainer seriesId={id} />
            </div>
        </div>
    );
}
