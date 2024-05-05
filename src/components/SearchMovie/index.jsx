import React, { useState } from 'react';
import PreResult from './PreResult';
import './index.css';
import GenreFilter from './Filters/GenreFilters';
import CountryFilter from './Filters/CountryFilters';
import SoundFilter from './Filters/SoundFilters';

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
        <div className="container" style={{ marginTop: '10rem' }}>
            <div className="d-flex gap-5">
                <div className="searchFiltersContainer col-3 border-radius-12 d-flex flex-column gap-2">
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
                </div>
                <div className="col-12 d-flex flex-column justify-center gap-10">
                    <div className="searchInputContainer col-12 d-flex justify-sm-start align-center gap-1 font-xl-14 font-12 border-radius-12 line-height-xl-24 line-height-21">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="#fff"><path d="M23.175 7.15a9.78 9.78 0 0 0-7.108-3.394q-.17-.006-.342-.006a9.9 9.9 0 0 0-6.979 2.883 9.85 9.85 0 0 0-1.483 12.046 1.84 1.84 0 0 1-.264 2.252l-3.68 3.68a1.1 1.1 0 0 0-.317.79.94.94 0 0 0 .288.68c.394.353.992.344 1.375-.02l3.73-3.732c.587-.595 1.505-.712 2.223-.283 1.54.93 3.303 1.42 5.1 1.418a9.88 9.88 0 0 0 7.418-3.358c3.24-3.706 3.256-9.23.04-12.956zm-1.44 11.56a7.89 7.89 0 0 1-12.022.002c-2.48-2.95-2.48-7.258 0-10.21a7.89 7.89 0 0 1 12.025-.001c2.48 2.952 2.477 7.258-.003 10.208z"></path></svg>
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
