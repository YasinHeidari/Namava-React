import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EpisodeTooltip from './EpisodeToolTip';
import './index.css';

const apiKey = "4fba95dbf46cd77d415830c228c9ef01";

export default function Episode({ seriesId, showName , numberOfSeasons , popularity }) {
    const [episodes, setEpisodes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [seasonNumber, setSeasonNumber] = useState(null);

    useEffect(() => {
        const fetchEpisodes = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/tv/${seriesId}/season/1?api_key=${apiKey}&language=fa-IR`
                );
                const data = await response.json();
                setEpisodes(data.episodes || []); 
                setSeasonNumber(data.season_number);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching episodes:", error);
                setLoading(false);
            }
        };

        fetchEpisodes();
    }, [seriesId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (episodes.length === 0) {
        return <div>No episodes available.</div>;
    }

    return (
        <div className="d-flex flex-column align-start gap-3">
        <div className='d-flex justify-start align-center gap-5'>
            <span className="white-color containerInnerMovie seasonEpisodenumber border-radius-12 text-center ">
                فصل {seasonNumber} 
            </span>
            <div className='d-flex justify-evenly align-center gap-2 seasonCounts border-radius-12'>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" ><g clipath="url(#clip0_16448:5568)"><path fillRule="evenodd" clipRule="evenodd" d="M24.19 6H5C3.34 6 2 7.35 2 9V18.79C2 20.44 3.34 21.79 5 21.79H24.19C25.85 21.79 27.19 20.44 27.19 18.79V9C27.19 7.35 25.85 6 24.19 6ZM17.11 14.67L14.24 16.33C13.57 16.71 12.74 16.23 12.74 15.46V12.15C12.74 11.38 13.57 10.9 14.24 11.28L17.11 12.94C17.78 13.32 17.78 14.29 17.11 14.67Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M6.36001 24.0699H22.74C22.99 24.0699 23.19 23.8699 23.19 23.6199C23.19 23.3699 22.99 23.1699 22.74 23.1699H6.36001C6.11001 23.1699 5.91001 23.3699 5.91001 23.6199C5.90001 23.8699 6.11001 24.0699 6.36001 24.0699Z" fill="white"></path></g><defs><clipPath ><rect width="25.19" height="18.07" fill="white" transform="translate(2 6)"></rect></clipPath></defs></svg>
                <span className='white-color font-14 font-weight-normal'>تعداد کل فصل‌ها: {numberOfSeasons}</span>
            </div>
        </div>
            <div className='d-flex flex-wrap col-12 ' >
                {episodes.map((episode) => {
                    if (!episode.still_path) {
                        return null;
                    }
                    return (
                        <Link to="/" key={episode.id} className='d-flex flex-column gap-1 col-sm-12 col-xs-12 col-md-3 col-lg-3 col-xxl-3 ' style={{ marginBottom: '1rem',  padding:'0 .5rem'}}>
                        <div className='position-relative episodeImgContainer max-w-100'>
                            <img
                                src={`https://image.tmdb.org/t/p/w300/${episode.still_path}`}
                                alt={episode.name}
                                className='col-12 h-100 border-radius-4'
                            />
                            <div className='d-flex justify-btw align-center z-2 position-absolute bottom-0 left-0 col-12' style={{padding:'.5rem'}}>
                                <div className='timeEpisode border-radius-12'>
                                    <span className='font-12 line-height-21 white-color'>{episode.runtime} دقیقه</span>
                                </div>
                                <div className='border-radius-12  freeEpisode' style={{width:'fitContent'}}>
                                    <span className='black-color font-12 font-weight-normal'>رایگان</span>
                                </div>
                            </div>
                            <div className='darkEpisodeHover col-12 h-100 position-absolute top-0 right-0'></div>
                        </div>
                            <div className='d-flex justify-start align-center gap-1'>
                                <h2 className='white-color font-lg-14 font-weight-normal' style={{ lineHeight: '1.79' }}>{showName} -</h2>
                                <p className='white-color'>فصل {episode.season_number}</p>
                                <p className='white-color'>قسمت {episode.episode_number}</p>
                            </div>
                            <div className='d-flex col-12 justify-btw align-center'>
                                <div className='d-flex justify-start'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20" fill='#fff'><path d="M13.548 3a4.55 4.55 0 0 0-3.486 1.642C9.2 3.605 7.925 3.003 6.577 3A4.58 4.58 0 0 0 2 7.577c0 6.2 4.852 10.388 8.062 10.388s8.063-4.184 8.063-10.388A4.58 4.58 0 0 0 13.548 3z"></path></svg>
                                    <p className='white-color'>{popularity ? popularity.toString().slice(0, 2) : episode.vote_average}%</p>
                                </div>
                                <EpisodeTooltip/>
                            </div>
                            <p className='white-color text-left font-12 overviewEpisode font-weight-normal' style={{lineHeight:'2'}}>{episode.overview}</p>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
