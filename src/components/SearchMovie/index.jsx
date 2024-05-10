import React, { useState } from 'react';
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

    const handleReset = () => {
        // Reset all checkbox states to false
        setCheckboxes({
            film: false,
            serial: false,
            // Add more checkbox states here if needed
        });
    };

    return (
        <div className="container" style={{minHeight:'100vh'}}>
            <div className="d-flex justify-end gap-5 position-relative h-100">
                <div className="searchFiltersContainer  border-radius-12 d-flex flex-column gap-2 position-fixed top-0 right-0 z-0">
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
                <div className="col-12 d-flex flex-column justify-center gap-10" style={{marginRight:'22em'}}>
                    <div className="searchInputContainer col-12 d-flex justify-sm-start align-center gap-1 font-xl-14 font-12 border-radius-12 line-height-xl-24 line-height-21">
                        <img src={searchIcon} alt='searchIcon'/>
                        <input className="searchInput col-12 line-height-xl-24 font-12 line-height-21 font-weight-normal" type="text" placeholder="فیلم، سریال، بازیگر و ژانر" />
                    </div>
                    <div className="d-flex justify-center">
                        <PreResult />
                    </div>
                </div>
            </div>
        </div>
    );
}
