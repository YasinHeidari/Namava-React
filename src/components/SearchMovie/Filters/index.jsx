import { useState } from "react";
import GenreFilter from "./GenreFilters";
import CountryFilter from './CountryFilters';
import SoundFilter from './SoundFilters';
import OrganizeFilter from './OrganizeFilters';

export default function Filters(){
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
    return(
        <div className="searchFiltersContainer border-radius-12 d-flex flex-column gap-2 position-fixed right-0 z-0" style={{ top: '21%' }}>
          <div className="d-flex justify-btw align-center">
            <p className="white-color font-16 font-weight-normal">فیلترها</p>
            <button className="active font-14 line-height-28 reset-btn" onClick={handleReset}>
              حذف همه
            </button>
          </div>
          <div className="d-flex justify-start align-center gap-2 searchFilterBorder">
            <div className="d-flex gap-1">
              <input type="checkbox" name="film" id="فیلم" checked={checkboxes.film} onChange={() => setCheckboxes(prevState => ({ ...prevState, film: !prevState.film }))} />
              <label className="white-color font-weight-normal font-14" htmlFor="فیلم">فیلم</label>
            </div>
            <div className="d-flex gap-1">
              <input type="checkbox" name="serial" id="سریال" checked={checkboxes.serial} onChange={() => setCheckboxes(prevState => ({ ...prevState, serial: !prevState.serial }))} />
              <label className="white-color font-weight-normal font-14" htmlFor="سریال">سریال</label>
            </div>
          </div>
          <GenreFilter checkboxes={checkboxes} setCheckboxes={setCheckboxes} />
          <CountryFilter checkboxes={checkboxes} setCheckboxes={setCheckboxes} />
          <SoundFilter checkboxes={checkboxes} setCheckboxes={setCheckboxes} />
          <OrganizeFilter checkboxes={checkboxes} setCheckboxes={setCheckboxes} />
        </div>
    )
}