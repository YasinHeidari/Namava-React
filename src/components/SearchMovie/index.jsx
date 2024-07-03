// src/components/Search/index.js
import React, { useEffect, useState } from "react";
import ScrollToTop from "../../helpers/ScrollToTop";
import Filters from "./Filters";
import SearchInput from "./Search";
import FiltersSm from "./FiltersSm";
import "./index.css";

export default function Search() {
  const [selectedGenres, setSelectedGenres] = useState({});
  const [selectedCountries, setSelectedCountries] = useState({});
  const [isFilmSelected, setIsFilmSelected] = useState(true); // Example state for film/serial toggle
  const [isSerialSelected, setIsSerialSelected] = useState(false); 
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenuVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  useEffect(() => {
    document.title = 'جستجو';
  }, []);

  return (
    <div
      className="container SearchMovie"
      style={{ minHeight: "100vh", paddingTop: "5rem" }}
    >
      <ScrollToTop />
      <div className="d-flex justify-center align-center gap-5 position-relative h-lg-100 h-auto">
        <Filters 
          onGenresChange={setSelectedGenres} 
          onCountriesChange={setSelectedCountries}
          isFilmSelected={isFilmSelected}
          isSerialSelected={isSerialSelected}
          setIsFilmSelected={setIsFilmSelected}
          setIsSerialSelected={setIsSerialSelected}
        />
        <FiltersSm
          onGenresChange={setSelectedGenres}
          onCountriesChange={setSelectedCountries}
          isMenuVisible={isMenuVisible}
          toggleMenuVisibility={toggleMenuVisibility}
        />
        <SearchInput 
          selectedGenres={selectedGenres}
          selectedCountries={selectedCountries}
          isFilmSelected={isFilmSelected}
          isSerialSelected={isSerialSelected} 
          toggleMenuVisibility={toggleMenuVisibility} 
        />
      </div>
    </div>
  );
}

