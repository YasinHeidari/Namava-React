import React, { useState } from 'react';
import { Checkbox } from 'antd';
import searchArrowDown from '../../../../images/searchArrowDown.svg';
import "./index.css";

export default function CountryFilter({ checkboxes, setCheckboxes }) {
    const [isActive, setIsActive] = useState(false);
    const [filter, setFilter] = useState('');

    const handleReset = () => {
        setCheckboxes({});
    };

    const options = [
        { text: "ایران" , "iso_3166_1": "IR" },
        { text: "آمریکا" , "iso_3166_1": "US" },
        { text: "هند" , "iso_3166_1": "IN" },
        { text: "چین" , "iso_3166_1": "CN" },
        { text: "کره جنوبی" , "iso_3166_1": "KR" },
        { text: "ژاپن" , "iso_3166_1": "JP" },
        { text: "ترکیه" , "iso_3166_1": "TR" },
        { text: "آلمان" , "iso_3166_1": "DE" },
        { text: "فرانسه" , "iso_3166_1": "FR" },
        { text: "ایتالیا" , "iso_3166_1": "IT" },
        { text: "انگلستان" , "iso_3166_1": "GB" },
        { text: "اسپانیا" , "iso_3166_1": "ES" },
        { text: "دانمارک" , "iso_3166_1": "DK" },
        { text: "سوئد" , "iso_3166_1": "SE" },
        { text: "روسیه" , "iso_3166_1": "RU" },
        { text: "آرژانتین" , "iso_3166_1": "AR" },
        { text: "مکزیک" , "iso_3166_1": "MX" },
        { text: "برزیل" , "iso_3166_1": "BR" },
        { text: "استرالیا" , "iso_3166_1": "AU" },
        { text: "کانادا" , "iso_3166_1": "CA" },
    ];

    const handleSelectOptionClick = () => {
        setIsActive(!isActive);
    };

    const handleOptionClick = () => {
        // Don't close the content when a checkbox is clicked
    };

    const handleSearchChange = (e) => {
        setFilter(e.target.value.toUpperCase());
    };

    return (
        <div className={`searchFilterBorder d-flex flex-column  select-box ${isActive ? 'active' : ''}`}>
            <div className="select-option  d-flex justify-btw align-center" onClick={handleSelectOptionClick}>
                <input type="text" placeholder="کشور سازنده" readOnly name="soValue" />
                <img src={searchArrowDown} alt='arrow down' className={`searchArrowDown ${isActive ? 'rotate' : ''}`}/>

            </div>
            <div className={`content col-12 z-0 ${isActive ? 'active' : ''}`}>
                <div className="search" style={{ marginBottom:'1rem'}}>
                    <input className='border-radius-12 col-12' type="text" id="optionSearch" placeholder="جستجو کشور سازنده" onChange={handleSearchChange} name="optionSearch" />
                </div>
                <span className='lighter-white-font line-height-24 font-14 font-weight-normal' style={{ marginTop:'1rem'}}>همه کشورها</span>
                <ul className="options">
                    {options.map((option, index) => (
                        <li key={index} className='white-color font-weight-normal' style={{ display: option.text.indexOf(filter) > -1 ? '' : 'none' }}>
                            <div className='d-flex gap-1'>
                                <Checkbox checked={checkboxes[option.text]} onChange={(e) => setCheckboxes({ ...checkboxes, [option.text]: e.target.checked })} onClick={(e) => e.stopPropagation()} />
                                <p className='font-14 font-weight-normal'>{option.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}


