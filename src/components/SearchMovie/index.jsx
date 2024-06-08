import React from 'react';
import ScrollToTop from "../../helpers/ScrollToTop";
import './index.css';
import Filters from './Filters';
import SearchInput from './Search';

export default function Search() {

  return (
    <div className="container SearchMovie" style={{ minHeight: '100vh', marginTop: '5rem' }}>
    <ScrollToTop/>
      <div className="d-flex justify-center gap-5 position-relative h-100">
        <Filters/>
        <SearchInput/>
      </div>
    </div>
  );
}