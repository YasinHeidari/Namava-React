import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ratingDecimal from "../../helpers/ratingdecimal";
import { Tooltip } from "antd";
import SliderMovieInner from "../Movie/SliderMovieInnerMovie";
import CinemaSlider from "../CinemaSlider";
import IMDB from "../../images/IMDB.svg";
import SubScript from "../../images/subScript.svg";
import movieInnerLike from "../../images/movieInnerLike.svg";
import movieInnerDisLike from "../../images/movieInnerDisLike.svg";
import ScrollToTop from "../../helpers/ScrollToTop";
import "./index.css";
import SpinnerLoading from "../Loading/SpinnerLoading";
import DirectorInnerShow from "./DirectorInnerShow";
import StarInnerShow from "./StarInnerShow";
import ShowCommentContainer from "./ShowInnerComment";
import Episode from "./Episodes";


const apiKey = "4fba95dbf46cd77d415830c228c9ef01";

export default function Show() {
    const { id } = useParams();
    const [series, setSeries] = useState(null);
    const [stars, setStars] = useState([]);
    const [directors, setDirectors] = useState([]);
    const [logoUrl, setLogoUrl] = useState(null);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSeriesData = async () => {
            try {
                const seriesResponse = await fetch(
                    `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-US&append_to_response=images`
                );
                const seriesData = await seriesResponse.json();
                setSeries(seriesData);
                const logoUrl = seriesData.images?.logos[0]?.file_path;
                setLogoUrl(logoUrl);

                const imagesResponse = await fetch(
                    `https://api.themoviedb.org/3/tv/${id}/images?api_key=${apiKey}&language=en`
                );
                const imagesData = await imagesResponse.json();
                setImages(imagesData.backdrops);

                const creditsResponse = await fetch(
                    `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${apiKey}`
                );
                const creditsData = await creditsResponse.json();
                const topStars = creditsData.cast
                    .slice(0, 5)
                    .map((actor) => actor.name);
                setStars(topStars);
                const directorsList = creditsData.crew
                    .filter((member) => member.job === "Director")
                    .map((director) => director.name);
                setDirectors(directorsList);

                setLoading(false);
            } catch (error) {
                console.error("Error fetching series data:", error);
                setLoading(false);
            }
        };
        document.title = `سریال ${series?.name || series?.title}`;

        fetchSeriesData();
    }, [id]);

    if (loading || series === null) {
        return <SpinnerLoading />;
    }

    const getGenreNames = () => {
        return series.genres.map((genre) => genre.name).join(" ، ");
    };

    return (
        <div style={{ marginBottom: "7rem" }}>
            <ScrollToTop />
            <div
                className="containerMovie"
                style={{
                    backgroundImage: ` radial-gradient(circle at 33% 40%, transparent 20%, #1a1a1a 75%),linear-gradient(rgba(18, 18, 18, 0) 10vw, rgb(18, 18, 18) 46.875vw), linear-gradient(to left, rgba(18, 18, 18, 0.7), rgba(18, 18, 18, 0) 50%),url(https://media.themoviedb.org/t/p/original/${series.backdrop_path})`,
                    backgroundSize: "cover",
                    backgroundPosition: "left top",
                }}
            >
                <div className="container" style={{ paddingTop: "5rem" }}>
                    <div className="d-flex flex-column justify-btw align-start h-100">
                        <div className="col-6 d-flex flex-column justify-center align-start align-self-start gap-2 container-padding-2 h-100">
                            <Link to={`/series/${series.id}`}>
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
                                <div className="d-flex justify-center align-center">
                                    <div>
                                        <img
                                            loading="lazy"
                                            src={IMDB}
                                            alt="IMDB"
                                        />
                                    </div>
                                    <p className="white-color font-14">
                                        {ratingDecimal(series.vote_average)}
                                    </p>
                                </div>
                                <div className="d-flex justify-center align-center">
                                    <div>
                                        <img
                                            loading="lazy"
                                            src={SubScript}
                                            alt="subScript"
                                        />
                                    </div>
                                    <p className="white-color font-12">
                                        {" "}
                                        زیرنویس{" "}
                                    </p>
                                </div>
                                <div className="d-flex justify-center align-center">
                                    <p className="white-color font-12">
                                        {series.first_air_date.substring(0, 4)}
                                    </p>
                                </div>
                            </div>
                            <p className="white-color font-12 font-weight-normal">
                                {series.overview.length > 50
                                    ? `${series.overview.substring(0, 50)}...`
                                    : series.overview}
                            </p>
                            <div className="d-flex  align-center justify-evenly gap-2">
                                <Link
                                    to="/"
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
                                    to="/"
                                    className="movieInnerMore  border-radius-12 line-height-42"
                                >
                                    <span className="white-color font-12 font-weight-normal">
                                        پیش نمایش
                                    </span>
                                </Link>
                                <div className="d-flex justify-center align-center border-radius-50 movieInnerIconHover">
                                    <Tooltip
                                        placement="bottom"
                                        title={
                                            <span style={{ color: "black" }}>
                                                افزودن به لیست من
                                            </span>
                                        }
                                        color="#fff"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 40 40"
                                            fill="#fff"
                                        >
                                            <path d="M31.56 18.64H21.4V8.48a1.4 1.4 0 0 0-2.39-.99 1.4 1.4 0 0 0-.41.99v10.16H8.44a1.4 1.4 0 0 0-1.4 1.4 1.4 1.4 0 0 0 1.4 1.4H18.6V31.6a1.4 1.4 0 0 0 1.4 1.4 1.4 1.4 0 0 0 1.4-1.4V21.44h10.16a1.4 1.4 0 0 0 1.4-1.4 1.4 1.4 0 0 0-1.4-1.4z"></path>
                                        </svg>
                                    </Tooltip>
                                </div>
                                <div className="d-flex justify-center align-center border-radius-50 movieInnerIconHover">
                                    <Tooltip
                                        placement="bottom"
                                        title={
                                            <span style={{ color: "black" }}>
                                                دانلود
                                            </span>
                                        }
                                        color="#fff"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="30"
                                            height="30"
                                            viewBox="0 0 30 30"
                                            fill="#fff"
                                        >
                                            <path d="M14.568 18.596a.54.54 0 0 0 .766 0l3.2-3.2a.542.542 0 1 0-.766-.766l-2.272 2.272V7.54a.54.54 0 1 0-1.084 0v9.363L12.14 14.63a.542.542 0 1 0-.766.766zm8.792-4.122a.54.54 0 0 0-.542.542v3.958c-.001 1.22-1 2.2-2.2 2.2H9.293c-1.22-.001-2.2-1-2.2-2.2v-3.958a.54.54 0 1 0-1.084 0v3.958a3.3 3.3 0 0 0 3.293 3.293h11.316a3.3 3.3 0 0 0 3.293-3.293v-3.958a.54.54 0 0 0-.54-.542z"></path>
                                        </svg>
                                    </Tooltip>
                                </div>
                                <div className="d-flex justify-center align-center border-radius-50 movieInnerIconHover">
                                    <Tooltip
                                        placement="bottom"
                                        title={
                                            <span style={{ color: "black" }}>
                                                دوست داشتم
                                            </span>
                                        }
                                        color="#fff"
                                    >
                                        <img
                                            loading="lazy"
                                            src={movieInnerLike}
                                            alt="like"
                                        />
                                    </Tooltip>
                                </div>
                                <div className="d-flex justify-center align-center border-radius-50 movieInnerIconHover">
                                    <Tooltip
                                        placement="bottom"
                                        title={
                                            <span style={{ color: "black" }}>
                                                دوست نداشتم
                                            </span>
                                        }
                                        color="#fff"
                                    >
                                        <img
                                            loading="lazy"
                                            src={movieInnerDisLike}
                                            alt="dislike"
                                        />
                                    </Tooltip>
                                </div>
                            </div>
                            <p className="light-white-font font-12 font-weight-normal">
                                ستارگان: {stars.join(" ، ")}
                            </p>
                            <p className="light-white-font font-12 font-weight-normal">
                                کارگردان: {directors.length > 0 ? directors.join(" - ") : "ندارد"}
                            </p>
                            <p className="light-white-font font-12 font-weight-normal">
                                دسته بندی ها: {getGenreNames()}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column gap-8">
                <div className="container">
                    <div className="d-flex flex-column gap-3">
                    <div className="d-flex flex-column justify-center align-start gap-3">
                        <h3 className="white-color containerInnerMovie">
                        فصل ۱ 
                        </h3>
                        <Episode seriesId={id} showName={series?.name || series?.title}/>
                    </div>
                        <h3 className="white-color font-lg-18">
                            تصاویر و جزییات
                        </h3>
                        <div
                            className="d-flex justify-start align-self-start gap-2"
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
                <ShowCommentContainer movieId={series?.id} />
            </div>
        </div>
    );
}
