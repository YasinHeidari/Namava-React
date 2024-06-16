import { useState , useEffect } from "react";
import GenreFilter from "../GenreFilters";
import CountryFilter from '../CountryFilters';
import SoundFilter from '../SoundFilters';
import OrganizeFilter from '../OrganizeFilters';

export default function FiltersSm({ isMenuVisible, toggleMenuVisibility }){
  const [checkboxes, setCheckboxes] = useState({});
  const [selectedGenres, setSelectedGenres] = useState({});
  const [availableGenres, setAvailableGenres] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState({});
  const [isFilmSelected, setIsFilmSelected] = useState(false);
  const [isSerialSelected, setIsSerialSelected] = useState(false);
  

  useEffect(() => {
    const fetchGenres = async () => {
        try {
            const apiKey = '4fba95dbf46cd77d415830c228c9ef01';
            const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`);
            const data = await response.json();
            const genres = data.genres.reduce((acc, genre) => {
                acc[genre.id] = false;
                return acc;
            }, {});
            setSelectedGenres(genres);
            setAvailableGenres(data.genres);
        } catch (error) {
            console.error('Error fetching genres:', error);
        }
    };

    fetchGenres();
}, []);

const handleGenreChange = (updatedGenres) => {
    setSelectedGenres(updatedGenres);
};

const handleCountryChange = (countries) => {
    setSelectedCountries(countries);
};

const handleReset = () => {
    setCheckboxes({});
    setSelectedGenres({});
    setSelectedCountries({});
    setIsFilmSelected(false);
    setIsSerialSelected(false);
};

const handleFilmClick = () => {
    setIsFilmSelected(true);
    setIsSerialSelected(false);
};

const handleSerialClick = () => {
    setIsFilmSelected(false);
    setIsSerialSelected(true);
};

return (
  <div className={`searchFiltersContainerSm d-lg-none d-flex flex-column gap-2 position-fixed z-3 top-0 col-12 h-100 ${isMenuVisible ? 'visible' : ''}`}>
      <div className="d-flex justify-btw align-center">
        <div className="d-flex justify-start align-center gap-1">
        <button className="reverse" onClick={toggleMenuVisibility}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="40" viewBox="10 0 20 40" fill="#fff"><g style={{transform: 'rotate(180deg)', transformOrigin: '20px center'}}><path  d="M14.77 18.793c0-.493.196-.967.545-1.315l6.2-6.2a1.86 1.86 0 0 1 2.626 2.633l-4.88 4.882 4.88 4.88a1.86 1.86 0 0 1-2.63 2.63l-6.2-6.2c-.347-.348-.54-.82-.54-1.31z"></path></g></svg>
        </button>
          <p className="white-color font-16 font-weight-normal">فیلترها</p>
        </div>
          <button className="active font-14 line-height-28 reset-btn" onClick={handleReset}>
              حذف همه
          </button>
      </div>
      <div className="d-flex justify-start align-center gap-2 searchFilterBorder">
          <div className="d-flex gap-1">
              <input type="checkbox" name="film" id="فیلم" checked={isFilmSelected} onClick={handleFilmClick} onChange={() => setCheckboxes(prevState => ({ ...prevState, film: !prevState.film }))} />
              <label className="white-color font-weight-normal font-14" htmlFor="فیلم">فیلم</label>
          </div>
          <div className="d-flex gap-1">
              <input type="checkbox" name="serial" id="سریال" checked={isSerialSelected} onClick={handleSerialClick} onChange={() => setCheckboxes(prevState => ({ ...prevState, serial: !prevState.serial }))} />
              <label className="white-color font-weight-normal font-14" htmlFor="سریال">سریال</label>
          </div>
      </div>
      <GenreFilter
          checkboxes={selectedGenres}
          setCheckboxes={setSelectedGenres}
          handleGenreChange={handleGenreChange}
          availableGenres={availableGenres}
      />
      <CountryFilter checkboxes={selectedCountries} setCheckboxes={setSelectedCountries} handleCountryChange={handleCountryChange} />
      <SoundFilter checkboxes={checkboxes} setCheckboxes={setCheckboxes} />
      <OrganizeFilter checkboxes={checkboxes} setCheckboxes={setCheckboxes} />
  </div>
);
}