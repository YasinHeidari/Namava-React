import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Menu, ConfigProvider } from 'antd';
import DotsLoader from '../../../Loading/DotsLoader';
import EpisodeTooltip from '../EpisodeToolTip';
import arrowDownEpisodeSm from '../../../../images/arrowDownEpisodeSm.svg';

const apiKey = "4fba95dbf46cd77d415830c228c9ef01";

export default function Episodesm({ seriesId, showName, numberOfSeasons, popularity, status }) {
    const [episodes, setEpisodes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [seasonNumber, setSeasonNumber] = useState(1); 
    const [dropdownVisible, setDropdownVisible] = useState(false); 
    const [openIndexes, setOpenIndexes] = useState([]);

    useEffect(() => {
        const fetchEpisodes = async () => {
            setLoading(true);
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/tv/${seriesId}/season/${seasonNumber}?api_key=${apiKey}&language=en-US`
                );
                const data = await response.json();
                setEpisodes(data.episodes || []);
                setOpenIndexes(data.episodes ? data.episodes.map(() => false) : []);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching episodes:", error);
                setLoading(false);
            }
        };

        fetchEpisodes();
    }, [seriesId, seasonNumber]);

    const handleMenuClick = ({ key }) => {
        setSeasonNumber(parseInt(key));
    };

    const menuItems = Array.from({ length: numberOfSeasons }, (_, index) => ({
        label: `فصل ${index + 1}`,
        key: (index + 1).toString(),
    }));

    const handleSeasonClick = (season) => {
        setSeasonNumber(season);
        setDropdownVisible(false); // Hide dropdown after selecting a season
    };

    const toggleAccordion = (index) => {
        setOpenIndexes((prevState) =>
            prevState.map((isOpen, i) => (i === index ? !isOpen : isOpen))
        );
    };

    if (loading) {
        return <DotsLoader />;
    }

    if (episodes.length === 0) {
        return <div>No episodes available.</div>;
    }

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorBgBase: '#222327',  // Setting background color to black
                    colorText: '#ccc',
                },
            }}
        >
            <div className="d-lg-none d-flex flex-column align-start gap-2">
                <div className='col-12 d-flex flex-column justify-start align-start gap-3'>
                    <Dropdown overlay={<Menu onClick={handleMenuClick} items={menuItems} />} trigger={['click']} placement='bottom'>
                        <Link className='border-radius-12' onClick={(e) => e.preventDefault()} style={{border:'1px solid #fff', padding:'.8rem'}}>
                            <span className='white-color'>
                                فصل {seasonNumber}
                            </span>
                        </Link>
                    </Dropdown>
                    <div className='col-12 d-flex flex-row-reverse justify-start align-center gap-2 seasonCounts border-radius-12'>
                        <div className='d-flex flex-column'>
                            <span className='white-color font-12 font-weight-normal'>تعداد کل فصل‌ها: {numberOfSeasons}</span>
                            <span className='white-color font-12 font-weight-normal'>وضعیت پخش: {status === 'Ended' ? 'پایان انتشار سریال' : 'در حال پخش'}</span>
                        </div>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <g clipPath="url(#clip0_16448:5568)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M24.19 6H5C3.34 6 2 7.35 2 9V18.79C2 20.44 3.34 21.79 5 21.79H24.19C25.85 21.79 27.19 20.44 27.19 18.79V9C27.19 7.35 25.85 6 24.19 6ZM17.11 14.67L14.24 16.33C13.57 16.71 12.74 16.23 12.74 15.46V12.15C12.74 11.38 13.57 10.9 14.24 11.28L17.11 12.94C17.78 13.32 17.78 14.29 17.11 14.67Z" fill="white"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.36001 24.0699H22.74C22.99 24.0699 23.19 23.8699 23.19 23.6199C23.19 23.3699 22.99 23.1699 22.74 23.1699H6.36001C6.11001 23.1699 5.91001 23.3699 5.91001 23.6199C5.90001 23.8699 6.11001 24.0699 6.36001 24.0699Z" fill="white"></path>
                            </g>
                            <defs>
                                <clipPath>
                                    <rect width="25.19" height="18.07" fill="white" transform="translate(2 6)"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>

                <div className='d-lg-none d-flex flex-column justify-center align-center gap-2 col-12'>
                    {episodes.map((episode, index) => {
                        if (!episode.still_path) {
                            return null;
                        }

                        return (
                            <div key={episode.id} className='col-12  border-radius-12 episodeBgc'>
                                <div className="position-relative col-12">
                                    <Link to="/" className='col-12 d-flex flex-row-reverse ' >
                                        <div className="col-5 position-relative">
                                            <div className="position-absolute col-10 h-100 top-0 right-0 z-1 episodeImgGradient"></div>
                                            <img
                                                src={`https://image.tmdb.org/t/p/w300/${episode?.still_path}`}
                                                alt={episode?.name}
                                                className={`col-12 h-100 object-cover position-absolute top-0 left-0 z-0 ${openIndexes[index] ? 'episodeBorderRadiusTop': 'border-radius-12'}`}
                                            />
                                        </div>
                                        <div className="col-7 d-flex flex-column justify-start align-start" style={{ padding: '1.5rem 1rem 2.5rem 0' }}>
                                            <div className="d-flex justify-start align-center gap-1">
                                                <h2 className="white-color font-lg-14 font-12 font-weight-normal" style={{ lineHeight: '1.79' }}>
                                                    {showName} -
                                                </h2>
                                                <p className="white-color font-12">فصل {episode?.season_number}</p>
                                                <p className="white-color font-12">قسمت {episode?.episode_number}</p>
                                            </div>
                                            <div className="timeEpisode border-radius-12">
                                                <span className="font-12 line-height-21 light-white-font font-weight-normal">{episode?.runtime} دقیقه</span>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="arrowDownBgEpisode border-radius-50 position-absolute z-2 d-flex justify-center align-center"
                                        onClick={() => toggleAccordion(index)}
                                        style={{ transform: openIndexes[index] ? 'rotate(-180deg)' : 'rotate(0)', transition: 'transform 0.3s ease', cursor: 'pointer' }}
                                    >
                                        <img src={arrowDownEpisodeSm} alt={episode?.id} />
                                    </div>
                                </div>
                                
                                <div className={`episodeMenu ${openIndexes[index] ? 'open' : ''} d-flex flex-column gap-1 episodeBorderRadiusBottom ${openIndexes[index] ? 'episodeBgcAccordion' : ''}`}>
                                    <div className={`${episode?.overview && episode?.overview.length > 0 ? 'text-left' : 'text-right'} font-12 overviewEpisode font-weight-normal`} style={{ lineHeight: '2' }}>
                                        {episode?.overview && episode?.overview.length > 0 ? episode?.overview : 'توضیحی ندارد :|'}
                                    </div>

                                    <div className="col-12 d-flex justify-btw align-center">
                                        <div className="d-flex justify-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20" fill="#fff">
                                                <path d="M13.548 3a4.55 4.55 0 0 0-3.486 1.642C9.2 3.605 7.925 3.003 6.577 3A4.58 4.58 0 0 0 2 7.577c0 6.2 4.852 10.388 8.062 10.388s8.063-4.184 8.063-10.388A4.58 4.58 0 0 0 13.548 3z"></path>
                                            </svg>
                                            <p className="white-color font-12">{popularity ? popularity.toString().slice(0, 2) : episode?.vote_average}%</p>
                                        </div>
                                        <EpisodeTooltip />
                                    </div>
                                </div>
                                
                            </div>
                        );
                    })}
                </div>
            </div>
        </ConfigProvider>
    );
}
