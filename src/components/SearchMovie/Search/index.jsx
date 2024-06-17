import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import searchIcon from '../../../images/searchIcon.svg';
import IMDB from '../../../images/IMDB.svg';
import SubScript from '../../../images/subScript.svg';
import ratingDecimal from '../../../helpers/ratingdecimal';
import PreResult from "../PreResult";
import DotsLoader from '../../Loading/DotsLoader';
import './index.css';

export default function SearchInput({ selectedGenres, selectedCountries, isFilmSelected, isSerialSelected , toggleMenuVisibility}) {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState({ persons: [], movies: [], keywords: [], collections: [], shows: [] });
  const [searchActive, setSearchActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [allResultsLoaded, setAllResultsLoaded] = useState(false);


const fetchSearchResults = async (page = 1) => {
  const apiKey = '4fba95dbf46cd77d415830c228c9ef01';
  const query = encodeURIComponent(searchInput);
  const endpoints = [
    `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&query=${query}&language=en-US&page=${page}`,
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=en-US&page=${page}`,
    `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${query}&language=en-US&page=${page}`,
    `https://api.themoviedb.org/3/search/collection?api_key=${apiKey}&query=${query}&language=en-US&page=${page}`
  ];

  try {
    const responses = await Promise.all(
      endpoints.map(endpoint => fetch(endpoint).then(res => res.json()))
    );

    const [personsRes, moviesRes, showsRes, collectionsRes] = responses;

    setSearchResults(prevResults => ({
      persons: page === 1 ? personsRes.results : [...prevResults.persons, ...personsRes.results],
      movies: page === 1 ? moviesRes.results : [...prevResults.movies, ...moviesRes.results],
      collections: page === 1 ? collectionsRes.results : [...prevResults.collections, ...collectionsRes.results],
      shows: page === 1 ? showsRes.results : [...prevResults.shows, ...showsRes.results],
    }));

    setAllResultsLoaded(
      !personsRes.total_pages ||
      !moviesRes.total_pages ||
      !showsRes.total_pages ||
      !collectionsRes.total_pages ||
      page >= personsRes.total_pages && page >= moviesRes.total_pages && page >= showsRes.total_pages && page >= collectionsRes.total_pages
    );

    setSearchActive(true);
    setLoading(false);
  } catch (error) {
    console.error('Error fetching search results:', error);
    setLoading(false);
  }
};

useEffect(() => {
  if (searchInput.length >= 3) {
    fetchSearchResults();
  }
}, [searchInput]);

useEffect(() => {
  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight && !loading && !allResultsLoaded) {
      setLoading(true);
      setTimeout(() => {
        setCurrentPage(prevPage => prevPage + 1);
        fetchSearchResults(currentPage + 1);
      }, 1000);
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [loading, currentPage, allResultsLoaded]);

  

  const filteredMovies = searchResults.movies.filter(movie =>
    Array.isArray(movie.genre_ids) &&
    Array.isArray(movie.production_countries) &&
    movie.genre_ids.some(genre_id => selectedGenres[genre_id]) &&
    movie.production_countries.some(country => selectedCountries[country.iso_3166_1])
);



  const filteredShows = searchResults.shows.filter(show =>
    Array.isArray(show.genre_ids) &&
    Array.isArray(show.production_countries) &&
    show.genre_ids.some(genre_id => selectedGenres[genre_id]) &&
    show.production_countries.some(country => selectedCountries[country.iso_3166_1])
  );

  const displayedResults = () => {
    if (isFilmSelected) {
      return filteredMovies;
    } else if (isSerialSelected) {
      return filteredShows;
    } else {
      return [...filteredMovies, ...filteredShows];
    }
  };

  return (
    <div className="searchContainer col-12 d-flex flex-column justify-center gap-4">
    <div className="col-12 d-flex flex-row-reverse align-center gap-1">
      <div className="searchInputContainer col-12 d-flex justify-sm-start align-center gap-1 font-xl-14 font-12 border-radius-12 line-height-xl-24 line-height-21">
        <img src={searchIcon} alt='searchIcon' />
        <input
          className="searchInput col-12 line-height-xl-24 font-12 line-height-21 font-weight-normal"
          type="text"
          placeholder="فیلم، سریال، بازیگر و ژانر"
          value={searchInput}
          onChange={e => {setSearchInput(e.target.value);
          setCurrentPage(1)}}
        />
      </div>
      <button className='black-color white-bgc border-radius-12 col-2 h-100 d-lg-none d-block filterSmallToggle' onClick={toggleMenuVisibility}>فیلتر</button>
    </div>
      <div className="d-flex flex-column justify-center col-12">
        {searchActive ? (
          <div className='d-flex flex-column gap-6 flex-wrap'>
            {searchResults.persons.length > 0 && (
              <div className='d-flex flex-column gap-2  align-start'>
                <div className=' font-md-14 font-12 white-color d-flex flex-wrap gap-lg-2'>
                  <p className='lighter-white-font font-weight-normal'>کلمات مشابه:</p>
                  {searchResults.persons.slice(1, 10).map((person, index) => (
                    <div key={person.id} className="person d-flex align-center">
                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 2C9.88 2 7.75 4.13 7.75 6.75c0 2.57 2.01 4.65 4.63 4.74.08-.01.16-.01.22 0h.07a4.738 4.738 0 0 0 4.58-4.74C17.25 4.13 15.12 2 12.5 2Zm5.08 12.15c-2.79-1.86-7.34-1.86-10.15 0-1.27.85-1.97 2-1.97 3.23s.7 2.37 1.96 3.21c1.4.94 3.24 1.41 5.08 1.41 1.84 0 3.68-.47 5.08-1.41 1.26-.85 1.96-1.99 1.96-3.23-.01-1.23-.7-2.37-1.96-3.21Z" fill="#CCC"></path>
                      </svg>
                      <span className="personName">{person?.name}</span>
                    </div>
                  ))}
                </div>
                {searchResults.persons[0].profile_path && (
                  <div key={searchResults.persons[0].id} className="col-12 d-lg-flex d-none align-start  gap-2 border-radius-12 personContainer">
                    <div className='personImgContainer'>
                      <img className='col-12 h-auto border-radius-50' src={`https://image.tmdb.org/t/p/w200${searchResults?.persons[0]?.profile_path}`} alt={searchResults.persons[0].name} />
                    </div>
                    <div className='d-flex flex-column gap-2'>
                      <p className='white-color font-xxl-24'>{searchResults.persons[0].name}</p>
                      {searchResults.persons[0].known_for.map((item, index) => (
                        <p key={index} className='white-color font-xxl-16 ltr' style={{ lineHeight: '1.75' }}>{item.overview && item.overview.length > 50
                                ? `${item.overview?.substring(0, 50)}...`
                                : item.overview}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className='d-flex flex-wrap  justify-start align-stretch'>
            {searchResults.movies
              .filter(item => item.poster_path) // Filter out entries with null or undefined poster_path
              .map(item => (
                <Link
                  key={item.id}
                  to={`/movie/${item.id}`}
                      className='movieResultContainer col-lg-2 col-md-3 col-4 h-100 d-flex flex-column gap-2'
                      style={{ marginBottom: '4rem' }}
                    >
                      <div className='position-relative w-100 h-100'>
                        <img className='w-100 h-100 border-radius-5 object-cover' src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt={item?.title || item?.name} />
                        <div className='darkMovieCover position-absolute z-1 top-0 right-0 w-100 h-100 d-flex flex-column justify-end align-start gap-1 border-radius-2'>
                          <div className="d-flex justify-center align-center"><div><img src={IMDB} alt="IMDB" /></div><p className="white-color font-14">{ratingDecimal(item.vote_average)}</p></div>
                          <div className="d-flex justify-center align-center"><div><img src={SubScript} alt="SubScript" /></div><p className="white-color font-12"> زیرنویس </p></div>
                          <p className="white-color font-12">فیلم - {item.release_date?.slice(0, 4)}</p>
                        </div>
                      </div>
                      <p className='font-14 white-color'>{item.title || item.name}</p>
                    </Link>))}
            {searchResults.shows
              .filter(item => item.poster_path) // Filter out entries with null or undefined poster_path
              .map(item => (
                <Link
                  key={item.id}
                  to={`/show/${item.id}`} 
                      className='showResultContainer col-lg-2 col-md-3 col-4 h-100 d-flex flex-column gap-2'
                      style={{ marginBottom: '4rem' }}
                    >
                      <div className='position-relative w-100 h-100'>
                        <img className='w-100 h-100 border-radius-5 object-cover' src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt={item?.title || item?.name} />
                        <div className='darkShowCover position-absolute z-1 top-0 right-0 w-100 h-100 d-flex flex-column justify-end align-start gap-1 border-radius-2'>
                          <div className="d-flex justify-center align-center"><div><img src={IMDB} alt="IMDB" /></div><p className="white-color font-14">{ratingDecimal(item.vote_average)}</p></div>
                          <div className="d-flex justify-center align-center"><div><img src={SubScript} alt="SubScript" /></div><p className="white-color font-12"> زیرنویس </p></div>
                          <p className="white-color font-12">سریال - {item.first_air_date?.slice(0, 4)}</p>
                        </div>
                      </div>
                      <p className='font-14 white-color'>{item.title || item.name}</p>
                    </Link>))}
               
            </div>


            {displayedResults().length > 0 && (
              <div className='d-flex flex-wrap  justify-start align-stretch'>
                {displayedResults()
                  .filter(item => item.poster_path)
                  .map(item => (
                    <Link to={`/${item.media_type}/${item.id}`} key={item.id} className="searchResultContainer col-lg-2 col-md-3 col-4 h-100  d-flex flex-column gap-2 " style={{ marginBottom: '4rem' }}>
                      <div className='position-relative w-100 h-100'>
                        <img className='w-100 h-100 border-radius-5 object-cover' src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt={item?.title || item?.name} />
                        <div className="darkCover position-absolute z-1 top-0 right-0 w-100 h-100 d-flex flex-column justify-end align-start gap-1 border-radius-2">
                          <div className="d-flex justify-center align-center"><div><img src={IMDB} alt="IMDB" /></div><p className="white-color font-14">{ratingDecimal(item.vote_average)}</p></div>
                          <div className="d-flex justify-center align-center"><div><img src={SubScript} alt="SubScript" /></div><p className="white-color font-12"> زیرنویس </p></div>
                          <p className="white-color font-12">{item.media_type === 'movie' ? 'فیلم' : 'سریال'} - {item.release_date ? item.release_date.slice(0, 4) : item.first_air_date ? item.first_air_date.slice(0, 4) : ''}</p>
                        </div>
                      </div>
                      <p className='font-14 white-color'>{item.title || item.name}</p>
                    </Link>
                  ))}
              </div>
            )}
            {loading && <DotsLoader />}
          </div>
        ) : (
          <div className="searchInactiveContainer d-flex justify-center align-center">
            <PreResult />
          </div>
        )}
      </div>
    </div>
  );
}
