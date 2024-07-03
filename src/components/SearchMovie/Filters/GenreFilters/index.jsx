import React, { useState } from 'react';
import { Checkbox } from 'antd';
import searchArrowDown from '../../../../images/searchArrowDown.svg';

export default function GenreFilter({ checkboxes, setCheckboxes, handleGenreChange, availableGenres }) {
    const [isActive, setIsActive] = useState(false);
    const [filter, setFilter] = useState('');

    const handleReset = () => {
        setCheckboxes({});
    };

    const handleSelectOptionClick = () => {
        setIsActive(!isActive);
    };

    const handleOptionClick = () => {
        // Don't close the content when a checkbox is clicked
    };

    const handleSearchChange = (e) => {
        setFilter(e.target.value.toUpperCase());
    };

    const handleCheckboxChange = (genre_id, checked) => {
        const updatedCheckboxes = { ...checkboxes, [genre_id]: checked };
        setCheckboxes(updatedCheckboxes);
        handleGenreChange(updatedCheckboxes); // Pass selected genres to parent component
    };

    return (
        <div className={`searchFilterBorder d-flex flex-column select-box ${isActive ? 'active' : ''}`}>
            <div className="select-option d-flex justify-btw align-center" onClick={handleSelectOptionClick}>
                <input type="text" placeholder="ژانرها" readOnly name="soValue" />
                <img src={searchArrowDown} alt='arrow down' className={`searchArrowDown ${isActive ? 'rotate' : ''}`} />
            </div>
            <div className={`content col-12 z-0 ${isActive ? 'active' : ''}`}>
                <div className="search" style={{ marginBottom: '1rem' }}>
                    <input className='border-radius-12 col-12' type="text" id="optionSearch" placeholder="جستجو ژانرها" onChange={handleSearchChange} name="optionSearch" />
                </div>
                <span className='lighter-white-font line-height-24 font-14 font-weight-normal'>همه ژانرها</span>
                <ul className="options">
                    {availableGenres
                        .filter(option => option.name && option.name.toUpperCase().includes(filter))
                        .map((option) => (
                            <li key={option.id} className='white-color font-weight-normal'>
                                <div className='d-flex gap-1'>
                                    <Checkbox
                                        checked={checkboxes[option.id]}
                                        onChange={(e) => handleCheckboxChange(option.id, e.target.checked)}
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                    <p className='font-14 font-weight-normal'>{option.name}</p>
                                </div>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
}

