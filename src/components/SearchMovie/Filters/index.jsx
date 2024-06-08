import { useState , useEffect } from "react";
import GenreFilter from "./GenreFilters";
import CountryFilter from './CountryFilters';
import SoundFilter from './SoundFilters';
import OrganizeFilter from './OrganizeFilters';

export default function Filters(){
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
  <div className="searchFiltersContainer border-radius-12 d-flex flex-column gap-2 position-fixed right-0 z-0" style={{ top: '21%' }}>
      <div className="d-flex justify-btw align-center">
          <p className="white-color font-16 font-weight-normal">فیلترها</p>
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
