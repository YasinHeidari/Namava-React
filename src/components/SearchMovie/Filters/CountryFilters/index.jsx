import React, { useState } from 'react';
import { Checkbox } from 'antd';

import "./index.css";

export default function CountryFilter({ checkboxes, setCheckboxes }) {
    const [isActive, setIsActive] = useState(false);
    const [filter, setFilter] = useState('');

    const handleReset = () => {
        setCheckboxes({});
    };

    const options = [
        { text: "ایران" },
        { text: "آمریکا" },
        { text: "هند" },
        { text: "چین" },
        { text: "کره جنوبی" },
        { text: "ژاپن" },
        { text: "ترکیه" },
        { text: "آلمان" },
        { text: "فرانسه" },
        { text: "ایتالیا" },
        { text: "انگلستان" },
        { text: "اسپانیا" },
        { text: "دانمارک" },
        { text: "سوئد" },
        { text: "روسیه" },
        { text: "آرژانتین" },
        { text: "مکزیک" },
        { text: "برزیل" },
        { text: "استرالیا" },
        { text: "کانادا" },
        { text: "سایر" },
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
            <div className="select-option " onClick={handleSelectOptionClick}>
                <input type="text" placeholder="کشور سازنده" readOnly name="soValue" />
            </div>
            <div className="content col-12 z-0 d-none">
                <div className="search" style={{ marginBottom:'1rem'}}>
                    <input className='border-radius-12 col-12' type="text" id="optionSearch" placeholder="جستجو کشور سازنده" onChange={handleSearchChange} name="optionSearch" />
                </div>
                <span className='lighter-white-font line-height-24 font-14 font-weight-normal' style={{ marginTop:'1rem'}}>همه کشورها</span>
                <ul className="options">
                    {options.map((option, index) => (
                        <li key={index} className='white-color font-weight-normal' style={{ display: option.text.toUpperCase().indexOf(filter) > -1 ? '' : 'none' }}>
                            <div className='d-flex gap-1'>
                                <Checkbox checked={checkboxes[option.text]} onChange={(e) => setCheckboxes({ ...checkboxes, [option.text]: e.target.checked })} onClick={(e) => e.stopPropagation()} />
                                {option.text}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}


