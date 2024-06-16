import React, {useState} from 'react';
import ScrollToTop from "../../helpers/ScrollToTop";
import './index.css';
import Filters from './Filters';
import SearchInput from './Search';
import FiltersSm from './Filters/FiltersSm';

export default function Search() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenuVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div className="container SearchMovie" style={{ minHeight: '100vh', paddingTop: '5rem' }}>
    <ScrollToTop/>
      <div className="d-flex justify-center align-center gap-5  position-relative h-lg-100 h-auto">
        <FiltersSm isMenuVisible={isMenuVisible} toggleMenuVisibility={toggleMenuVisibility}/>
        <Filters/>
        <SearchInput toggleMenuVisibility={toggleMenuVisibility}/>
      </div>
    </div>
  );
}