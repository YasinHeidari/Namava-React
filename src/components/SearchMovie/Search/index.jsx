import { useEffect ,useState  } from "react";
import { Link } from "react-router-dom";
import searchIcon from '../../../images/searchIcon.svg'
import IMDB from '../../../images/IMDB.svg';
import SubScript from '../../../images/subScript.svg';
import ratingDecimal from '../../../helpers/ratingdecimal';
import PreResult from "../PreResult";

export default function SearchInput({selectedGenres}){
    const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState({ persons: [], movies: [], keywords: [], collections: [] });
  const [searchActive, setSearchActive] = useState(false);
    useEffect(() => {
        document.title = 'جستجو'
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
      const filteredMovies = searchResults.movies.filter(movie =>
        movie.genre_ids.some(genre_id => selectedGenres[genre_id])
    );

    const filteredShows = searchResults.shows.filter(show =>
        selectedGenres[show.genre_id]
    );
    return(
        <div className="col-12 d-flex flex-column justify-center gap-4" style={{ marginRight: '22em' }}>
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
              <div className='d-flex flex-column gap-6'>
              {searchResults.persons.length > 0 && (
                <div className='d-flex flex-column gap-2 justify-center align-center'>
                    <div className=' font-md-14 font-12 white-color d-flex flex-wrap gap-2'>
                    <p className='lighter-white-font font-weight-normal'>کلمات مشابه:</p>
                        {searchResults.persons.slice(1, 10).map((person, index) => (
                            
                            <div key={person.id} className="person d-flex align-center">
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 2C9.88 2 7.75 4.13 7.75 6.75c0 2.57 2.01 4.65 4.63 4.74.08-.01.16-.01.22 0h.07a4.738 4.738 0 0 0 4.58-4.74C17.25 4.13 15.12 2 12.5 2Zm5.08 12.15c-2.79-1.86-7.34-1.86-10.15 0-1.27.85-1.97 2-1.97 3.23s.7 2.37 1.96 3.21c1.4.94 3.24 1.41 5.08 1.41 1.84 0 3.68-.47 5.08-1.41 1.26-.85 1.96-1.99 1.96-3.23-.01-1.23-.7-2.37-1.96-3.21Z" fill="#CCC"></path></svg>
                                <span className="personName">{person.name}</span>
                            </div>
                        ))}
                    </div>
                    {searchResults.persons[0].profile_path && (
                        <div key={searchResults.persons[0].id} className="col-12 d-flex gap-2 border-radius-12 personContainer">
                            <div className='personImgContainer'>
                            <img className='col-12 h-100 border-radius-50' src={`https://image.tmdb.org/t/p/w200${searchResults.persons[0].profile_path}`} alt={searchResults.persons[0].name} />
                            </div>
                            <div className='d-flex flex-column gap-2'>
                            <p className='white-color font-xxl-24'>{searchResults.persons[0].name}</p>
                            {searchResults.persons[0].known_for.map((item, index) => (
                                <p key={index} className='white-color font-xxl-16 ltr' style={{lineHeight: '1.75'}}>{item.overview}</p>
                            ))}
                            </div>
                        </div>
                    )}
                </div>
            )}

                {searchResults.movies.length > 0 && (
                    <div className='d-flex flex-wrap gap-6 justify-start align-stretch '>
                        {searchResults.movies
                        // Filter out movies with null or undefined poster_path
                        .filter(movie => movie.poster_path)
                        // Filter out duplicate movies based on ID
                        .filter((movie, index, self) => self.findIndex(m => m.id === movie.id) === index)
                        .map(movie => (
                            <Link to={`/movie/${movie.id}`} key={movie.id} className="movieResultContainer col-2 d-flex flex-column gap-2 " style={{ marginBottom: '4rem' }}>
                            <div className='position-relative w-100 h-100'>
                            <img className='w-100 h-100 border-radius-5 object-cover' src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie?.title || movie?.name} />
                            <div className="darkMovieCover position-absolute z-1 top-0 right-0 w-100 h-100 d-flex flex-column justify-end align-start gap-1 border-radius-2">
                                <div className="d-flex justify-center align-center"><div><img src={IMDB} alt="IMDB"/></div><p className="white-color font-14">{ratingDecimal(movie.vote_average)}</p></div>
                                <div className="d-flex justify-center align-center"><div><img src={SubScript} alt="SubScript"/></div><p className="white-color font-12"> زیرنویس </p></div>
                                <p className="white-color font-12">فیلم - {movie.release_date ? movie.release_date.substring(0,4) : 'N/A'}</p>

                            </div>
                            </div>
                            <p className='white-color font-xxl-12 font-weight-normal'>{movie?.title || movie?.name}</p>
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
    )
}