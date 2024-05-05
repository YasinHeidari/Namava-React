import React, { useState } from 'react';
import { Checkbox } from 'antd';

import "./index.css";

export default function SoundFilter({ checkboxes, setCheckboxes }) {
    const [isActive, setIsActive] = useState(false);
    const [filter, setFilter] = useState('');

    const handleReset = () => {
        setCheckboxes({});
    };

    const options = [
        { id: 1, text: "صدای ترکی" },
        { id: 2, text: "صدای کره ای" },
        { id: 3, text: "صدای هندی" },
        { id: 4, text: "صدای ژاپنی" },
        { id: 5, text: "صدای اسپانیایی" },
        { id: 6, text: "صدای آلمانی" },
        { id: 7, text: "صدای فرانسوی" },
        { id: 8, text: "صدای ایتالیایی" },
        { id: 9, text: "صدای آذری" },
        { id: 10, text: "صدای چینی" },
        { id: 11, text: "صدای روسی" },
        { id: 12, text: "دوبله نماوا" },
        { id: 13, text: "دوبله فارسی" },
        { id: 14, text: "زیرنویس فارسی" },
        { id: 15, text: "زیرنویس انگلیسی" },
        { id: 16, text: "مخصوص ناشنوایان" },
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
        <div className={`searchFilterBorder d-flex flex-column  select-box ${isActive ? 'active' : ''}`} onClick={handleSelectOptionClick}>
            <div className="select-option ">
                <input type="text" placeholder="صدا و زیرنویس" readOnly name="soValue" />
                <span></span>
            </div>
            <div className="content col-12 z-0 d-none" onClick={(e) => e.stopPropagation()}>
                <span className='lighter-white-font line-height-24 font-14 font-weight-normal' style={{ marginTop:'.5rem'}}>همه زیرنویس ها</span>

                <ul className="options">
                    {options.map((option) => (
                        <li key={option.id} className='white-color font-weight-normal' style={{ display: option.text.toUpperCase().indexOf(filter) > -1 ? '' : 'none' }}>
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

