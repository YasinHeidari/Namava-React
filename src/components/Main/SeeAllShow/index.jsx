import React from "react";
import { Link, useLocation } from "react-router-dom";
import { img_300, unavailable } from "../../../helpers/api";
import IMDB from "../../../images/IMDB.svg";
import ratingDecimal from "../../../helpers/ratingdecimal";
import SubScript from "../../../images/subScript.svg";

export default function SeeAllShows() {
    const location = useLocation();
    const { shows, title } = location.state || { shows: [], title: "Shows" };

    return (
        <div className="container d-flex flex-column gap-5" style={{ marginTop: '5rem' }}>
            <h2 className="white-color">{title}</h2>
            <div className="d-flex flex-wrap">
                {shows.length > 0 ? (
                    shows.map((show) => (
                        <Link
                            to={`/show/${show.id}`}
                            key={show.id}
                            className="col-xxl-2 col-md-3 col-sm-4 col-xs-4 movieLink"
                        >
                            <div className="movieSliderLink d-flex flex-column gap-1 position-relative">
                                <div className="movieSliderItem w-100 h-100 position-relative z-0">
                                    <img
                                        loading="lazy"
                                        className="w-100 h-100 border-radius-5 object-cover"
                                        src={show?.poster_path ? `${img_300}/${show?.poster_path}` : unavailable}
                                        alt={show?.title}
                                    />
                                    <div className="darkMovieCover position-absolute z-1 top-0 right-0 w-100 h-100 d-flex flex-column justify-end align-start gap-1 border-radius-5">
                                        <div className="d-flex justify-center align-end vertical-middle">
                                            <img className="d-inline-block" src={IMDB} alt="" />
                                            <p className="white-color font-14">
                                                {ratingDecimal(show?.vote_average)}
                                            </p>
                                        </div>
                                        <div className="d-flex justify-center align-center vertical-middle">
                                            <img className="d-inline-block" src={SubScript} alt="" />
                                            <p className="white-color font-12"> زیرنویس </p>
                                        </div>
                                        <div className="d-flex justify-center align-center">
                                            <p className="white-color font-12">
                                                سریال - {show?.release_date?.substring(0, 4)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <h5 className="white-color line-height-28">
                                    {show?.title || show?.name}
                                </h5>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p>No TV shows available for this genre</p>
                )}
            </div>
        </div>
    );
}


