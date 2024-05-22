import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PreResult from './PreResult';
import './index.css';
import GenreFilter from './Filters/GenreFilters';
import CountryFilter from './Filters/CountryFilters';
import SoundFilter from './Filters/SoundFilters';
import OrganizeFilter from './Filters/OrganizeFilters';
import searchIcon from '../../images/searchIcon.svg';

export default function SearchMovie() {
    const [checkboxes, setCheckboxes] = useState({
        film: false,
        serial: false,
        // Add more checkbox states here if needed
    });

    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState({ persons: [], movies: [], keywords: [], collections: [] });
    const [searchActive, setSearchActive] = useState(false);

    const handleReset = () => {
        // Reset all checkbox states to false
        setCheckboxes({
            film: false,
            serial: false,
            // Add more checkbox states here if needed
        });
    };

    useEffect(() => {
        if (searchInput.length < 3) {
            setSearchResults({ persons: [], movies: [], keywords: [], collections: [] });
            setSearchActive(false);
            return;
        }

        const fetchSearchResults = async () => {
            const apiKey = '4fba95dbf46cd77d415830c228c9ef01';

            const query = encodeURIComponent(searchInput);
            const endpoints = [
                `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&query=${query}`,
                `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`,
                `https://api.themoviedb.org/3/search/keyword?api_key=${apiKey}&query=${query}`,
                `https://api.themoviedb.org/3/search/collection?api_key=${apiKey}&query=${query}`
            ];

            try {
                const [personsRes, moviesRes, keywordsRes, collectionsRes] = await Promise.all(
                    endpoints.map(endpoint => fetch(endpoint).then(res => res.json()))
                );

                setSearchResults({
                    persons: personsRes.results || [],
                    movies: moviesRes.results || [],
                    keywords: keywordsRes.results || [],
                    collections: collectionsRes.results || []
                });
                setSearchActive(true);
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        };

        fetchSearchResults();
    }, [searchInput]);

    return (
        <div className="container" style={{ minHeight: '100vh', marginTop: '5rem' }}>
            <div className="d-flex justify-center gap-5 position-relative h-100">
                <div className="searchFiltersContainer border-radius-12 d-flex flex-column gap-2 position-fixed right-0 z-0" style={{top:'21%'}}>
                    <div className="d-flex justify-btw align-center ">
                        <p className="white-color font-16 font-weight-normal">فیلترها</p>
                        <button className="active font-14 line-height-28 reset-btn" onClick={handleReset}>
                            حذف همه
                        </button>
                    </div>
                    <div className="d-flex justify-start align-center gap-2 searchFilterBorder">
                        <div className="d-flex gap-1 ">
                            <input type="checkbox" name="film" id="فیلم" checked={checkboxes.film} onChange={() => setCheckboxes(prevState => ({ ...prevState, film: !prevState.film }))} />
                            <label className="white-color font-weight-normal font-14" htmlFor="فیلم">فیلم</label>
                        </div>
                        <div className="d-flex gap-1 ">
                            <input type="checkbox" name="serial" id="سریال" checked={checkboxes.serial} onChange={() => setCheckboxes(prevState => ({ ...prevState, serial: !prevState.serial }))} />
                            <label className="white-color font-weight-normal font-14" htmlFor="سریال">سریال</label>
                        </div>
                    </div>
                    <GenreFilter checkboxes={checkboxes} setCheckboxes={setCheckboxes} />
                    <CountryFilter checkboxes={checkboxes} setCheckboxes={setCheckboxes} />
                    <SoundFilter checkboxes={checkboxes} setCheckboxes={setCheckboxes} />
                    <OrganizeFilter checkboxes={checkboxes} setCheckboxes={setCheckboxes} />
                </div>
                <div className="col-12 d-flex flex-column justify-center gap-10" style={{ marginRight: '22em' }}>
                    <div className="searchInputContainer col-12 d-flex justify-sm-start align-center gap-1 font-xl-14 font-12 border-radius-12 line-height-xl-24 line-height-21">
                        <img src={searchIcon} alt='searchIcon' />
                        <input
                            className="searchInput col-12 line-height-xl-24 font-12 line-height-21 font-weight-normal"
                            type="text"
                            placeholder="فیلم، سریال، بازیگر و ژانر"
                            value={searchInput}
                            onChange={e => setSearchInput(e.target.value)}
                        />
                    </div>
                    <div className="d-flex flex-column justify-center">
                        {searchActive ? (
                            <div className='d-flex flex-column gap-12'>
                                {searchResults.persons.length > 0 && (
                                    <div className='d-flex flex-column gap-2 justify-center align-center'>
                                        {searchResults.persons.map(person => (
                                            <div key={person.id} className="col-12 d-flex gap-2 border-radius-12 personContainer">
                                                <div className='personImgContainer'>
                                                    <img className='col-12 h-100 border-radius-50' src={`https://image.tmdb.org/t/p/w200${person.profile_path}`} alt={person.name} />
                                                </div>
                                                <div className='d-flex flex-column gap-2 '>
                                                    <p className='white-color font-xxl-24'>{person.name}</p>
                                                    <p className='white-color font-xxl-16'>{person.known_for.overview}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {searchResults.movies.length > 0 && (
                                <div className='d-flex flex-wrap gap-2 justify-evenly align-center'>  
                                    {searchResults.movies.map(movie => (
                                        <Link to={`/movie/${movie.id}`} key={movie.id} className="col-2 d-flex flex-column gap-2" style={{marginBottom:'4rem'}}>
                                            <img className='w-100 h-auto border-radius-5' src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                                            <p className='white-color font-xxl-12 font-weight-normal'>{movie.title}</p>
                                        </Link>
                                    ))}
                                </div>
                        )}
                            </div>
                        ) : (
                            <div className='d-flex justify-center'>
                                <PreResult />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

